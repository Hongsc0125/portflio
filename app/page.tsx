"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { getExperienceText, calculateYearsOfExperience } from "@/lib/utils";
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
              alt="Hero Image"
              width={300}
              height={300}
              className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>
        </div>

        <Separator />
        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-bold">Featured Projects</h2>
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
