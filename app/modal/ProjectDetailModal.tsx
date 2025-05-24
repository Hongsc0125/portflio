import React, { Suspense, lazy, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ isOpen, onClose, projectId }) => {
  if (!projectId) return null;

  const ProjectSpecificContent = useMemo(() => {
    if (!projectId) return null;
    return lazy(() =>
      import(`./project-details/Content_${projectId}`)
        .catch(() => {
          console.warn(`Content component for project ID ${projectId} not found. Displaying fallback.`);
          return { default: () => <div>Project-specific content for ID {projectId} is not available.</div> };
        })
    );
  }, [projectId]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-[95vw] sm:max-w-[800px] min-h-[300px] max-h-[90vh] p-0 bg-transparent flex"
        aria-label={`프로젝트 상세보기`}
      >
        {/* 접근성 보장용 DialogTitle (시각적으로 숨김) */}
        <span style={{ position: 'absolute', width: 1, height: 1, margin: -1, padding: 0, overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
          <DialogTitle>프로젝트 상세</DialogTitle>
        </span>
        <Card
          className="rounded-lg shadow-xl overflow-hidden flex flex-col w-full flex-1 min-h-[300px] max-h-[900px] max-w-[900px]"
        >
          <CardHeader className="bg-gray-50 dark:bg-gray-800 p-6">
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

          <DialogFooter className="p-6 bg-gray-50 dark:bg-gray-800">
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
