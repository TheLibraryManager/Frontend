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
              <Link to="/home">
                <SidebarMenuButton className="flex items-center gap-3 cursor-pointer">
                  <Home size={18} color="white"/>
                  <p className="w-full text-white">Home</p>
                </SidebarMenuButton>
              </Link>
              <Link to="/book">
                <SidebarMenuButton className="flex items-center gap-3 cursor-pointer">
                  <Book size={18} color="white"/>
                  <p className="w-full text-white">Livros</p>
                </SidebarMenuButton>
              </Link>
              <Link to="/client">
                <SidebarMenuButton className="flex items-center gap-3 cursor-pointer">
                  <User size={18} color="white"/>
                  <p className="w-full text-white">Usuários</p>
                  </SidebarMenuButton>
              </Link>
              <Link to="/loan">
                <SidebarMenuButton className="flex items-center gap-3 cursor-pointer">
                  <ArrowRightLeft size={18} color="white"/>
                  <p className="w-full text-white">Empréstimos</p>
                </SidebarMenuButton>
              </Link>
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
