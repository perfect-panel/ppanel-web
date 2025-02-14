'use client';

import { queryServerTotalData, queryTicketWaitReply } from '@/services/admin/console';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@workspace/ui/components/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select';
import { Tabs, TabsList, TabsTrigger } from '@workspace/ui/components/tabs';
import { Icon } from '@workspace/ui/custom-components/icon';
import { formatBytes } from '@workspace/ui/utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';
import { Empty } from '../empty';
import { RevenueStatisticsCard } from './revenue-statistics-card';
import { UserStatisticsCard } from './user-statistics-card';

export default function Statistics() {
  const t = useTranslations('index');

  const { data: TicketTotal } = useQuery({
    queryKey: ['queryTicketWaitReply'],
    queryFn: async () => {
      const { data } = await queryTicketWaitReply();
      return data.data?.count;
    },
  });
  const { data: ServerTotal } = useQuery({
    queryKey: ['queryServerTotalData'],
    queryFn: async () => {
      const { data } = await queryServerTotalData();
      return data.data;
    },
  });

  const [dataType, setDataType] = useState<string | 'nodes' | 'users'>('nodes');
  const [timeFrame, setTimeFrame] = useState<string | 'today' | 'yesterday'>('today');

  const trafficData = {
    nodes: {
      today:
        ServerTotal?.server_traffic_ranking_today?.map((item) => ({
          name: item.name,
          traffic: item.download + item.upload,
        })) || [],
      yesterday:
        ServerTotal?.server_traffic_ranking_yesterday?.map((item) => ({
          name: item.name,
          traffic: item.download + item.upload,
        })) || [],
    },
    users: {
      today:
        ServerTotal?.user_traffic_ranking_today?.map((item) => ({
          name: item.user_id,
          traffic: item.download + item.upload,
          email: item.email,
        })) || [],
      yesterday:
        ServerTotal?.user_traffic_ranking_yesterday?.map((item) => ({
          name: item.user_id,
          traffic: item.download + item.upload,
          email: item.email,
        })) || [],
    },
  };
  const currentData =
    trafficData[dataType as 'nodes' | 'users'][timeFrame as 'today' | 'yesterday'];

  return (
    <>
      <div className='grid grid-cols-2 gap-2 md:grid-cols-4'>
        {[
          {
            title: t('onlineIPCount'),
            value: ServerTotal?.online_user_ips || 0,
            icon: 'uil:users-alt',
            href: '/dashboard/server',
          },
          {
            title: t('onlineNodeCount'),
            value: ServerTotal?.online_servers || 0,
            icon: 'uil:server-network',
            href: '/dashboard/server',
          },
          {
            title: t('offlineNodeCount'),
            value: ServerTotal?.offline_servers || 0,
            icon: 'uil:server-network-alt',
            href: '/dashboard/server',
          },
          {
            title: t('pendingTickets'),
            value: TicketTotal || 0,
            icon: 'uil:clipboard-notes',
            href: '/dashboard/ticket',
          },
          {
            title: t('todayUploadTraffic'),
            value: formatBytes(ServerTotal?.today_upload || 0),
            icon: 'uil:arrow-up',
          },
          {
            title: t('todayDownloadTraffic'),
            value: formatBytes(ServerTotal?.today_download || 0),
            icon: 'uil:arrow-down',
          },
          {
            title: t('monthUploadTraffic'),
            value: formatBytes(ServerTotal?.monthly_upload || 0),
            icon: 'uil:cloud-upload',
          },
          {
            title: t('monthDownloadTraffic'),
            value: formatBytes(ServerTotal?.monthly_download || 0),
            icon: 'uil:cloud-download',
          },
        ].map((item, index) => (
          <Link href={item.href || '#'} key={index}>
            <Card className='cursor-pointer'>
              <CardHeader className='p-4'>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className='flex justify-between p-4 text-xl'>
                <Icon icon={item.icon} className='text-muted-foreground' />
                <div className='text-xl font-bold tabular-nums leading-none'>{item.value}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
        <RevenueStatisticsCard />
        <UserStatisticsCard />
        <Card>
          <CardHeader className='flex !flex-row items-center justify-between'>
            <CardTitle>{t('trafficRank')}</CardTitle>
            <Tabs value={timeFrame} onValueChange={setTimeFrame}>
              <TabsList>
                <TabsTrigger value='today'>{t('today')}</TabsTrigger>
                <TabsTrigger value='yesterday'>{t('yesterday')}</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className='h-80'>
            <div className='mb-6 flex items-center justify-between'>
              <h4 className='font-semibold'>
                {dataType === 'nodes' ? t('nodeTraffic') : t('userTraffic')}
              </h4>
              <Select onValueChange={setDataType} defaultValue='nodes'>
                <SelectTrigger className='w-28'>
                  <SelectValue placeholder={t('selectTypePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='nodes'>{t('nodes')}</SelectItem>
                  <SelectItem value='users'>{t('users')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {currentData.length > 0 ? (
              <ChartContainer
                config={{
                  traffic: {
                    label: t('traffic'),
                    color: 'hsl(var(--primary))',
                  },
                  type: {
                    label: t('type'),
                    color: 'hsl(var(--muted))',
                  },
                  email: {
                    label: t('email'),
                    color: 'hsl(var(--muted))',
                  },
                  label: {
                    color: 'hsl(var(--foreground))',
                  },
                }}
                className='max-h-80'
              >
                <BarChart data={currentData} layout='vertical' height={400}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis
                    type='number'
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => formatBytes(value || 0)}
                  />
                  <YAxis
                    type='category'
                    dataKey='name'
                    tickLine={false}
                    axisLine={false}
                    interval={0}
                    tickMargin={0}
                    width={15}
                    tickFormatter={(value, index) => String(index + 1)}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        label={true}
                        labelFormatter={(label) =>
                          dataType === 'nodes'
                            ? `${t('nodes')}: ${label}`
                            : `${t('users')}: ${label}`
                        }
                        formatter={(value) => {
                          return formatBytes(Number(value) || 0);
                        }}
                      />
                    }
                  />
                  <Bar dataKey='traffic' fill='hsl(var(--primary))' radius={[0, 4, 4, 0]}>
                    <LabelList
                      dataKey='name'
                      position='insideLeft'
                      offset={8}
                      className='fill-[--color-label]'
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            ) : (
              <div className='flex h-full items-center justify-center'>
                <Empty />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
