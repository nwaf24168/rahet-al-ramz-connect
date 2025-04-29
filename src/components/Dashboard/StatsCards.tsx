
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Users, Clock, ThumbsUp } from "lucide-react";

export function StatsCards() {
  // This would come from your API in a real application
  const stats = [
    {
      title: "إجمالي المكالمات",
      value: "132",
      icon: Phone,
      description: "خلال الشهر الحالي",
      trend: "+8% من الشهر السابق"
    },
    {
      title: "العملاء المهتمين",
      value: "87",
      icon: Users,
      description: "من أصل 132 عميل",
      trend: "66% نسبة الاهتمام"
    },
    {
      title: "متوسط تقييم الخدمة",
      value: "4.6",
      icon: ThumbsUp,
      description: "من أصل 5",
      trend: "+0.3 من الشهر السابق"
    },
    {
      title: "متوسط وقت المكالمة",
      value: "3:24",
      icon: Clock,
      description: "دقيقة:ثانية",
      trend: "-12 ثانية من المتوسط السابق"
    }
  ];
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="overflow-hidden border-ramz-primary/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium rtl">{stat.title}</CardTitle>
            <div className="h-8 w-8 rounded-full bg-ramz-primary/10 p-1.5 text-ramz-primary">
              <stat.icon className="h-full w-full" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold rtl">{stat.value}</div>
            <p className="text-xs text-muted-foreground rtl">{stat.description}</p>
            <p className="mt-1 text-xs text-ramz-primary rtl">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
