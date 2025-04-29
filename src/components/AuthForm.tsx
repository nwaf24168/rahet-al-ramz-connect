
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Logo from './Logo';

type AuthFormProps = {
  onSuccess: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // This is a mock login. In a real application, you would connect to your authentication service.
    setTimeout(() => {
      // Mock successful login for demo purposes
      if (email === 'admin@alramz.com' && password === 'password123') {
        toast({
          title: "تم تسجيل الدخول بنجاح",
          description: "مرحباً بك في منصة راحة الرمز للتواصل",
        });
        localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
        onSuccess();
      } else {
        toast({
          variant: "destructive",
          title: "فشل تسجيل الدخول",
          description: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
        });
      }
      setIsLoading(false);
    }, 1500);
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 rtl">
            <label htmlFor="email" className="text-sm font-medium">
              البريد الإلكتروني
            </label>
            <Input
              id="email"
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
              <label htmlFor="password" className="text-sm font-medium">
                كلمة المرور
              </label>
              <button type="button" className="text-xs text-ramz-primary hover:underline">
                نسيت كلمة المرور؟
              </button>
            </div>
            <Input
              id="password"
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
