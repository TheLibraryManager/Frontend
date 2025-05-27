import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { AppModal } from "@/components/modal/app-modal";
import { Separator } from "@/components/ui/separator";
import {Header} from "@/components/header/header";


export function Loan() {

  const dataBooks = [
    { id: 1, name: "Arthur", book: "pequeno principe", status: 'emprestado' },
    { id: 4, name: "Gabriela", book: "o guarani", status: 'disponível' },
    { id: 5, name: "Daniel", book: "o senhor dos aneis", status: 'disponível' },
    { id: 6, name: "Eduardo", book: "o hobbit", status: 'disponível' },
    { id: 7, name: "Fernanda", book: "a moreninha", status: 'emprestado' },

  ];

  return (
    <div className="flex h-screen w-full">
      <AppSidebar />
      <div className="w-full flex flex-col"> 
        <Header/>
        <Separator/>  
        <main className="w-full px-8 mt-6">
        
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Input className="w-md"></Input>
              <Search size={16}/>
            </div>
            <AppModal/>
          </div>
          <div className="rounded-md border overflow-hidden">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead>ID</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Livro</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center">Detalhes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.id.toString().padStart(2, '0')}</TableCell>
                    <TableCell>{book.name}</TableCell>
                    <TableCell>{book.book}</TableCell>
                    <TableCell>{book.status}</TableCell>
                    <TableCell className="text-center">
                      <Button>Detalhes</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
}
