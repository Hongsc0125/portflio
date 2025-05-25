import React, { Suspense, lazy, useMemo, useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ isOpen, onClose, projectId }) => {
  // 이미지 크게 보기 오버레이가 열렸는지 추적
  const [imageOverlayOpen, setImageOverlayOpen] = useState(false);
  
  // 이미지 오버레이 상태 변경 감지
  useEffect(() => {
    const checkOverlayStatus = () => {
      if (typeof window !== 'undefined') {
        setImageOverlayOpen(!!window.__imageOverlayOpen);
      }
    };
    
    // 초기 상태 확인
    checkOverlayStatus();
    
    // 주기적으로 오버레이 상태 확인 (100ms 마다)
    const intervalId = setInterval(checkOverlayStatus, 100);
    
    return () => clearInterval(intervalId);
  }, []);
  const ProjectSpecificContent = useMemo(() => {
    return lazy(() =>
      import(`./project-details/Content_${projectId}`)
        .catch(() => {
          console.warn(`Content component for project ID ${projectId} not found. Displaying fallback.`);
          return { default: () => <div>Project-specific content for ID {projectId} is not available.</div> };
        })
    );
  }, [projectId]);

  if (!projectId) return null;

  return (
    <Dialog 
      open={isOpen} 
      onOpenChange={(open) => {
        // 이미지 오버레이가 열려있을 때는 닫기 기능 비활성화
        if (imageOverlayOpen && open === false) {
          // console.log('오버레이 열려있어서 모달 닫기 방지');
          return;
        }
        // console.log('모달 닫기 실행');
        onClose();
      }}>
      
      <DialogContent
        className="w-full max-w-[95vw] sm:max-w-[800px] min-h-[300px] max-h-[90vh] p-0 bg-transparent flex"
        aria-label={`프로젝트 상세보기`}
        onPointerDown={e => {
          if (window.__imageOverlayOpen) {
            e.stopPropagation();
          }
        }}
      >
        {/* 접근성 보장용 DialogTitle (시각적으로 숨김) */}
        <span style={{ position: 'absolute', width: 1, height: 1, margin: -1, padding: 0, overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
          <DialogTitle>프로젝트 상세</DialogTitle>
        </span>
        <Card
          className="rounded-lg shadow-xl overflow-hidden flex flex-col w-full flex-1 min-h-[300px] max-h-[900px] max-w-[900px]"
        >
          <CardHeader className="p-6">
            <CardTitle className="text-2xl font-bold">프로젝트 상세</CardTitle>
          </CardHeader>

          <Separator />

          <CardContent className="p-6 flex-1 flex flex-col overflow-y-auto">
            {ProjectSpecificContent ? (
              <Suspense fallback={<div className="text-center p-4">Loading details...</div>}>
                <ProjectSpecificContent />
              </Suspense>
            ) : (
              <div className="text-center p-4 text-red-500">Could not load project content.</div>
            )}
          </CardContent>

          <DialogFooter className="p-6">
            <DialogClose asChild>
              <Button variant="outline">닫기</Button>
            </DialogClose>
          </DialogFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
