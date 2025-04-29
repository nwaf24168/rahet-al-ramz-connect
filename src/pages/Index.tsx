
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "@/components/AuthForm";
import { motion } from "framer-motion";

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
      navigate("/dashboard");
    }
  }, [navigate]);
  
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center pattern-bg">
      <div className="w-full max-w-5xl px-4 py-12 flex flex-col lg:flex-row items-center">
        <motion.div 
          className="w-full lg:w-2/3 mb-12 lg:mb-0 lg:mr-8 text-right rtl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-ramz-primary mb-4">راحة الرمز</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">منصة التواصل الذكي للعملاء</h2>
          <p className="text-lg mb-6 text-gray-600 max-w-lg">
            منصة متكاملة لإدارة اتصالات العملاء باستخدام الذكاء الاصطناعي، تمكن شركة الرمز العقارية من التواصل الفعال مع عملائها.
          </p>
          <div className="flex flex-wrap gap-4 justify-end">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-ramz-primary/10 p-2 text-ramz-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <span className="mr-2 font-medium">تقييم تجربة العملاء</span>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-ramz-primary/10 p-2 text-ramz-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <span className="mr-2 font-medium">إدارة اهتمامات العملاء</span>
            </div>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-ramz-primary/10 p-2 text-ramz-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <span className="mr-2 font-medium">تحليلات متقدمة للمبيعات</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AuthForm onSuccess={handleLoginSuccess} />
        </motion.div>
      </div>
    </div>
  );
}
