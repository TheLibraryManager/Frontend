import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";


export function Loan() {
    return (
        <div className="flex h-screen w-full">
          <AppSidebar/>
          <SidebarTrigger />
          <main>
            <h1>Loan</h1>
          </main>
        </div>
    )
}