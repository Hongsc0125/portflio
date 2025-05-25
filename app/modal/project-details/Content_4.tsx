import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const techStacks = [
  { type: 'Frontend', stack: ['React', 'TypeScript', 'Tailwind CSS'], desc: 'SPA, 컴포넌트 기반 UI, 반응형' },
  { type: 'Backend', stack: ['FastAPI', 'Python'], desc: 'REST API, 예약/구글미트/통계 로직' },
  { type: 'DB', stack: ['MongoDB'], desc: 'NoSQL, 유저/예약/패턴 데이터 저장' },
  { type: 'Infra', stack: ['Vercel', 'AWS EC2', 'GitHub Actions'], desc: '프론트/백엔드 배포, CI/CD' },
  { type: 'Etc', stack: ['Google Meet API', 'GitHub'], desc: '외부 API, 버전관리' },
];

const githubUrl = "https://github.com/Harmari/BE";
const deployUrl = "https://harmari-fe.vercel.app";
const blaybusUrl = "https://www.blaybus.com/activities/420/landing";
const galleryImages = [
  "/images/content_4/1.png",
  "/images/content_4/2.png",
  "/images/content_4/3.png"
];

const Project4Content: React.FC = () => {
  // 이미지 확대용 상태
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 이미지 클릭 핸들러
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  // 이미지 오버레이 상태 변경시 전역 플래그 설정 & ESC 키 닫기 기능 추가
  React.useEffect(() => {
    // 이미지 오버레이 열렸을 때 전역 플래그 설정
    if (typeof window !== 'undefined') {
      window.__imageOverlayOpen = selectedImage !== null;
    }

    // ESC 키로 닫기 기능 추가
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      // 이미지 오버레이 닫힘 때 플래그 초기화
      if (typeof window !== 'undefined') {
        window.__imageOverlayOpen = false;
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);
  return (
    <Tabs defaultValue="intro" className="w-full">
      <TabsList className="mb-4 flex gap-2 justify-center bg-transparent border-b border-gray-200 dark:border-gray-800">
        <TabsTrigger value="intro" className="px-5 py-2 text-base font-semibold rounded-t-lg border border-b-0 border-gray-200 dark:border-gray-700 bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white">
          <span className="mr-1">📋</span>소개
        </TabsTrigger>
        <TabsTrigger value="stack" className="px-5 py-2 text-base font-semibold rounded-t-lg border border-b-0 border-gray-200 dark:border-gray-700 bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white">
          <span className="mr-1">🏗️</span>기술스택
        </TabsTrigger>
        <TabsTrigger value="links" className="px-5 py-2 text-base font-semibold rounded-t-lg border border-b-0 border-gray-200 dark:border-gray-700 bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white">
          <span className="mr-1">🔗</span>링크
        </TabsTrigger>
        <TabsTrigger value="gallery" className="px-5 py-2 text-base font-semibold rounded-t-lg border border-b-0 border-gray-200 dark:border-gray-700 bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white">
          <span className="mr-1">🖼️</span>갤러리
        </TabsTrigger>
      </TabsList>

      {/* 소개 */}
      <TabsContent value="intro" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <div className="space-y-6">
          {/* 프로젝트 개요 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-2"><span className="text-blue-500">🌐</span> 프로젝트 개요</h2>
            <p className="text-gray-700 dark:text-gray-200">
              <b>할머리?</b>는 "당신이 할 머리?"라는 의미의 팀 프로젝트로, <b>블레이버스 2025 MVP 해커톤</b>에서 3위를 수상한 작품입니다.<br/>
              실제 예비창업자의 아이디어를 바탕으로, 클라이언트와 직접 소통하며 2주간 MVP를 개발했습니다.<br/>
              <b>로그인 → 헤어디자이너 리스트 → 예약 → 구글미트 이벤트 생성 → 결제</b>까지의 실 서비스 로직을 구현하였고, <b>유저 패턴 데이터 수집 및 대시보드</b>도 제공하는 등 실제 창업 환경에 가까운 경험을 했습니다.
            </p>
          </section>
          {/* 주요 특징 및 본인 역할 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-green-500">✨</span> 주요 특징 및 담당 파트</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-200">
              <li>- <b>실제 클라이언트(예비창업자)</b>와 협업, 요구사항 분석 및 MVP 설계</li>
              <li>- <b>전 과정 실서비스 플로우</b>: 회원가입/로그인, 디자이너 리스트, 예약, 구글미트 자동 생성, 결제, 예약내역/통계 대시보드</li>
              <li>- <b>담당 기능</b>: <span className="text-blue-500">구글미트 자동 생성</span>, <span className="text-blue-500">예약 로직 및 예외처리</span> (중복/동시성),  
                <br/> <span className="text-blue-500">유저 패턴 데이터 수집</span> 및 자체 통계 대시보드 구현</li>
              <li>- <b>실제 배포/운영 환경</b>에서 테스트 및 피드백 반복</li>
              <li>- <b>2주 개발</b>, 팀원 4명</li>
            </ul>
          </section>
          {/* 개발 이슈 및 경험 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-yellow-500">⚙️</span> 개발 이슈 및 경험</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-200">
              <li>- <b>Google Meet API</b> 권한 이슈로 여러 시행착오를 겪으며, 실제 서비스 연동 경험</li>
              <li>- <b>예약 로직</b>에서 동시성/중복 방지 등 실무 수준의 예외처리 고민</li>
              <li>- <b>프론트-백엔드 연동</b>과 실시간 피드백, 실제 유저 데이터 기반 통계 구현</li>
              <li>- <b>팀 협업</b> 및 Git, GitHub 기반의 버전 관리/CI</li>
            </ul>
          </section>
        </div>
      </TabsContent>

      {/* 기술스택 */}
      <TabsContent value="stack" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><span className="text-purple-500">🛠️</span> 기술 스택</h2>
          <div className="overflow-x-auto">
            <table className="min-w-[400px] border text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border px-2 py-1">구분</th>
                  <th className="border px-2 py-1">주요 기술</th>
                  <th className="border px-2 py-1">특징/역할</th>
                </tr>
              </thead>
              <tbody>
                {techStacks.map((row) => (
                  <tr key={row.type}>
                    <td className="border px-2 py-1 font-bold">{row.type}</td>
                    <td className="border px-2 py-1">{row.stack.join(', ')}</td>
                    <td className="border px-2 py-1">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </TabsContent>

      {/* 링크 */}
      <TabsContent value="links" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-6 h-full">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><span className="text-sky-500">🔗</span> 관련 링크</h3>
          <div className="flex flex-row gap-4 w-full justify-center">
            <Button asChild variant="outline" className="flex-1 flex items-center justify-center gap-2 max-w-xs">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.563 9.563 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.752 0 .268.18.579.688.48C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
                GitHub 저장소
              </a>
            </Button>
            <Button asChild variant="default" className="flex-1 flex items-center justify-center gap-2 max-w-xs">
              <a href={deployUrl} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1"><path d="M12.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L16 7.414V15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7.414l-.293.293A1 1 0 0 1 2.293 6.293l4-4a1 1 0 0 1 1.414 0zM6 7v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7H6z" /></svg>
                배포 페이지
              </a>
            </Button>
            <Button asChild variant="default" className="flex-1 flex items-center justify-center gap-2 max-w-xs">
              <a href={blaybusUrl} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1"><path d="M12.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L16 7.414V15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7.414l-.293.293A1 1 0 0 1 2.293 6.293l4-4a1 1 0 0 1 1.414 0zM6 7v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7H6z" /></svg>
                해커톤 행사 안내 페이지
              </a>
            </Button>
          </div>
        </section>
      </TabsContent>

      {/* 이미지 갤러리 */}
      <TabsContent value="gallery" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800 flex flex-col items-center gap-6 h-full">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><span className="text-pink-500">🖼️</span> 참여 사진/갤러리</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {galleryImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`gallery-${idx}`}
                className="w-72 h-48 object-cover rounded-lg shadow border cursor-pointer"
                loading="lazy"
                onClick={() => handleImageClick(src)}
              />
            ))}
          </div>
        </section>
      </TabsContent>

      {/* 이미지 확대 오버레이 - 완전히 독립적으로 작동하도록 변경 */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative max-w-3xl w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="닫기"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage ?? ''}
              alt="gallery-large"
              className="rounded-lg shadow-lg max-h-[80vh] object-contain border bg-white"
            />
          </div>
        </div>
      )}
    </Tabs>
  );
};

export default Project4Content;