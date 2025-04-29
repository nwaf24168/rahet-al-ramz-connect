
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { StatsCards } from "@/components/Dashboard/StatsCards";
import { CustomerInterestsChart } from "@/components/Dashboard/CustomerInterestsChart";
import { SalesPerformance } from "@/components/Dashboard/SalesPerformance";
import { RecentCallsTable } from "@/components/Dashboard/RecentCallsTable";
import { CallSimulator } from "@/components/Dashboard/CallSimulator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Dashboard() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const arabicDate = currentDate.toLocaleDateString('ar-SA', options);
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold rtl">لوحة التحكم</h1>
              <p className="text-muted-foreground rtl">{arabicDate}</p>
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
          
          <div className="space-y-8">
            <StatsCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <CustomerInterestsChart />
              <SalesPerformance />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="col-span-1 lg:col-span-3">
                <h2 className="text-xl font-semibold mb-4 rtl">آخر المكالمات</h2>
                <RecentCallsTable />
              </div>
              <div className="col-span-1">
                <CallSimulator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
