
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// In a real application, you would define proper interfaces for your data
interface Call {
  id: string;
  customerName: string;
  phone: string;
  date: string;
  time: string;
  salesRating: number;
  interested: boolean;
  propertyType: string;
}

export function RecentCallsTable() {
  const { toast } = useToast();

  // This would come from your API in a real application
  const recentCalls: Call[] = [
    {
      id: "1",
      customerName: "محمد العتيبي",
      phone: "0555123456",
      date: "2023-04-24",
      time: "10:25 ص",
      salesRating: 5,
      interested: true,
      propertyType: "فيلا"
    },
    {
      id: "2",
      customerName: "سارة الشمري",
      phone: "0555789012",
      date: "2023-04-24",
      time: "11:45 ص",
      salesRating: 4,
      interested: true,
      propertyType: "شقة"
    },
    {
      id: "3",
      customerName: "خالد القحطاني",
      phone: "0555345678",
      date: "2023-04-23",
      time: "09:15 ص",
      salesRating: 3,
      interested: false,
      propertyType: "-"
    },
    {
      id: "4",
      customerName: "نوف الدوسري",
      phone: "0555901234",
      date: "2023-04-23",
      time: "02:30 م",
      salesRating: 5,
      interested: true,
      propertyType: "دوبلكس"
    },
    {
      id: "5",
      customerName: "فيصل المطيري",
      phone: "0555567890",
      date: "2023-04-22",
      time: "04:10 م",
      salesRating: 2,
      interested: false,
      propertyType: "-"
    }
  ];

  const handleCallBack = (phone: string, name: string) => {
    toast({
      title: "جدولة معاودة الاتصال",
      description: `تمت جدولة معاودة الاتصال بالعميل ${name} على الرقم ${phone}`,
    });
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableCaption>آخر المكالمات مع العملاء</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="rtl">العميل</TableHead>
            <TableHead className="rtl">التاريخ والوقت</TableHead>
            <TableHead className="rtl">تقييم الخدمة</TableHead>
            <TableHead className="rtl">الاهتمام</TableHead>
            <TableHead className="rtl">نوع العقار</TableHead>
            <TableHead className="rtl">إجراءات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentCalls.map((call) => (
            <TableRow key={call.id}>
              <TableCell className="font-medium rtl">
                <div>{call.customerName}</div>
                <div className="text-xs text-muted-foreground">{call.phone}</div>
              </TableCell>
              <TableCell className="rtl">
                <div className="text-sm">{new Date(call.date).toLocaleDateString('ar-SA')}</div>
                <div className="text-xs text-muted-foreground">{call.time}</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-end">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-lg ${i < call.salesRating ? 'text-ramz-secondary' : 'text-muted'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-end">
                  <span 
                    className={`px-2 py-1 rounded-full text-xs ${
                      call.interested 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {call.interested ? 'مهتم' : 'غير مهتم'}
                  </span>
                </div>
              </TableCell>
              <TableCell className="rtl">{call.propertyType}</TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full flex items-center gap-1 rtl"
                  onClick={() => handleCallBack(call.phone, call.customerName)}
                >
                  <Phone className="h-3.5 w-3.5 ml-1 rtl:ml-0 rtl:mr-1" />
                  <span>معاودة الاتصال</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
