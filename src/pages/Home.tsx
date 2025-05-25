import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";


export function Home() {
    return (
        <div className="flex h-screen w-full">
          <AppSidebar/>
          <SidebarTrigger />
          <main>
            <h1>Home</h1>
          </main>
        </div>
    )
}