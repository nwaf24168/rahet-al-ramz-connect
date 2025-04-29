
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export function CustomerInterestsChart() {
  // This is sample data, in a real application it would come from your API
  const data = [
    {
      name: "شقة",
      total: 42,
    },
    {
      name: "فيلا",
      total: 23,
    },
    {
      name: "دوبلكس",
      total: 18,
    },
    {
      name: "أرض",
      total: 4,
    }
  ];

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="rtl">اهتمامات العملاء</CardTitle>
        <CardDescription className="rtl">
          توزيع رغبات العملاء حسب نوع العقار (آخر 30 يوم)
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              formatter={(value) => [`${value} عميل`, 'العدد']}
              labelFormatter={(name) => `نوع العقار: ${name}`}
            />
            <Bar
              dataKey="total"
              fill="#0e6e4f"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
