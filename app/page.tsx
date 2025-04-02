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
        "개발에서 배포까지, 혼자서 끝까지!",
        "백엔드부터 AI까지, All-in-One",
        "해커톤으로 단련된 클라우드 & AI 풀스택 개발자"
      ]
    : [
        "From Zero to Deploy, Solo Developer!",
        "Backend to AI, All-in-One Developer",
        "Hackathon-Trained Cloud & AI Full-Stack Developer"
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
                  {isKorean ? "KR" : "EN"}
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
                    <p className="text-sm text-gray-500">{isKorean ? "2024.01 - (재직 중)" : "Nov 2024 - Present"}</p>
                  </div>
                </div>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 italic">"{isKorean ? "연계/미들웨어 솔루션 기업" : "Creating a warm neighborhood where neighbors become closer"}"</p>
                <div>
                  <h4 className="font-semibold">{isKorean ? "Backend 개발" : "Backend Development"}</h4>
                  <div className="ml-4 mt-2 space-y-4">
                    <div>
                      <p className="font-medium">{isKorean ? "지역 동네 업체 정보(비즈프로필) 관련 개발" : "Local Business Profile Development"}</p>
                      <p className="text-sm text-gray-500">{isKorean ? "2024년 하반기 - (진행 중)" : "Late 2024 - Present"}</p>
                      <p className="mt-1 text-gray-600">{isKorean ? "이웃의 사장님들과 고객님들을 효과적으로 연결하기 위한 비즈프로필 관련 기능 개발" : "Developing business profile features to effectively connect local business owners with customers"}</p>
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


      </div>
    </div>
  );
}
