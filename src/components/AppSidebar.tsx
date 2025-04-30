
import { Home, Phone, BarChart3, Settings, Users, LogOut } from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader,
  SidebarGroup, 
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton 
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Logo from "./Logo";

export function AppSidebar() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Menu items
  const mainMenuItems = [
    {
      title: "الرئيسية",
      icon: Home,
      url: "/dashboard",
      active: window.location.pathname === "/dashboard"
    },
    {
      title: "المكالمات",
      icon: Phone,
      url: "/calls",
      active: window.location.pathname === "/calls"
    },
    {
      title: "التقارير",
      icon: BarChart3,
      url: "/reports",
      active: window.location.pathname === "/reports"
    },
    {
      title: "العملاء",
      icon: Users,
      url: "/customers",
      active: window.location.pathname === "/customers"
    },
    {
      title: "الإعدادات",
      icon: Settings,
      url: "/settings",
      active: window.location.pathname === "/settings"
    },
  ];

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "تم تسجيل الخروج بنجاح",
      });
      
      navigate('/');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: error.message || "فشل تسجيل الخروج"
      });
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="flex justify-center py-6">
        <Logo className="text-sidebar-foreground" />
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="rtl">القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={item.active ? "bg-sidebar-accent text-sidebar-accent-foreground" : ""}>
                    <a href={item.url} className="rtl flex flex-row-reverse items-center">
                      <item.icon className="ml-2 rtl:ml-0 rtl:mr-2" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout} className="rtl flex flex-row-reverse items-center">
              <LogOut className="ml-2 rtl:ml-0 rtl:mr-2" />
              <span>تسجيل خروج</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
