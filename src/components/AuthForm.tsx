
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Logo from './Logo';
import { supabase } from "@/integrations/supabase/client";

type AuthFormProps = {
  onSuccess: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "مرحباً بك في منصة راحة الرمز للتواصل",
      });
      
      onSuccess();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "فشل تسجيل الدخول",
        description: error.message || "البريد الإلكتروني أو كلمة المرور غير صحيحة",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || fullName.trim() === '') {
      toast({
        variant: "destructive",
        title: "خطأ في التسجيل",
        description: "يرجى إدخال الاسم الكامل",
      });
      return;
    }
    
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          }
        }
      });

      if (error) throw error;

      toast({
        title: "تم التسجيل بنجاح",
        description: "يرجى تأكيد بريدك الإلكتروني للاستمرار",
      });
      
      // Switch to login tab after successful registration
      setAuthMode('login');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "فشل التسجيل",
        description: error.message || "حدث خطأ أثناء التسجيل",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[350px] shadow-lg">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-4">
          <Logo />
        </div>
        <CardTitle className="text-2xl font-tajawal">تسجيل الدخول</CardTitle>
        <CardDescription className="rtl">
          الرجاء إدخال بيانات الدخول للوصول إلى لوحة التحكم
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={authMode} onValueChange={(value) => setAuthMode(value as 'login' | 'register')} className="w-full">
          <TabsList className="grid grid-cols-2 w-full mb-4 rtl">
            <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
            <TabsTrigger value="register">حساب جديد</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2 rtl">
                <label htmlFor="login-email" className="text-sm font-medium">
                  البريد الإلكتروني
                </label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rtl text-left"
                />
              </div>
              <div className="space-y-2 rtl">
                <div className="flex items-center justify-between">
                  <label htmlFor="login-password" className="text-sm font-medium">
                    كلمة المرور
                  </label>
                  <button type="button" className="text-xs text-ramz-primary hover:underline">
                    نسيت كلمة المرور؟
                  </button>
                </div>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-ramz-primary hover:bg-ramz-primary/90" 
                disabled={isLoading}
              >
                {isLoading ? 'جاري التحقق...' : 'دخول'}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2 rtl">
                <label htmlFor="register-name" className="text-sm font-medium">
                  الاسم الكامل
                </label>
                <Input
                  id="register-name"
                  type="text"
                  placeholder="محمد العبدالله"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="rtl"
                />
              </div>
              <div className="space-y-2 rtl">
                <label htmlFor="register-email" className="text-sm font-medium">
                  البريد الإلكتروني
                </label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rtl text-left"
                />
              </div>
              <div className="space-y-2 rtl">
                <label htmlFor="register-password" className="text-sm font-medium">
                  كلمة المرور
                </label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-ramz-primary hover:bg-ramz-primary/90" 
                disabled={isLoading}
              >
                {isLoading ? 'جاري التسجيل...' : 'تسجيل حساب جديد'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center text-xs text-muted-foreground rtl">
        © {new Date().getFullYear()} شركة الرمز العقارية | جميع الحقوق محفوظة
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
