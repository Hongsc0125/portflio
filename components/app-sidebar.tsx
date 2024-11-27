import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Folder, User, Mail } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar className="bg-[var(--sidebar-background)] text-[var(--sidebar-foreground)]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuItem>
            <Link href="/" className="flex items-center p-4 hover:bg-[var(--sidebar-hover)]">
              <Home size={20} className="mr-2" />
              Home
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/portfolio" className="flex items-center p-4 hover:bg-[var(--sidebar-hover)]">
              <Folder size={20} className="mr-2" />
              Portfolio
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/about" className="flex items-center p-4 hover:bg-[var(--sidebar-hover)]">
              <User size={20} className="mr-2" />
              About
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/contact" className="flex items-center p-4 hover:bg-[var(--sidebar-hover)]">
              <Mail size={20} className="mr-2" />
              Contact
            </Link>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
