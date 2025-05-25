import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const techStacks: string[] = [
  "Python",
  "Selenium",
  "PostgreSQL",
  "Thread",
  "Queue",
  "COPY (Postgres)",
  "BeautifulSoup4",
];

const githubUrl = "https://github.com/Hongsc0125/mabinogi-crawler";

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
        {/* <TabsTrigger value="links" className="px-5 py-2 text-base font-semibold rounded-t-lg border border-b-0 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors data-[state=active]:bg-primary data-[state=active]:text-white">
          <span className="mr-1">🔗</span>링크
        </TabsTrigger> */}
      </TabsList>

      {/* 소개 */}
      <TabsContent value="intro" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <div className="space-y-6">
          {/* 프로젝트 개요 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-2"><span className="text-blue-500">🕸️</span> 대용량 크롤링 서버 구축</h2>
            <p className="space-y-2 text-gray-700 dark:text-gray-200">
              마비노기 모바일의 공식 API 미지원 환경에서, <b>7개 서버 약 150만명</b> 유저의 랭킹 데이터를 <b>Python 기반 대용량 크롤링 서버</b>로 구축·운영한 실전 경험입니다.<br/>
              단순 수집이 아니라, <b>웹페이지 구조 분석, 데이터 품질 관리, 장애 대응, 성능 최적화</b> 등 실제 서비스 수준의 고민과 개선을 반복하며 설계·구현·운영까지 직접 담당했습니다.
            </p>
          </section>
          {/* 크롤링 설계 및 데이터 수집 전략 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-green-500">🔎</span> 크롤링 설계 및 데이터 수집 전략</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li><b>API 미제공</b> 환경에서 <b>웹페이지 HTML 구조를 직접 분석</b>하여 데이터 파싱 로직을 설계</li>
              <li>1000등까지는 <b>페이지네이션 기반 크롤링</b>, 그 이하 유저는 <b>캐릭터명 기반 추적·검색</b> 로직으로 전체 유저 확보</li>
              <li>각 서버별로 <b>유저 분포/랭킹 변화</b>를 분석해, <b>효율적인 크롤링 순서와 추적 대상 선정</b> 알고리즘 구현</li>
              <li>크롤링 중 <b>중복 데이터, 누락, 일시적 차단</b> 등 예외 상황에 대비한 <b>재시도/백오프</b> 등 견고한 예외처리 적용</li>
            </ul>
          </section>
          {/* 동시성/성능/안정성 고민 및 구조 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-cyan-500">🧩</span> 동시성 · 성능 · 안정성 구조</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li><b>7개 서버</b>를 각 <b>Thread + ChromeDriver</b>로 병렬 처리, <b>Queue</b>로 작업 분산/순서 보장</li>
              <li>크롤링 결과를 <b>메모리 큐</b>에 저장, <b>DB 작업(INSERT)</b>은 별도 스레드로 분리하여 I/O 병목 최소화</li>
              <li>DB 저장 속도 병목 발견 시 <b>배치 insert, PostgreSQL COPY</b> 등 대용량 데이터 최적화 전략 적용</li>
              <li>중복/경합 방지를 위해 <b>큐에 쌓을 때부터 중복 필터</b> 적용, 데드락/무한 대기 등 장애를 사전 차단</li>
            </ul>
          </section>
          {/* 실시간 랭킹 조회와 고도화 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-pink-500">⚡</span> 실시간 랭킹 조회와 고도화</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li>전투력/매력/생활력 3개 랭킹을 <b>각 Thread별 ChromeDriver 상시 대기</b>로 요청 즉시 크롤링, 10초 이내 응답</li>
              <li>실제 유저 사용 패턴, 요청 빈도, 병목 구간을 분석해 <b>Thread/Driver 수 조정, 예비 Driver 핫스왑</b> 등 운영 중 고도화</li>
            </ul>
          </section>
          {/* 트러블슈팅 및 기술적 의사결정 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-yellow-500">🛠️</span> 트러블슈팅 및 기술적 의사결정</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li>크롤링/DB 작업 분리, <b>Queue & Thread</b> 구조로 장애시에도 데이터 유실/중복 최소화</li>
              <li>DB 데드락(동일 데이터 중복 세션) 발생 → <b>큐 중복 필터, 트랜잭션 재설계</b>로 해결</li>
              <li>크롤링 속도/품질/안정성 균형을 위해 <b>스케줄링, 백오프, 예외 재시도 정책</b> 직접 설계</li>
              <li>운영 중 발생한 <b>IP 차단, 페이지 구조 변경, 네트워크 오류</b> 등 장애에 신속 대응</li>
            </ul>
          </section>
          {/* 운영 및 유지보수 */}
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-2"><span className="text-purple-500">🔄</span> 운영 & 유지보수</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li>매일 자동 크롤링/DB 갱신, 신규 유저/랭킹 실시간 반영</li>
              <li>운영 중 <b>성능 개선, 장애 대응, 코드 리팩토링</b> 등 지속적 개선</li>
            </ul>
          </section>
        </div>
      </TabsContent>

      {/* 기술스택 */}
      <TabsContent value="stack" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><span className="text-green-500">🏗️</span> 기술 스택</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {techStacks.map((tech) => (
              <Badge key={tech} variant="outline" className="px-3 py-1 text-xs font-medium bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[400px] border text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border px-4 py-2 text-center align-middle">구분</th>
                  <th className="border px-4 py-2 text-center align-middle">주요 라이브러리</th>
                  <th className="border px-4 py-2 text-center align-middle">특징/역할</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-bold text-center align-middle">프로그래밍 언어</td>
                  <td className="border px-4 py-2 text-center align-middle">Python</td>
                  <td className="border px-4 py-2 text-center align-middle">전체 크롤링/자동화/서버구현</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-bold text-center align-middle">크롤링</td>
                  <td className="border px-4 py-2 text-center align-middle">Selenium, BeautifulSoup4</td>
                  <td className="border px-4 py-2 text-center align-middle">동적·정적 웹 데이터 파싱</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-bold text-center align-middle">동시성/작업 분산</td>
                  <td className="border px-4 py-2 text-center align-middle">Thread, Queue</td>
                  <td className="border px-4 py-2 text-center align-middle">멀티스레드, 큐 기반 작업 분산</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-bold text-center align-middle">DB/대용량 처리</td>
                  <td className="border px-4 py-2 text-center align-middle">PostgreSQL, COPY</td>
                  <td className="border px-4 py-2 text-center align-middle">대용량 데이터 저장/최적화</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </TabsContent>

      {/* 링크 */}
      <TabsContent value="links" className="min-h-[600px] max-h-[600px] overflow-y-auto" style={{ scrollbarGutter: 'stable' }}>
        <section className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button asChild variant="secondary" className="w-full sm:w-fit transition-all hover:bg-gray-200 dark:hover:bg-gray-700">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 block w-full">
              GitHub 저장소
            </a>
          </Button>
        </section>
      </TabsContent>
    </Tabs>
  );
};

export default Project3Content;
