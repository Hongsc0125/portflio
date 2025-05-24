import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const techStacks: string[] = [
  "Python (discord.py)",
  "JavaScript (discord.js)",
  "Node.js",
  "PostgreSQL",
  "axios"
];
const discordIntroduceUrl = "https://harmari.duckdns.org/introduce/";
const discordInviteUrl = "https://discord.com/invite/mabinogi01";

const Project1Content: React.FC = () => {
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

      <TabsContent value="intro" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <div className="space-y-6">
          {/* 프로젝트 개요 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-2"><span className="text-blue-500">🤖</span> 프로젝트 개요</h2>
            <p className="text-gray-700 dark:text-gray-200">현재 약 <span className="font-bold">1,000명</span>의 사용자가 참여 중인 디스코드 서버에서 다양한 자동화 기능을 제공하는 봇을 운영하고 있습니다.</p>
          </section>
          {/* 프로젝트를 통해 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-green-500">🌱</span> 프로젝트를 통해</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-200">
              <li>- 약 1,000명의 사용자 대상 실시간 상호작용 시스템 운영 경험</li>
              <li>- Python·JavaScript 양대 생태계에서 Discord API 활용 경험 축적</li>
              <li>- 대규모 사용자 대상 장애 대응 및 무중단 서비스 운영 경험</li>
              <li>- Discord API 신규 기능(Components, Modal 등) 실서비스 적용 및 검증 경험</li>
              <li>- 크롤러, 알림, 통계 등 다양한 백엔드 자동화 서비스 설계 및 운영 경험</li>
            </ul>
          </section>
          {/* 주요 기능 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-pink-500">🚀</span> 주요 기능</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-start gap-2"><span className="font-bold">파티 모집</span> - 실시간 파티 매칭/모집</li>
              <li className="flex items-start gap-2"><span className="font-bold">알림</span> - 원하는 시간에 개인 알림 전송</li>
              <li className="flex items-start gap-2"><span className="font-bold">패치노트 자동게시</span> - 공식 홈페이지 크롤링 데이터 게시</li>
              <li className="flex items-start gap-2"><span className="font-bold">이벤트 맵 공유/알림</span> - 비정기 이벤트 정보 사용자간 공유시스템, 알림시스템</li>
              <li className="flex items-start gap-2"><span className="font-bold">랭킹/통계 조회</span> - 유저 전체 크롤링 데이터기반 개인별 랭킹/인구 통계 조회</li>
              <li className="flex items-start gap-2"><span className="font-bold">대화 요약</span> - 최근 대화를 LLM기반으로 대화요약</li>
            </ul>
          </section>
          {/* 개발 이슈 및 대응 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-yellow-500">⚙️</span> 개발 이슈 및 대응</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2 text-gray-700 dark:text-gray-200">
              <li className="flex items-start gap-2"><span className="font-bold">discord.py 한계</span></li>
              <li>
              - 최신 Discord API(Components V2, Modals, Permissions 등) 대응 부족
              </li>
              <li className="flex items-start gap-2"><span className="font-bold">해결 방안: 봇 이중화</span></li>
              <li>
              - Python 기반 봇: 기존 안정화된 기능 유지 / JS 기반 봇: 최신 기능(버튼, 모달, 서비스 엔드포인트) 구현<br/>
              - Python에서 일부 기능 JS로 마이그레이션
              </li>
            </ul>
          </section>
          {/* 운영/경험 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-purple-500">🔄</span> 운영 & 유지보수</h3>
            <ul className="space-y-1 text-gray-700 dark:text-gray-200">
              <li>현재도 운영중이며, 지속적인 유저 피드백을 받아 유지보수중</li>
            </ul>
          </section>
        </div>
      </TabsContent>
      <TabsContent value="issue">
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">⚙️ 개발 이슈 및 대응</h2>
          <ul className="list-decimal ml-6 space-y-1">
            <li><span className="font-bold">discord.py 한계</span><br /><span className="text-sm">최신 Discord API(Components V2, Modals, Permissions 등) 대응 부족</span></li>
            <li><span className="font-bold">해결 방안: 봇 이중화</span><br />
              <ul className="list-disc ml-6">
                <li>Python 기반 봇: 기존 안정화된 기능 유지</li>
                <li>JS 기반 봇: 최신 기능(버튼, 모달, 서비스 엔드포인트) 구현</li>
              </ul>
            </li>
            <li><span className="font-bold">지속적인 유지보수</span><br />
              <ul className="list-disc ml-6">
                <li>사용자 피드백 반영 → 기능 개선</li>
                <li>공식 패치 노트 자동 게시 스케줄러 운영</li>
              </ul>
            </li>
          </ul>
        </section>
      </TabsContent>

      <TabsContent value="ops">
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">🔄 운영 & 유지보수</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li><span className="font-bold">이벤트 맵 알림</span>: 비정기성 정보 공유 및 예약 알림</li>
            <li><span className="font-bold">정기 패치 게시</span>: 공식 홈페이지 패치 노트 크롤링 후 매번 채널에 자동 게시</li>
            <li><span className="font-bold">사용자 관리</span>: 피드백 수집 및 우선순위별 기능 추가/버그 수정</li>
          </ul>
        </section>
      </TabsContent>

      <TabsContent value="links" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center gap-6 h-full">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4"><span className="text-sky-500">🔗</span> 관련 링크</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2">아래 버튼을 통해 디스코드 채널 소개 및 초대 링크로 바로 이동할 수 있습니다.</p>
          <div className="flex flex-row gap-4 w-full justify-center">
            <Button asChild variant="outline" className="flex-1 flex items-center justify-center gap-2 max-w-xs">
              <a href={discordIntroduceUrl} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1"><path d="M20.317 4.369a19.791 19.791 0 0 0-16.634 0A2.06 2.06 0 0 0 2 6.21v11.58a2.06 2.06 0 0 0 1.683 1.84c2.07.874 4.237 1.312 6.317 1.312s4.247-.438 6.317-1.312A2.06 2.06 0 0 0 22 17.79V6.21a2.06 2.06 0 0 0-1.683-1.841zM12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5zm7.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-15 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"/></svg>
                채널 소개 페이지
              </a>
            </Button>
            <Button asChild variant="default" className="flex-1 flex items-center justify-center gap-2 max-w-xs">
              <a href={discordInviteUrl} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1"><path d="M21.72 7.386c-.375-1.09-.97-2.06-1.77-2.86-.8-.8-1.77-1.395-2.86-1.77-1.13-.39-2.33-.59-3.59-.59s-2.46.2-3.59.59c-1.09.375-2.06.97-2.86 1.77-.8.8-1.395 1.77-1.77 2.86-.39 1.13-.59 2.33-.59 3.59s.2 2.46.59 3.59c.375 1.09.97 2.06 1.77 2.86.8.8 1.77 1.395 2.86 1.77 1.13.39 2.33.59 3.59.59s2.46-.2 3.59-.59c1.09-.375 2.06-.97 2.86-1.77.8-.8 1.395-1.77 1.77-2.86.39-1.13.59-2.33.59-3.59s-.2-2.46-.59-3.59zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/></svg>
                채널 바로가기
              </a>
            </Button>
          </div>
        </section>
      </TabsContent>

      <TabsContent value="stack" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><span className="text-green-500">🏗️</span> 기술 스택</h2>
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
                  <td className="border px-2 py-1 font-bold">Python 봇</td>
                  <td className="border px-2 py-1">discord.py</td>
                  <td className="border px-2 py-1">안정적인 기본 기능 담당</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-bold">JavaScript 봇</td>
                  <td className="border px-2 py-1">discord.js (v14+)</td>
                  <td className="border px-2 py-1">최신 Discord API, Components V2 등 지원</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-bold">크롤러</td>
                  <td className="border px-2 py-1">axios, cheerio, BeautifulSoup</td>
                  <td className="border px-2 py-1">패치노트/이벤트맵 정보 크롤링</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-bold">DB/캐시</td>
                  <td className="border px-2 py-1">PostgreSQL, Redis</td>
                  <td className="border px-2 py-1">랭킹·통계·알림 등 데이터 관리</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 font-bold">서버/런타임</td>
                  <td className="border px-2 py-1">Node.js</td>
                  <td className="border px-2 py-1">JS 봇 및 API 서버 구동</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </TabsContent>
    </Tabs>
  );
};

export default Project1Content;
