
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function AIVoiceSetup() {
  const [elevenlabsKey, setElevenlabsKey] = useState("");
  const [openaiKey, setOpenaiKey] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("Sarah");
  const [voicePreviewUrl, setVoicePreviewUrl] = useState("");
  const { toast } = useToast();
  
  // This would be populated from the ElevenLabs API in a real application
  const availableVoices = [
    { id: "SAz9YHcvj6GT2YYXdXww", name: "Sarah", locale: "ar-SA" },
    { id: "CwhRBWXzGAHq8TQ4Fs17", name: "Roger", locale: "ar-SA" },
    { id: "XB0fDUnXU5powFXDhCwa", name: "Charlotte", locale: "en-US" },
  ];

  const handleSaveKeys = () => {
    toast({
      title: "تم حفظ المفاتيح",
      description: "تم حفظ مفاتيح API بنجاح",
    });
  };

  const handleVoicePreview = () => {
    if (!elevenlabsKey) {
      toast({
        variant: "destructive",
        title: "غير قادر على تشغيل النموذج الصوتي",
        description: "الرجاء إدخال مفتاح ElevenLabs API أولاً",
      });
      return;
    }
    
    // In a real application, you would call the ElevenLabs API to generate a preview
    setVoicePreviewUrl("https://example.com/voice-preview.mp3");
    toast({
      title: "تم إنشاء النموذج الصوتي",
      description: "انقر على زر التشغيل للاستماع إلى النموذج",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="rtl">إعدادات الصوت الذكي</CardTitle>
        <CardDescription className="rtl">
          إعداد خدمات الذكاء الاصطناعي للمكالمات الصوتية
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 rtl">
          <label htmlFor="openai-key" className="text-sm font-medium">
            مفتاح OpenAI API
          </label>
          <Input
            id="openai-key"
            value={openaiKey}
            onChange={(e) => setOpenaiKey(e.target.value)}
            className="rtl"
            type="password"
            placeholder="sk-..."
          />
          <p className="text-xs text-muted-foreground">
            مطلوب لخدمات GPT-4 و Whisper للمحادثة وتحويل الصوت إلى نص
          </p>
        </div>
        
        <div className="space-y-2 rtl">
          <label htmlFor="elevenlabs-key" className="text-sm font-medium">
            مفتاح ElevenLabs API
          </label>
          <Input
            id="elevenlabs-key"
            value={elevenlabsKey}
            onChange={(e) => setElevenlabsKey(e.target.value)}
            className="rtl"
            type="password"
            placeholder="..."
          />
          <p className="text-xs text-muted-foreground">
            مطلوب لتحويل النص إلى صوت طبيعي باللهجة السعودية
          </p>
        </div>
        
        <div className="space-y-2 rtl">
          <label htmlFor="voice-selection" className="text-sm font-medium">
            اختيار الصوت
          </label>
          <Select value={selectedVoice} onValueChange={setSelectedVoice}>
            <SelectTrigger id="voice-selection" className="rtl">
              <SelectValue placeholder="اختر صوتًا" />
            </SelectTrigger>
            <SelectContent>
              {availableVoices.map((voice) => (
                <SelectItem key={voice.id} value={voice.name}>
                  {voice.name} ({voice.locale})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center justify-between mt-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleVoicePreview}
              className="rtl"
            >
              إنشاء نموذج صوتي
            </Button>
            
            {voicePreviewUrl && (
              <audio controls className="h-8">
                <source src={voicePreviewUrl} type="audio/mpeg" />
                متصفحك لا يدعم عنصر الصوت
              </audio>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleSaveKeys} 
          className="w-full bg-ramz-primary hover:bg-ramz-primary/90 rtl"
        >
          حفظ الإعدادات
        </Button>
      </CardFooter>
    </Card>
  );
}
