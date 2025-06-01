'use client';

import { getSubscribeList } from '@/services/admin/subscribe';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@workspace/ui/components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@workspace/ui/components/form';
import { ScrollArea } from '@workspace/ui/components/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@workspace/ui/components/sheet';
import { Combobox } from '@workspace/ui/custom-components/combobox';
import { DatePicker } from '@workspace/ui/custom-components/date-picker';
import { EnhancedInput } from '@workspace/ui/custom-components/enhanced-input';
import { Icon } from '@workspace/ui/custom-components/icon';
import { unitConversion } from '@workspace/ui/utils';
import { useTranslations } from 'next-intl';
import { ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface Props {
  trigger: ReactNode;
  title: string;
  loading?: boolean;
  initialData?: API.UserSubscribe;
  onSubmit: (values: any) => Promise<boolean>;
}

const formSchema = z.object({
  subscribe_id: z.number().optional(),
  traffic: z.number().optional(),
  speed_limit: z.number().optional(),
  device_limit: z.number().optional(),
  expired_at: z.number().nullish().optional(),
  upload: z.number().optional(),
  download: z.number().optional(),
});

export function SubscriptionForm({ trigger, title, loading, initialData, onSubmit }: Props) {
  const t = useTranslations('user');
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subscribe_id: initialData?.subscribe_id || 0,
      traffic: initialData?.traffic || 0,
      upload: initialData?.upload || 0,
      download: initialData?.download || 0,
      expired_at: initialData?.expire_time || 0,
      ...(initialData && { id: initialData.id }),
    },
  });

  const handleSubmit = async (values: any) => {
    const success = await onSubmit(values);
    if (success) {
      setOpen(false);
      form.reset();
    }
  };

  const { data: subscribe } = useQuery({
    queryKey: ['getSubscribeList', 'all'],
    queryFn: async () => {
      const { data } = await getSubscribeList({
        page: 1,
        size: 9999,
      });
      return data.data?.list as API.Subscribe[];
    },
  });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          onClick={() => {
            form.reset();
            setOpen(true);
          }}
        >
          {trigger}
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <ScrollArea className='h-[calc(100dvh-48px-36px-36px-env(safe-area-inset-top))]'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='mt-4 space-y-4'>
              <FormField
                control={form.control}
                name='subscribe_id'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('subscription')}</FormLabel>
                    <FormControl>
                      <Combobox<number, false>
                        placeholder='Select Subscription'
                        value={field.value}
                        onChange={(value) => {
                          form.setValue(field.name, value);
                        }}
                        options={subscribe?.map((item: API.Subscribe) => ({
                          value: item.id,
                          label: item.name,
                        }))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='traffic'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('trafficLimit')}</FormLabel>
                    <FormControl>
                      <EnhancedInput
                        placeholder={t('unlimited')}
                        type='number'
                        {...field}
                        formatInput={(value) => unitConversion('bytesToGb', value)}
                        formatOutput={(value) => unitConversion('gbToBytes', value)}
                        suffix='GB'
                        onValueChange={(value) => {
                          form.setValue(field.name, value as number);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='upload'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('uploadTraffic')}</FormLabel>
                    <FormControl>
                      <EnhancedInput
                        placeholder='0'
                        type='number'
                        {...field}
                        formatInput={(value) => unitConversion('bytesToGb', value)}
                        formatOutput={(value) => unitConversion('gbToBytes', value)}
                        suffix='GB'
                        onValueChange={(value) => {
                          form.setValue(field.name, value as number);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='download'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('downloadTraffic')}</FormLabel>
                    <FormControl>
                      <EnhancedInput
                        placeholder='0'
                        type='number'
                        {...field}
                        formatInput={(value) => unitConversion('bytesToGb', value)}
                        formatOutput={(value) => unitConversion('gbToBytes', value)}
                        suffix='GB'
                        onValueChange={(value) => {
                          form.setValue(field.name, value as number);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='expired_at'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('expiredAt')}</FormLabel>
                    <FormControl>
                      <DatePicker
                        placeholder={t('permanent')}
                        value={field.value}
                        onChange={(value) => {
                          if (value === field.value) {
                            form.setValue(field.name, 0);
                          } else {
                            form.setValue(field.name, value!);
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </ScrollArea>
        <SheetFooter className='flex-row justify-end gap-2 pt-3'>
          <Button
            variant='outline'
            disabled={loading}
            onClick={() => {
              setOpen(false);
            }}
          >
            {t('cancel')}
          </Button>
          <Button disabled={loading} onClick={form.handleSubmit(handleSubmit)}>
            {loading && <Icon icon='mdi:loading' className='mr-2 animate-spin' />}
            {t('confirm')}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
