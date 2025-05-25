"use client";

import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const ContactSection: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'hsc890125@gmail.com';
    
    // 클라이언트 사이드에서만 실행되도록 확인
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        toast.success('이메일이 복사되었습니다!');
      }).catch(err => {
        console.error('이메일 복사 실패:', err);
        toast.error('이메일 복사에 실패했습니다.');
      });
    } else {
      // 클립보드 API를 사용할 수 없는 경우 대체 방법
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        toast.success('이메일이 복사되었습니다!');
      } catch (err) {
        console.error('이메일 복사 실패:', err);
        toast.error('이메일 복사에 실패했습니다.');
      }
      document.body.removeChild(textarea);
    }
  };
  return (
  <div>
    <h2 className="text-2xl font-bold">연락처</h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-background text-foreground">
        <CardContent className="pt-6 bg-background text-foreground">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">이메일</p>
                <button 
                  onClick={handleEmailClick}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  hsc890125@gmail.com
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">위치</p>
                <p className="text-muted-foreground">서울특별시</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-background text-foreground">
        <CardContent className="pt-6 bg-background text-foreground">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <a href="https://github.com/Hongsc0125" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  https://github.com/Hongsc0125
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
  );
};

export default ContactSection;
