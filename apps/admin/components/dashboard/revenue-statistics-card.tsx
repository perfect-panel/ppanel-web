'use client';

import { queryRevenueStatistics } from '@/services/admin/console';
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
import { unitConversion } from '@workspace/ui/utils';
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
import { Display } from '../display';
import { Empty } from '../empty';

export function RevenueStatisticsCard() {
  const t = useTranslations('index');

  const IncomeStatisticsConfig = {
    new_purchase: {
      label: t('newPurchase'),
      color: 'hsl(var(--chart-1))',
    },
    repurchase: {
      label: t('repurchase'),
      color: 'hsl(var(--chart-2))',
    },
  };

  const locale = useLocale();
  const { data: RevenueStatistics } = useQuery({
    queryKey: ['queryRevenueStatistics'],
    queryFn: async () => {
      const { data } = await queryRevenueStatistics();
      return data.data;
    },
  });

  return (
    <Tabs defaultValue='today'>
      <Card className='h-full'>
        <CardHeader className='flex !flex-row items-center justify-between'>
          <CardTitle>{t('revenueTitle')}</CardTitle>
          <TabsList>
            <TabsTrigger value='today'>{t('today')}</TabsTrigger>
            <TabsTrigger value='month'>{t('month')}</TabsTrigger>
            <TabsTrigger value='total'>{t('total')}</TabsTrigger>
          </TabsList>
        </CardHeader>
        <TabsContent value='today' className='h-full'>
          <CardContent className='h-80'>
            {RevenueStatistics?.today.new_order_amount ||
            RevenueStatistics?.today.renewal_order_amount ? (
              <ChartContainer config={IncomeStatisticsConfig} className='mx-auto max-h-80'>
                <PieChart>
                  <ChartLegend content={<ChartLegendContent />} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={[
                      {
                        type: 'new_purchase',
                        value: unitConversion(
                          'centsToDollars',
                          RevenueStatistics?.today.new_order_amount,
                        ),
                        fill: 'var(--color-new_purchase)',
                      },
                      {
                        type: 'repurchase',
                        value: unitConversion(
                          'centsToDollars',
                          RevenueStatistics?.today.renewal_order_amount,
                        ),
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
                                className='fill-foreground text-2xl font-bold'
                              >
                                {unitConversion(
                                  'centsToDollars',
                                  RevenueStatistics?.today.amount_total,
                                )}
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
                <div className='text-muted-foreground text-xs'>{t('totalIncome')}</div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  <Display value={RevenueStatistics?.today.amount_total} type='currency' />
                </div>
              </div>
              <Separator orientation='vertical' className='mx-2 h-10 w-px' />
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {IncomeStatisticsConfig.new_purchase.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  <Display value={RevenueStatistics?.today.new_order_amount} type='currency' />
                </div>
              </div>
              <Separator orientation='vertical' className='mx-2 h-10 w-px' />
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {IncomeStatisticsConfig.repurchase.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  <Display value={RevenueStatistics?.today.renewal_order_amount} type='currency' />
                </div>
              </div>
            </div>
          </CardFooter>
        </TabsContent>

        <TabsContent value='month' className='h-full'>
          <CardContent className='h-80'>
            {RevenueStatistics?.monthly.list && RevenueStatistics?.monthly.list.length > 0 ? (
              <ChartContainer config={IncomeStatisticsConfig} className='max-h-80 w-full'>
                <BarChart
                  accessibilityLayer
                  data={
                    RevenueStatistics?.monthly.list?.map((item) => ({
                      date: item.date,
                      new_purchase: unitConversion('centsToDollars', item.new_order_amount),
                      repurchase: unitConversion('centsToDollars', item.renewal_order_amount),
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
                <div className='text-muted-foreground text-xs'>{t('totalIncome')}</div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  <Display value={RevenueStatistics?.monthly.amount_total} type='currency' />
                </div>
              </div>
              <Separator orientation='vertical' className='mx-2 h-10 w-px' />
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {IncomeStatisticsConfig.new_purchase.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  <Display value={RevenueStatistics?.monthly.new_order_amount} type='currency' />
                </div>
              </div>
              <Separator orientation='vertical' className='mx-2 h-10 w-px' />
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-muted-foreground text-xs'>
                  {IncomeStatisticsConfig.repurchase.label}
                </div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  <Display
                    value={RevenueStatistics?.monthly.renewal_order_amount}
                    type='currency'
                  />
                </div>
              </div>
            </div>
          </CardFooter>
        </TabsContent>

        <TabsContent value='total' className='h-full'>
          <CardContent className='h-80'>
            {RevenueStatistics?.all.list && RevenueStatistics?.all.list.length > 0 ? (
              <ChartContainer config={IncomeStatisticsConfig} className='max-h-80 w-full'>
                <AreaChart
                  accessibilityLayer
                  data={
                    RevenueStatistics?.all.list?.map((item) => ({
                      date: item.date,
                      new_purchase: unitConversion('centsToDollars', item.new_order_amount),
                      repurchase: unitConversion('centsToDollars', item.renewal_order_amount),
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
                <div className='text-muted-foreground text-xs'>{t('totalIncome')}</div>
                <div className='text-xl font-bold tabular-nums leading-none'>
                  <Display value={RevenueStatistics?.all.amount_total} type='currency' />
                </div>
              </div>
            </div>
          </CardFooter>
        </TabsContent>
      </Card>
    </Tabs>
  );
}
