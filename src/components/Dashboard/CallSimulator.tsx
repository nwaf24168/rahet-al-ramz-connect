
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function CallSimulator() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCallInitiation = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        variant: "destructive",
        title: "رقم غير صحيح",
        description: "الرجاء إدخال رقم هاتف صحيح",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "تم جدولة المكالمة",
        description: `ستتم مكالمة الرقم ${phoneNumber} خلال دقائق`,
      });
      setIsLoading(false);
      setPhoneNumber("");
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="rtl">مكالمة جديدة</CardTitle>
        <CardDescription className="rtl">
          إجراء مكالمة ذكية جديدة مع عميل
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="space-y-2 rtl">
            <label htmlFor="phoneNumber" className="text-sm font-medium">
              رقم الهاتف
            </label>
            <Input
              id="phoneNumber"
              placeholder="05xxxxxxxx"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="rtl text-right"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleCallInitiation}
          className="w-full bg-ramz-primary hover:bg-ramz-primary/90 rtl"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin rtl:mr-0 rtl:ml-2" />
              <span>جاري جدولة المكالمة...</span>
            </>
          ) : (
            <>
              <Phone className="mr-2 h-4 w-4 rtl:mr-0 rtl:ml-2" />
              <span>إجراء مكالمة</span>
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
