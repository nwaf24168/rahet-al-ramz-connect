
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function SalesPerformance() {
  // This would come from your API in a real application
  const data = [
    {
      time: "الأسبوع 1",
      sales: 4.5,
      calls: 152,
    },
    {
      time: "الأسبوع 2",
      sales: 4.2,
      calls: 138,
    },
    {
      time: "الأسبوع 3",
      sales: 4.8,
      calls: 147,
    },
    {
      time: "الأسبوع 4",
      sales: 4.3,
      calls: 123,
    },
    {
      time: "الأسبوع 5",
      sales: 4.6,
      calls: 131,
    },
    {
      time: "الأسبوع 6",
      sales: 4.9,
      calls: 142,
    },
  ];

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="rtl">أداء فريق المبيعات</CardTitle>
        <CardDescription className="rtl">
          متوسط تقييم خدمة العملاء (من 5) وعدد المكالمات خلال آخر 6 أسابيع
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis
              dataKey="time"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              yAxisId="left"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
              domain={[0, 5]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              formatter={(value, name) => {
                if (name === 'sales') return [`${value} من 5`, 'تقييم الخدمة'];
                return [`${value}`, 'عدد المكالمات'];
              }}
              labelFormatter={(label) => `${label}`}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="sales"
              stroke="#0e6e4f"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="calls"
              stroke="#d4af37"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
