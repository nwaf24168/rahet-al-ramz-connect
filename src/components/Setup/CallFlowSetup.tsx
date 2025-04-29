
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function CallFlowSetup() {
  const [greetingText, setGreetingText] = useState(
    "هلا وغلا، معك خدمة راحة العملاء من شركة الرمز العقارية."
  );
  
  const [introText, setIntroText] = useState(
    "حبيت أتابع معاك اليوم لتقييم تجربتك مع فريق المبيعات وللاستفسار عن رغبتك في تملك عقار."
  );
  
  const [thankYouText, setThankYouText] = useState(
    "مشكور/ـة على وقتك، بنكون على تواصل معك قريباً. يومك سعيد!"
  );

  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "تم حفظ الإعدادات",
      description: "تم تحديث نصوص المكالمات بنجاح",
    });
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="rtl">إعدادات سير المكالمة</CardTitle>
        <CardDescription className="rtl">
          تخصيص النصوص المستخدمة في المكالمات الآلية
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 rtl">
          <label htmlFor="greeting" className="text-sm font-medium">
            نص الترحيب
          </label>
          <Textarea
            id="greeting"
            value={greetingText}
            onChange={(e) => setGreetingText(e.target.value)}
            className="rtl min-h-[80px]"
            placeholder="أدخل نص الترحيب..."
          />
        </div>
        
        <div className="space-y-2 rtl">
          <label htmlFor="intro" className="text-sm font-medium">
            مقدمة الهدف من المكالمة
          </label>
          <Textarea
            id="intro"
            value={introText}
            onChange={(e) => setIntroText(e.target.value)}
            className="rtl min-h-[100px]"
            placeholder="أدخل مقدمة هدف المكالمة..."
          />
        </div>
        
        <div className="space-y-2 rtl">
          <label htmlFor="thankYou" className="text-sm font-medium">
            نص الشكر وإنهاء المكالمة
          </label>
          <Textarea
            id="thankYou"
            value={thankYouText}
            onChange={(e) => setThankYouText(e.target.value)}
            className="rtl min-h-[80px]"
            placeholder="أدخل نص الشكر..."
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} className="w-full bg-ramz-primary hover:bg-ramz-primary/90 rtl">
          حفظ الإعدادات
        </Button>
      </CardFooter>
    </Card>
  );
}
