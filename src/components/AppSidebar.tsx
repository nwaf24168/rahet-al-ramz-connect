
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
import Logo from "./Logo";

export function AppSidebar() {
  // Menu items
  const mainMenuItems = [
    {
      title: "الرئيسية",
      icon: Home,
      url: "/dashboard",
      active: true
    },
    {
      title: "المكالمات",
      icon: Phone,
      url: "/calls",
    },
    {
      title: "التقارير",
      icon: BarChart3,
      url: "/reports",
    },
    {
      title: "العملاء",
      icon: Users,
      url: "/customers",
    },
    {
      title: "الإعدادات",
      icon: Settings,
      url: "/settings",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
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
