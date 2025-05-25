import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Link } from "react-router-dom"
import { Home, Book, User, ArrowRightLeft, ArrowLeftToLine } from "lucide-react";


export function AppSidebar() {
  return (
    <Sidebar>

      <SidebarHeader className="mb-10 shadow-sm">
        <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>G</AvatarFallback>
            </Avatar>
            <h1 className="text-white">Gerenciador</h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup >
          <SidebarMenu >
            <SidebarMenuItem className="flex flex-col gap-3 ml-1">
              <SidebarMenuButton className="flex items-center gap-3">
                <Home size={18} color="white"/>
                <Link to="/home" className="w-full text-white">Home</Link>
              </SidebarMenuButton>
              <SidebarMenuButton>
                <Book size={18} color="white"/>
                <Link to="/book" className="w-full text-white">Livros</Link>
              </SidebarMenuButton>
              <SidebarMenuButton>
                <User size={18} color="white"/>
                <Link to="/client" className="w-full text-white">Usuários</Link>
              </SidebarMenuButton>
              <SidebarMenuButton>
                <ArrowRightLeft size={18} color="white"/>
                <Link to="/loan" className="w-full text-white">Empréstimos</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="hover:bg-sidebar-accent">
        <Link to="/" className="flex items-center gap-3">
          <ArrowLeftToLine size={21} color="white"/>
          <p className="text-white">Sair</p>
        </Link>
      </SidebarFooter>
    </Sidebar>
  )
}
