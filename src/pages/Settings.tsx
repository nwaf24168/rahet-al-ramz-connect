
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CallFlowSetup } from "@/components/Setup/CallFlowSetup";
import { AIVoiceSetup } from "@/components/Setup/AIVoiceSetup";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Settings() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold rtl">الإعدادات</h1>
              <p className="text-muted-foreground rtl">إدارة إعدادات النظام والمكالمات</p>
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
          
          <Tabs defaultValue="call-flow" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md mb-8 rtl">
              <TabsTrigger value="call-flow">سير المكالمة</TabsTrigger>
              <TabsTrigger value="ai-voice">الصوت الذكي</TabsTrigger>
              <TabsTrigger value="twilio">إعدادات الاتصال</TabsTrigger>
            </TabsList>
            <TabsContent value="call-flow" className="mt-0">
              <CallFlowSetup />
            </TabsContent>
            <TabsContent value="ai-voice" className="mt-0">
              <AIVoiceSetup />
            </TabsContent>
            <TabsContent value="twilio" className="mt-0">
              <div className="flex items-center justify-center h-64 bg-muted rounded-lg">
                <p className="text-muted-foreground rtl">إعدادات الاتصال قيد التطوير</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SidebarProvider>
  );
}
