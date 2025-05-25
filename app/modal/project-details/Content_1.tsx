import React from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const techStacks = [
  { type: 'Frontend', stack: ['React', 'TypeScript', 'Tailwind CSS'], desc: '반응형 웹, 모바일 퍼스트 디자인' },
  { type: 'Backend', stack: ['Python', 'FastAPI'], desc: 'REST API, AI 모델 연동' },
  { type: 'AI', stack: ['OpenAI API', 'Fine-tuning'], desc: '대화 시뮬레이션, 평가 시스템' },
  { type: 'DB', stack: ['MongoDB'], desc: '사용자 데이터, 대화 이력 저장' },
  { type: 'Infra', stack: ['Vercel', 'AWS EC2', 'GitHub Actions'], desc: '프론트/백엔드 배포, CI/CD' },
];

const githubUrl = "https://github.com/AI-hellothon-2024/AI-hellothon-2024";
const demoVideoUrl = "/images/content_1/aimigo_simul.mp4";

const Project5Content: React.FC = () => {
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
        <TabsTrigger value="demo" className="px-5 py-2 text-base font-semibold rounded-t-lg border border-b-0 border-gray-200 dark:border-gray-700 bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white">
          <span className="mr-1">🎥</span>시연 영상
        </TabsTrigger>
      </TabsList>

      {/* 소개 */}
      <TabsContent value="intro" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <div className="space-y-6">
          {/* 프로젝트 개요 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-2"><span className="text-blue-500">🌐</span> 프로젝트 개요</h2>
            <p className="text-gray-700 dark:text-gray-200">
              <b>AImigo</b>는 엘리스그룹에서 주최한 <b>AI hellothon 2024</b>에서 <b>TOP5</b>까지 오른 작품입니다.<br/>
              신입사원의 빠른 온보딩과 대화 스킬 학습을 위한 AI 파트너로, 다양한 직군별 상황에서의 대화를 시뮬레이션할 수 있는 서비스입니다.<br/>
              AI가 제시하는 다양한 업무 시나리오에 대해 대화를 진행하고, AI가 피드백을 제공하여 업무 역량을 향상시킬 수 있습니다.
            </p>
          </section>
          
          {/* 주요 특징 및 본인 역할 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-green-500">✨</span> 주요 특징</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-200">
              <li>- <b>직무별 맞춤 시나리오</b>: 다양한 직군(영업, 개발, 디자인 등)에 특화된 대화 시나리오 제공</li>
              <li>- <b>AI 피드백 시스템</b>: 대화 내용을 분석하여 전문성, 태도, 문제 해결 능력 등에 대한 상세한 피드백 제공</li>
              <li>- <b>성과 기반 보상 시스템</b>: 우수한 성과를 거둔 사용자에게 디지털 배지 및 수료증 발급</li>
              <li>- <b>맞춤형 학습 경로</b>: 사용자의 약점을 분석하여 개인화된 학습 경로 제안</li>
            </ul>
          </section>

          {/* 개발 이슈 및 경험 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-yellow-500">⚙️</span> 개발 이슈 및 경험</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-200">
              <li>- <b>저는 Backend 전체와 AI관련 로직을 전담으로 맡아서 진행하였습니다.</b></li>
              <li>- <b>정교한 프롬프트 엔지니어링</b>: AI의 응답 품질을 높이기 위한 체계적인 프롬프트 설계</li>
              <li>- <b>대화 컨텍스트 유지</b>: 긴 대화 흐름에서도 맥락을 유지하는 기술 구현</li>
              <li>- <b>실시간 피드백 시스템</b>: 사용자 응답에 대한 즉각적이고 의미 있는 피드백 제공</li>
              <li>- <b>다양한 평가 지표 개발</b>: 전문성, 커뮤니케이션 스킬, 문제 해결 능력 등 다각적인 평가 시스템 구축</li>
              <li>- <b>하이브리드 앱 개발</b>: 웹뷰를 활용한 모바일 앱 경험 제공</li>
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
          </div>
        </section>
      </TabsContent>

      {/* 시연 영상 */}
      <TabsContent value="demo" className="min-h-[600px] max-h-[600px] overflow-y-auto flex items-center justify-center" style={{ scrollbarGutter: 'stable' }}>
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800 w-full max-w-md">
          <h3 className="text-lg font-semibold flex items-center justify-center gap-2 mb-6">
            <span className="text-pink-500">🎥</span> AImigo 시연 영상
          </h3>
          <div className="aspect-[9/16] w-full bg-black rounded-lg overflow-hidden">
            <video 
              src={demoVideoUrl} 
              controls 
              controlsList="nodownload"
              className="w-full h-full object-cover"
              disablePictureInPicture
              playsInline
            >
              죄송합니다. 브라우저가 비디오를 지원하지 않습니다.
            </video>
          </div>
          <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            모바일 환경에 최적화된 세로 화면 영상입니다.
          </div>
        </section>
      </TabsContent>
    </Tabs>
  );
};

export default Project5Content;
