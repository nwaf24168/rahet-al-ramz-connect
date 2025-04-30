
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Logo from './Logo';
import { supabase } from "@/integrations/supabase/client";

type AuthFormProps = {
  onSuccess: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // التحقق من اسم المستخدم وكلمة المرور
      if (username === 'nawaf' && password === 'Alramz2025') {
        // Use the signIn method with admin credentials
        // First check if user exists in supabase
        const { data: existingUsers, error: checkError } = await supabase
          .from('profiles')
          .select('*')
          .eq('full_name', 'nawaf')
          .limit(1);
          
        if (checkError) {
          console.error("Error checking user:", checkError);
          throw checkError;
        }

        // Sign in directly with credentials using the correct method name
        const { data, error } = await supabase.auth.signInWithPassword({
          email: 'nn121240@gmail.com',
          password: 'Alramz2025',
        });

        if (error) {
          console.error("Login error:", error);
          throw error;
        }

        toast({
          title: "تم تسجيل الدخول بنجاح",
          description: "مرحباً بك في منصة راحة الرمز للتواصل",
        });
        
        onSuccess();
      } else {
        // إذا كانت معلومات تسجيل الدخول غير صحيحة
        throw new Error("اسم المستخدم أو كلمة المرور غير صحيحة");
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      toast({
        variant: "destructive",
        title: "فشل تسجيل الدخول",
        description: error.message || "اسم المستخدم أو كلمة المرور غير صحيحة",
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
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2 rtl">
            <label htmlFor="login-username" className="text-sm font-medium">
              اسم المستخدم
            </label>
            <Input
              id="login-username"
              type="text"
              placeholder="اسم المستخدم"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="rtl"
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
      </CardContent>
      <CardFooter className="flex justify-center text-xs text-muted-foreground rtl">
        © {new Date().getFullYear()} شركة الرمز العقارية | جميع الحقوق محفوظة
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
