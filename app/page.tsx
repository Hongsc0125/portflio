"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { calculateYearsOfExperience } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [isKorean, setIsKorean] = useState(true);

  const toggleLanguage = () => {
    setIsKorean(!isKorean);
  };

  const introductions = isKorean
    ? [
        "환경 구축부터 개발 배포 혼자서 끝까지!",
        "백엔드부터 AI까지 아우르는 All-in-One 실무형 개발자",
        "해커톤과 현업 경험으로 단련된 백엔드 & AI 서비스 개발 전문가"
      ]
    : [
        "From Environment Setup to Deployment, End-to-End Solo Developer!",
        "All-in-One Engineer Covering Backend to AI Development",
        "Backend & AI Service Expert with Hackathon and Industry Experience"
      ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-2">
              <div className="flex justify-first">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleLanguage} 
                  className="text-gray-400 hover:text-gray-600 transition-colors px-2 py-1 h-auto"
                >
                  {isKorean ? "KR / EN" : "KR / EN"}
                </Button>
              </div>
              <p className="text-gray-600 font-d2coding whitespace-nowrap">
                {isKorean 
                  ? `Backend Developer | ${calculateYearsOfExperience(2024)} 년차` 
                  : `Backend Developer | ${calculateYearsOfExperience(2024)} Years Experience`}
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl font-paperlogy tracking-tight whitespace-nowrap">
              {isKorean ? "홍 성 철" : "Sung Chul Hong"}
            </h1>
            <div className="space-y-3 text-lg text-gray-600 font-d2coding">
              {introductions.map((intro, index) => (
                <p key={index} className="hover:text-gray-800 transition-colors">
                  {intro}
                </p>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/me.jpg"
              alt="sungchul hong"
              width={300}
              height={300}
              className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>
        </div>
        <Separator />
        {/* career Section */}
        <div>
          <h2 className="text-2xl font-bold">{isKorean ? "커리어" : "Career"}</h2>
          <div className="space-y-10 mt-6">
            {/* 메타빌드 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                    {/* 로고  */}
                    <Image src="/images/logos/metabuild.png" alt="meta" width={30} height={30} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{isKorean ? "(주) 메타빌드" : "Metabuild"}</h3>
                    <p className="text-sm text-gray-500">{isKorean ? "2024.01 - (재직 중)" : "Jan 2024 - Present"}</p>
                  </div>
                </div>
                {/* <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a> */}
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 italic">"{isKorean ? "연계/미들웨어 솔루션 기업" : "Integration and Middleware Solution Company"}"</p>
                {/* <div>
                  <h4 className="font-semibold">{isKorean ? "Backend 개발" : "Backend Development"}</h4>
                  <div className="ml-4 mt-2 space-y-4">
                    <div>
                      <p className="font-medium">{isKorean ? "지역 동네 업체 정보(비즈프로필) 관련 개발" : "Local Business Profile Development"}</p>
                      <p className="text-sm text-gray-500">{isKorean ? "2024년 하반기 - (진행 중)" : "Late 2024 - Present"}</p>
                      <p className="mt-1 text-gray-600">{isKorean ? "이웃의 사장님들과 고객님들을 효과적으로 연결하기 위한 비즈프로필 관련 기능 개발" : "Developing business profile features to effectively connect local business owners with customers"}</p>
                    </div>
                  </div>
                </div> */}
                <div className="mt-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="bg-white hover:bg-gray-100 text-gray-700 transition-colors">파견근무</Badge>
                        <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">eGov</Badge>
                        <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">Vue</Badge>
                        <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">Exbuilder</Badge>
                        <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">Tibero</Badge>
                      </div>
                      <div className="flex items-center gap-5">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <Image src="/images/logos/1388_CI.png" alt="Company 1" width={50} height={50} />
                        </div>
                        <div>
                          <p className="font-bold text-lg">한국청소년 상담복지개발원</p>
                          <p className="text-xs text-gray-500">{isKorean ? "위기청소년 통합지원 시스템 운영" : "SI Project"}</p>
                        </div>
                      </div>
                      <div className="mt-5 space-y-2">
                        <div className="flex items-center gap-4">
                          <div className="w-1 h-4 bg-black"></div>
                          <p className="font-bold text-gray-800">{isKorean ? "통계시스템 개선" : "Financial System Integration Project"}</p>
                          <span className="text-gray-300">|</span>
                          <p className="text-sm text-gray-500">{isKorean ? "2025년 상반기" : "Jan 2024 ~ Jan 2025"}</p>
                        </div>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          {isKorean ? "오집계 이슈 해결을 위한 쿼리 성능 개선 및 힌트 적용을 통해 통계 시스템의 정확도 및 안정성 향상." : "Responsible for overall design and development of financial system integration project, building a system for efficient integration between financial systems"}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          {isKorean ? "신규 통계 지표 요구사항 반영 및 시스템 구조 확장을 통한 통계 시스템 기능 고도화." : "Responsible for overall design and development of financial system integration project, building a system for efficient integration between financial systems"}
                        </p>
                      </div>
                      <div className="mt-5 space-y-2">
                        <div className="flex items-center gap-4">
                          <div className="w-1 h-4 bg-black"></div>
                          <p className="font-bold text-gray-800">{isKorean ? "인증시스템 개발" : "Financial System Integration Project"}</p>
                          <span className="text-gray-300">|</span>
                          <p className="text-sm text-gray-500">{isKorean ? "2024년 하반기" : "Jan 2024 ~ Jan 2025"}</p>
                        </div>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          {isKorean ? "드림시큐리티 표준창 인증 기능을 기존 포털 시스템에 적용하여 인증 체계 도입." : "Responsible for overall design and development of financial system integration project, building a system for efficient integration between financial systems"}
                        </p>
                      </div>
                      <div className="mt-5 space-y-2">
                        <div className="flex items-center gap-4">
                          <div className="w-1 h-4 bg-black"></div>
                          <p className="font-bold text-gray-800">{isKorean ? "청소년 증명서 출력 개선" : "Financial System Integration Project"}</p>
                          <span className="text-gray-300">|</span>
                          <p className="text-sm text-gray-500">{isKorean ? "2024년 중반기" : "Jan 2024 ~ Jan 2025"}</p>
                        </div>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          {isKorean ? "기존 계산 로직의 오류를 정밀 분석 및 개선하고, 정책 변경에 따라 새로운 조건을 반영한 계산 알고리즘을 재정립하여 시스템의 정확성과 일관성 확보." : "Responsible for overall design and development of financial system integration project, building a system for efficient integration between financial systems"}
                        </p>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          {isKorean ? "대국민 포탈사이트에 증명서 출력 기능을 신규 추가하여 청소년 증명서 출력 확인 기능을 제공." : "Responsible for overall design and development of financial system integration project, building a system for efficient integration between financial systems"}
                        </p>
                      </div>
                      <div className="mt-5 space-y-2">
                        <div className="flex items-center gap-4">
                          <div className="w-1 h-4 bg-black"></div>
                          <p className="font-bold text-gray-800">{isKorean ? "시스템 운영 및 유지보수" : "Financial System Integration Project"}</p>
                          <span className="text-gray-300">|</span>
                          <p className="text-sm text-gray-500">{isKorean ? "2024년 ~ 2025년" : "Jan 2024 ~ Jan 2025"}</p>
                        </div>
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          {isKorean ? "사용자 요구사항을 분석하여 프로그램을 수정하고, RFP 기반의 요구 명세에 따라 신규 기능 개발 및 유지보수 업무 수행." : "Responsible for overall design and development of financial system integration project, building a system for efficient integration between financial systems"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-bold"> Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">A brief description of the project.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">A brief description of the project.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">A brief description of the project.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <Card className="border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Java</Badge>
                  <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Spring Boot</Badge>
                  <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Python</Badge>
                  <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">FastAPI</Badge>
                  <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Node.js</Badge>
                  <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">REST API</Badge>
                  <Badge variant="secondary" className="bg-blue-50 hover:bg-blue-100 text-blue-700">Others</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-600">AI</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-50 hover:bg-purple-100 text-purple-700">AI/ML</Badge>
                  <Badge variant="secondary" className="bg-purple-50 hover:bg-purple-100 text-purple-700">TensorFlow</Badge>
                  <Badge variant="secondary" className="bg-purple-50 hover:bg-purple-100 text-purple-700">PyTorch</Badge>
                  <Badge variant="secondary" className="bg-purple-50 hover:bg-purple-100 text-purple-700">OpenAI</Badge>
                  <Badge variant="secondary" className="bg-purple-50 hover:bg-purple-100 text-purple-700">Others</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-emerald-600">DevOps & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700">AWS</Badge>
                  <Badge variant="secondary" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700">Docker</Badge>
                  <Badge variant="secondary" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700">Kubernetes</Badge>
                  <Badge variant="secondary" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700">CI/CD</Badge>
                  <Badge variant="secondary" className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700">Others</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-rose-600">Database</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">MySQL</Badge>
                      <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">PostgreSQL</Badge>
                      <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">Oracle</Badge>

                      <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">MongoDB</Badge>
                      <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">Redis</Badge>
                      <Badge variant="secondary" className="bg-rose-50 hover:bg-rose-100 text-rose-700">Others</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-amber-600">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">JavaScript</Badge>
                  <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">React</Badge>
                  <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">Vue</Badge>
                  <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">Next.js</Badge>
                  <Badge variant="secondary" className="bg-amber-50 hover:bg-amber-100 text-amber-700">Others</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />
        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold">{isKorean ? "연락처" : "Contact"}</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{isKorean ? "이메일" : "Email"}</p>
                      <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                        your.email@example.com
                      </a>
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
                      <p className="font-medium text-gray-700">{isKorean ? "위치" : "Location"}</p>
                      <p className="text-gray-600">{isKorean ? "서울특별시" : "Seoul, South Korea"}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{isKorean ? "GitHub" : "GitHub"}</p>
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
                        github.com/yourusername
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{isKorean ? "LinkedIn" : "LinkedIn"}</p>
                      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors">
                        linkedin.com/in/yourusername
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
