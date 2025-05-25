"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Folder, User, Phone, Building, Code } from "lucide-react";
import { useCallback } from "react";

export function AppSidebar() {
  // 스크롤 함수 정의
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 부드러운 스크롤 적용
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, []);
  return (
    <Sidebar className="bg-[var(--sidebar-background)] text-[var(--sidebar-foreground)]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuItem>
            <div 
              onClick={() => scrollToSection("hero")} 
              className="flex items-center p-4 hover:bg-[var(--sidebar-hover)] cursor-pointer"
            >
              <User size={20} className="mr-2" />
              소개
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <div 
              onClick={() => scrollToSection("career")} 
              className="flex items-center p-4 hover:bg-[var(--sidebar-hover)] cursor-pointer"
            >
              <Building size={20} className="mr-2" />
              경력
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <div 
              onClick={() => scrollToSection("projects")} 
              className="flex items-center p-4 hover:bg-[var(--sidebar-hover)] cursor-pointer"
            >
              <Folder size={20} className="mr-2" />
              프로젝트
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <div 
              onClick={() => scrollToSection("skills")} 
              className="flex items-center p-4 hover:bg-[var(--sidebar-hover)] cursor-pointer"
            >
              <Code size={20} className="mr-2" />
              기술 스택
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <div 
              onClick={() => scrollToSection("contact")} 
              className="flex items-center p-4 hover:bg-[var(--sidebar-hover)] cursor-pointer"
            >
              <Phone size={20} className="mr-2" />
              연락처
            </div>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
