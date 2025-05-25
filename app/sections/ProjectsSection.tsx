import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectDetailModal from "@/app/modal/ProjectDetailModal";

interface Project {
  id: number;
  title: string;
  description: string;
  isRunning: boolean;
  projectType: '팀' | '개인';
}

const projectsData: Project[] = [
  {
    id: 1,
    isRunning: true,
    projectType: '개인',
    title: "마비노기 모바일 Discord 봇",
    description: "마비노기 모바일 플레이 중 느꼈던 불편함을 해소하고자 Discord 봇을 개발했습니다.\n주요 기능으로 랭킹정보, 파티모집, 인구통계, 알림기능 등을 제공합니다."
  },
  {
    id: 2,
    isRunning: true,
    projectType: '개인',
    title: "대용량 크롤링 서버 구축",
    description: "마비노기 모바일 랭킹 웹페이지를 크롤링하여 약 150만명 유저의 데이터를 자동 수집/DB화\n실시간 랭킹 조회, 멀티스레드/큐/배치/데드락 해결 등 대용량 처리 구조 경험"
  },
  {
    id: 3,
    isRunning: true,
    projectType: '개인',
    title: "개인 포트폴리오 웹사이트",
    description: "Next.js, Tailwind CSS, shadcn/ui 기반의 반응형 포트폴리오 웹사이트\n깔끔한 UI/UX, 자동 배포, 컴포넌트 기반 구조 구현"
  },
];

const ProjectsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const openModal = (projectId: number) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null);
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-2">
        <h2 className="text-2xl font-bold mb-0">개인 프로젝트</h2>
        <div className="flex items-center gap-2 text-base">
          <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1 align-middle shadow animate-pulse" title="운영중" />운영중
          <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1 align-middle shadow animate-pulse" title="종료" />종료
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projectsData.map((project) => (
          <Card key={project.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>
  {(project.isRunning) && (
    <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2 align-middle shadow animate-pulse" title="운영중" />
  )}
  {(project.isRunning === false) && (
    <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2 align-middle shadow animate-pulse" title="종료" />
  )}
  {project.title}
  <span className={
    project.projectType === '팀'
      ? 'inline-block px-2 py-0.5 text-xs font-semibold rounded bg-blue-100 text-blue-700 ml-2 align-middle'
      : 'inline-block px-2 py-0.5 text-xs font-semibold rounded bg-purple-100 text-purple-700 ml-2 align-middle'}>
    {project.projectType}
  </span>
</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-grow">
              <p className="text-gray-600 mb-4 whitespace-pre-line">
                {project.description}
              </p>
              <Button onClick={() => openModal(project.id)} className="mt-auto">
                자세히 보기
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedProjectId && (
        <ProjectDetailModal
          isOpen={isModalOpen}
          onClose={closeModal}
          projectId={selectedProjectId}
        />
      )}
    </div>
  );
};

export default ProjectsSection;
