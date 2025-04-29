
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Phone, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Calls() {
  // This would come from your API in a real application
  const callsData = [
    {
      id: "1",
      customerName: "محمد العتيبي",
      phone: "0555123456",
      date: "2023-04-24",
      time: "10:25 ص",
      duration: "3:42",
      salesRating: 5,
      status: "completed",
      interested: true,
      propertyType: "فيلا",
      budget: "2,500,000 ريال"
    },
    {
      id: "2",
      customerName: "سارة الشمري",
      phone: "0555789012",
      date: "2023-04-24",
      time: "11:45 ص",
      duration: "2:58",
      salesRating: 4,
      status: "completed",
      interested: true,
      propertyType: "شقة",
      budget: "800,000 ريال"
    },
    {
      id: "3",
      customerName: "خالد القحطاني",
      phone: "0555345678",
      date: "2023-04-23",
      time: "09:15 ص",
      duration: "1:25",
      salesRating: 3,
      status: "completed",
      interested: false,
      propertyType: "-",
      budget: "-"
    },
    {
      id: "4",
      customerName: "نوف الدوسري",
      phone: "0555901234",
      date: "2023-04-23",
      time: "02:30 م",
      duration: "4:12",
      salesRating: 5,
      status: "completed",
      interested: true,
      propertyType: "دوبلكس",
      budget: "1,800,000 ريال"
    },
    {
      id: "5",
      customerName: "فيصل المطيري",
      phone: "0555567890",
      date: "2023-04-22",
      time: "04:10 م",
      duration: "2:05",
      salesRating: 2,
      status: "completed",
      interested: false,
      propertyType: "-",
      budget: "-"
    },
    {
      id: "6",
      customerName: "منى الزهراني",
      phone: "0555234567",
      date: "2023-04-29",
      time: "11:00 ص",
      duration: "-",
      salesRating: 0,
      status: "scheduled",
      interested: false,
      propertyType: "-",
      budget: "-"
    },
    {
      id: "7",
      customerName: "عبدالله الغامدي",
      phone: "0555876543",
      date: "2023-04-28",
      time: "03:15 م",
      duration: "-",
      salesRating: 0,
      status: "scheduled",
      interested: false,
      propertyType: "-",
      budget: "-"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold rtl">إدارة المكالمات</h1>
              <p className="text-muted-foreground rtl">عرض وتنظيم وجدولة المكالمات مع العملاء</p>
            </div>
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-ramz-primary text-white">AR</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rtl">
                  <DropdownMenuLabel>محمد العبدالله</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>الإعدادات</DropdownMenuItem>
                  <DropdownMenuItem>المساعدة</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    localStorage.removeItem('user');
                    window.location.href = '/';
                  }}>
                    تسجيل خروج
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="بحث..." className="pl-8 rtl" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="w-full sm:w-40">
                <Select>
                  <SelectTrigger className="rtl">
                    <SelectValue placeholder="الحالة" />
                  </SelectTrigger>
                  <SelectContent className="rtl">
                    <SelectItem value="all">الكل</SelectItem>
                    <SelectItem value="completed">مكتملة</SelectItem>
                    <SelectItem value="scheduled">مجدولة</SelectItem>
                    <SelectItem value="failed">فشلت</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full sm:w-40">
                <Input type="date" className="rtl" />
              </div>
              
              <Button className="bg-ramz-primary hover:bg-ramz-primary/90 rtl">
                <Calendar className="mr-2 h-4 w-4 rtl:mr-0 rtl:ml-2" />
                جدولة مكالمة
              </Button>
            </div>
          </div>
          
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="rtl">العميل</TableHead>
                  <TableHead className="rtl">التاريخ والوقت</TableHead>
                  <TableHead className="rtl">المدة</TableHead>
                  <TableHead className="rtl">الحالة</TableHead>
                  <TableHead className="rtl">التقييم</TableHead>
                  <TableHead className="rtl">الاهتمام</TableHead>
                  <TableHead className="rtl">نوع العقار</TableHead>
                  <TableHead className="rtl">الميزانية</TableHead>
                  <TableHead className="rtl">إجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {callsData.map((call) => (
                  <TableRow key={call.id}>
                    <TableCell className="font-medium rtl">
                      <div>{call.customerName}</div>
                      <div className="text-xs text-muted-foreground">{call.phone}</div>
                    </TableCell>
                    <TableCell className="rtl">
                      <div className="text-sm">{new Date(call.date).toLocaleDateString('ar-SA')}</div>
                      <div className="text-xs text-muted-foreground">{call.time}</div>
                    </TableCell>
                    <TableCell className="rtl">{call.duration}</TableCell>
                    <TableCell>
                      <Badge variant={
                        call.status === 'completed' ? 'default' :
                        call.status === 'scheduled' ? 'outline' :
                        'destructive'
                      } className="rtl">
                        {call.status === 'completed' ? 'مكتملة' :
                         call.status === 'scheduled' ? 'مجدولة' : 'فشلت'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end">
                        {call.salesRating === 0 ? (
                          <span className="text-xs text-muted-foreground">-</span>
                        ) : (
                          Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${i < call.salesRating ? 'text-ramz-secondary' : 'text-muted'}`}
                            >
                              ★
                            </span>
                          ))
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {call.status === 'scheduled' ? (
                        <span className="text-xs text-muted-foreground text-center block">-</span>
                      ) : (
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
                      )}
                    </TableCell>
                    <TableCell className="rtl">{call.propertyType}</TableCell>
                    <TableCell className="rtl">{call.budget}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full flex items-center gap-1 rtl"
                      >
                        <Phone className="h-3.5 w-3.5 ml-1 rtl:ml-0 rtl:mr-1" />
                        <span>{call.status === 'scheduled' ? 'إلغاء' : 'معاودة'}</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
