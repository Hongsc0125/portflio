import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const techStacks: string[] = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "shadcn/ui",
  "Vercel",
  "GitHub Actions",
];

const githubUrl = "https://github.com/Hongsc0125/portflio";
const deployUrl = "https://portflio-mauve-five.vercel.app";

const Project3Content: React.FC = () => {
  return (
    <Tabs defaultValue="intro" className="w-full">
      <TabsList className="mb-4 flex gap-2 justify-center bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <TabsTrigger value="intro" className="px-5 py-2 text-base font-semibold rounded-t-lg border border-b-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white">
          <span className="mr-1">📋</span>소개
        </TabsTrigger>
        <TabsTrigger value="stack" className="px-5 py-2 text-base font-semibold rounded-t-lg border border-b-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white">
          <span className="mr-1">🏗️</span>기술스택
        </TabsTrigger>
        <TabsTrigger value="links" className="px-5 py-2 text-base font-semibold rounded-t-lg border border-b-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white">
          <span className="mr-1">🔗</span>링크
        </TabsTrigger>
      </TabsList>

      {/* 소개 */}
      <TabsContent value="intro" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <div className="space-y-6">
          {/* 프로젝트 개요 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-2"><span className="text-blue-500">🌐</span> 프로젝트 개요</h2>
            <p className="text-gray-700 dark:text-gray-200">
              본 포트폴리오 웹사이트는 <b>Next.js</b>와 <b>shadcn/ui</b>, <b>Tailwind CSS</b> 기반으로 개발된 <b>반응형 SPA</b>입니다.<br/>
              최신 UI/UX 트렌드와 컴포넌트 기반 설계, 자동 배포 파이프라인, 코드 가독성과 유지보수성을 모두 고려하여 직접 설계 및 구현하였습니다.
            </p>
          </section>
          {/* 주요 특징 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-green-500">✨</span> 주요 특징</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-200">
              <li>- <b>Next.js App Router</b> 기반의 최신 구조, 페이지/섹션 분리</li>
              <li>- <b>shadcn/ui</b> 활용한 일관된 UI/UX 및 커스텀 컴포넌트</li>
              <li>- <b>Tailwind CSS</b> 기반의 빠른 스타일링과 반응형 지원</li>
              <li>- <b>Vercel</b>를 통한 자동 배포 및 CI/CD</li>
              <li>- <b>TypeScript</b>로 타입 안정성 및 코드 품질 확보</li>
              <li>- <b>모바일/PC 모두 최적화</b>된 레이아웃</li>
              <li>- <b>실제 프로젝트/경력/스킬/연락처</b> 등 다양한 섹션별 컴포넌트화</li>
            </ul>
          </section>
          {/* 개발 이슈 및 개선 경험 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-yellow-500">⚙️</span> 개발 이슈 및 개선 경험</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-200">
              <li>- <b>shadcn/ui</b> 기반에서 <b>tailwind.config</b> 및 <b>컴포넌트 커스터마이징</b> 과정에서의 다크모드/테마 대응</li>
              <li>- <b>Next.js</b>의 App Router 구조와 SSR, 클라이언트 컴포넌트 혼합 사용 경험</li>
              <li>- <b>props, 타입, 컴포넌트 분리</b> 등 유지보수성과 확장성을 고려한 설계</li>
              <li>- <b>자동 배포</b> 구성(Vercel, GitHub Actions) 및 환경변수 관리</li>
              <li>- <b>실제 운영중</b>인 프로젝트로, 실시간 피드백 반영 및 개선 반복</li>
            </ul>
          </section>
        </div>
      </TabsContent>

      {/* 기술스택 */}
      <TabsContent value="stack" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><span className="text-purple-500">🛠️</span> 기술 스택</h2>
          {/* 주요 스택 뱃지 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {techStacks.map((tech) => (
              <Badge key={tech} variant="outline" className="px-3 py-1 text-xs font-medium bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                {tech}
              </Badge>
            ))}
          </div>
          {/* 역할별 상세 표 */}
          <div className="overflow-x-auto">
            <table className="min-w-[400px] border text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border px-2 py-1">구분</th>
                  <th className="border px-2 py-1">주요 라이브러리</th>
                  <th className="border px-2 py-1">특징/역할</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1 font-bold">Frontend</td>
                  <td className="border px-2 py-1">React, Next.js, shadcn/ui</td>
                  <td className="border px-2 py-1">SPA, 컴포넌트 기반 UI, SSR/CSR</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-bold">스타일링</td>
                  <td className="border px-2 py-1">Tailwind CSS</td>
                  <td className="border px-2 py-1">유틸리티 퍼스트, 빠른 커스터마이즈</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-bold">배포/CI</td>
                  <td className="border px-2 py-1">Vercel, GitHub Actions</td>
                  <td className="border px-2 py-1">자동 배포, 환경변수 관리</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-bold">형상관리</td>
                  <td className="border px-2 py-1">GitHub</td>
                  <td className="border px-2 py-1">버전 관리 및 협업</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-bold">언어</td>
                  <td className="border px-2 py-1">TypeScript</td>
                  <td className="border px-2 py-1">정적 타입, 코드 품질 향상</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </TabsContent>

      {/* 링크 */}
      <TabsContent value="links" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-6 h-full">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><span className="text-sky-500">🔗</span> 관련 링크</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2">아래 버튼을 통해 GitHub 저장소와 실제 배포된 포트폴리오 사이트를 확인할 수 있습니다.</p>
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
                실서비스 바로가기
              </a>
            </Button>
          </div>
        </section>
      </TabsContent>
    </Tabs>
  );
};

export default Project3Content;
