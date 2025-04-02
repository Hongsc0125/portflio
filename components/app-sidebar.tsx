import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Folder, User, Phone, Info, Building } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar className="bg-[var(--sidebar-background)] text-[var(--sidebar-foreground)]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuItem>
            <Link href="/" className="flex items-center p-4 hover:bg-[var(--sidebar-hover)]">
              <User size={20} className="mr-2" />
              About me
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/portfolio" className="flex items-center p-4 hover:bg-[var(--sidebar-hover)]">
              <Building size={20} className="mr-2" />
              Career
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/about" className="flex items-center p-4 hover:bg-[var(--sidebar-hover)]">
              <Folder size={20} className="mr-2" />
              Projects
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/contact" className="flex items-center p-4 hover:bg-[var(--sidebar-hover)]">
              <Phone size={20} className="mr-2" />
              Contact me
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/contact" className="flex items-center p-4 hover:bg-[var(--sidebar-hover)]">
              <Info size={20} className="mr-2" />
              Archiving
            </Link>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
