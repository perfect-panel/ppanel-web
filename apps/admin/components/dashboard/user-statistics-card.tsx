'use client';

import { queryUserStatistics } from '@/services/admin/console';
import { useQuery } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@workspace/ui/components/chart';
import { Separator } from '@workspace/ui/components/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@workspace/ui/components/tabs';
import { useLocale, useTranslations } from 'next-intl';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Pie,
  PieChart,
  XAxis,
} from 'recharts';
import { Empty } from '../empty';

export function UserStatisticsCard() {
  const t = useTranslations('index');

  const UserStatisticsConfig = {
    register: {
      label: t('register'),
      color: 'hsl(var(--chart-1))',
    },
    new_purchase: {
      label: t('newPurchase'),
      color: 'hsl(var(--chart-2))',
    },
    repurchase: {
      label: t('repurchase'),
      color: 'hsl(var(--chart-3))',
    },
  };
  const locale = useLocale();

  const { data: UserStatistics } = useQuery({
    queryKey: ['queryUserStatistics'],
    queryFn: async () => {
      const { data } = await queryUserStatistics();
      return data.data;
    },
  });

  return (
    <Tabs defaultValue='today'>
      <Card className='h-full'>
        <CardHeader className='flex !flex-row items-center justify-between'>
          <CardTitle>{t('userTitle')}</CardTitle>
          <TabsList>
            <TabsTrigger value='today'>{t('today')}</TabsTrigger>
            <TabsTrigger value='month'>{t('month')}</TabsTrigger>
            <TabsTrigger value='total'>{t('total')}</TabsTrigger>
          </TabsList>
        </CardHeader>

        <TabsContent value='today' className='h-full'>
          <CardContent className='h-80'>
            {UserStatistics?.today.register ||
            UserStatistics?.today.new_order_users ||
            UserStatistics?.today.renewal_order_users ? (
              <ChartContainer config={UserStatisticsConfig} className='mx-auto max-h-80'>
                <PieChart>
                  <ChartLegend content={<ChartLegendContent />} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={[
                      {
                        type: 'register',
                        value: UserStatistics?.today.register || 0,
                        fill: 'var(--color-register)',
                      },
                      {
                        type: 'new_purchase',
                        value: UserStatistics?.today.new_order_users || 0,
                        fill: 'var(--color-new_purchase)',
                      },
                      {
                        type: 'repurchase',
                        value: UserStatistics?.today.renewal_order_users || 0,
                        fill: 'var(--color-repurchase)',
                      },
                    ]}
                    dataKey='value'
                    nameKey='type'
                    innerRadius={50}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                          const total =
                            (UserStatistics?.today.register || 0) +
                            (UserStatistics?.today.new_order_users || 0) +
                            (UserStatistics?.today.renewal_order_users || 0);
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor='middle'
                              dominantBaseline='middle'
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className='fill-foreground text-3xl font-bold'
                              >
                                {total}
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            ) : (
              <div className='flex h-full items-center justify-center'>
                <Empty />
              </div>
            )}
          </CardContent>
          <CardFooter className='flex h-20 flex-row border-t p-4'>
            <div className='flex w-full items-center gap-2'>
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {UserStatisticsConfig.register.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  {UserStatistics?.today.register}
                </div>
              </div>
              <Separator orientation='vertical' className='mx-2 h-10 w-px' />
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {UserStatisticsConfig.new_purchase.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  {UserStatistics?.today.new_order_users}
                </div>
              </div>
              <Separator orientation='vertical' className='mx-2 h-10 w-px' />
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {UserStatisticsConfig.repurchase.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  {UserStatistics?.today.renewal_order_users}
                </div>
              </div>
            </div>
          </CardFooter>
        </TabsContent>

        <TabsContent value='month' className='h-full'>
          <CardContent className='h-80'>
            {UserStatistics?.monthly.list && UserStatistics?.monthly.list.length > 0 ? (
              <ChartContainer config={UserStatisticsConfig} className='max-h-80 w-full'>
                <BarChart
                  accessibilityLayer
                  data={
                    UserStatistics?.monthly.list?.map((item) => ({
                      date: item.date,
                      register: item.register,
                      new_purchase: item.new_order_users,
                      repurchase: item.renewal_order_users,
                    })) || []
                  }
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey='date'
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => {
                      return new Date(value).toLocaleDateString(locale, {
                        month: 'short',
                        day: 'numeric',
                      });
                    }}
                  />
                  <Bar dataKey='register' fill='var(--color-register)' radius={4} />
                  <Bar dataKey='new_purchase' fill='var(--color-new_purchase)' radius={4} />
                  <Bar dataKey='repurchase' fill='var(--color-repurchase)' radius={4} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            ) : (
              <div className='flex h-full items-center justify-center'>
                <Empty />
              </div>
            )}
          </CardContent>
          <CardFooter className='flex h-20 flex-row border-t p-4'>
            <div className='flex w-full items-center gap-2'>
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {UserStatisticsConfig.register.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  {UserStatistics?.monthly.register}
                </div>
              </div>
              <Separator orientation='vertical' className='mx-2 h-10 w-px' />
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {UserStatisticsConfig.new_purchase.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  {UserStatistics?.monthly.new_order_users}
                </div>
              </div>
              <Separator orientation='vertical' className='mx-2 h-10 w-px' />
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {UserStatisticsConfig.repurchase.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  {UserStatistics?.monthly.renewal_order_users}
                </div>
              </div>
            </div>
          </CardFooter>
        </TabsContent>

        <TabsContent value='total' className='h-full'>
          <CardContent className='h-80'>
            {UserStatistics?.all.list && UserStatistics?.all.list.length > 0 ? (
              <ChartContainer config={UserStatisticsConfig} className='max-h-80 w-full'>
                <AreaChart
                  accessibilityLayer
                  data={
                    UserStatistics?.all.list?.map((item) => ({
                      date: item.date,
                      register: item.register,
                      new_purchase: item.new_order_users,
                      repurchase: item.renewal_order_users,
                    })) || []
                  }
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey='date'
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => {
                      return new Date(value).toLocaleDateString(locale, {
                        month: 'short',
                      });
                    }}
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dot' />} />
                  <Area
                    dataKey='register'
                    type='natural'
                    fill='var(--color-register)'
                    fillOpacity={0.4}
                    stroke='var(--color-register)'
                    stackId='a'
                  />
                  <Area
                    dataKey='new_purchase'
                    type='natural'
                    fill='var(--color-new_purchase)'
                    fillOpacity={0.4}
                    stroke='var(--color-new_purchase)'
                    stackId='a'
                  />
                  <Area
                    dataKey='repurchase'
                    type='natural'
                    fill='var(--color-repurchase)'
                    fillOpacity={0.4}
                    stroke='var(--color-repurchase)'
                    stackId='a'
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            ) : (
              <div className='flex h-full items-center justify-center'>
                <Empty />
              </div>
            )}
          </CardContent>
          <CardFooter className='flex h-20 flex-row border-t p-4'>
            <div className='flex w-full items-center gap-2'>
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {UserStatisticsConfig.register.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  {UserStatistics?.all.register}
                </div>
              </div>
            </div>
          </CardFooter>
        </TabsContent>
      </Card>
    </Tabs>
  );
}
