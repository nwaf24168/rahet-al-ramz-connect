
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      <div className="w-8 h-8 bg-ramz-secondary rounded-md flex items-center justify-center">
        <span className="text-ramz-primary text-lg font-bold">ر</span>
      </div>
      <div className="flex flex-col rtl">
        <span className="font-bold text-lg leading-tight">راحة الرمز</span>
        <span className="text-xs text-muted-foreground leading-tight">للتواصل الذكي</span>
      </div>
    </div>
  );
};

export default Logo;
