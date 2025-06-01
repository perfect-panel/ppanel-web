'use client';

import useGlobalStore from '@/config/use-global';
import { preUnsubscribe, unsubscribe } from '@/services/user/user';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@workspace/ui/components/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@workspace/ui/components/dialog';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { Display } from '../display';

interface UnsubscribeProps {
  id: number;
  allowDeduction?: boolean;
  status?: number;
}

export default function Unsubscribe({ id, allowDeduction, status }: Readonly<UnsubscribeProps>) {
  const t = useTranslations('subscribe.unsubscribe');
  const router = useRouter();
  const { common, getUserInfo } = useGlobalStore();
  const single_model = common.subscribe.single_model;

  const [open, setOpen] = useState(false);

  const { data } = useQuery({
    enabled: Boolean(open && id && allowDeduction),
    queryKey: ['preUnsubscribe', id],
    queryFn: async () => {
      const { data } = await preUnsubscribe({ id });
      return data.data?.deduction_amount;
    },
  });

  const handleSubmit = async () => {
    try {
      await unsubscribe(
        { id },
        {
          skipErrorHandler: true,
        },
      );
      toast.success(t('success'));
      router.refresh();
      await getUserInfo();
      setOpen(false);
    } catch (error) {
      toast.error(t('failed'));
    }
  };

  if ((!single_model && !allowDeduction) || status !== 1) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='destructive' size='sm'>
          {t('unsubscribe')}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('confirmUnsubscribe')}</DialogTitle>
          <DialogDescription>{t('confirmUnsubscribeDescription')}</DialogDescription>
        </DialogHeader>
        <p>{t('residualValue')}</p>
        <p className='text-primary text-2xl font-semibold'>
          <Display type='currency' value={data} />
        </p>
        <p className='text-muted-foreground text-sm'>{t('unsubscribeDescription')}</p>
        <DialogFooter>
          <Button variant='outline' onClick={() => setOpen(false)}>
            {t('cancel')}
          </Button>
          <Button onClick={handleSubmit}>{t('confirm')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
