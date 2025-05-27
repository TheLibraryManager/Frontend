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


export function Book() {

  const dataBooks = [
    { id: 1, title: "Pequeno Príncipe", genre: "Infantil", copies: 8 },
    { id: 2, title: "Dom Casmurro", genre: "Romance", copies: 5 },
    { id: 3, title: "1984", genre: "Ficção Científica", copies: 10 },
    { id: 4, title: "O Senhor dos Aneis", genre: "Fantasia", copies: 15 },
    { id: 5, title: "O Hobbit", genre: "Fantasia", copies: 12 },
    { id: 6, title: "A Moreninha", genre: "Romance", copies: 7 },
    { id: 7, title: "O Guarani", genre: "Romance", copies: 4 },

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
                  <TableHead>Título</TableHead>
                  <TableHead>Gênero</TableHead>
                  <TableHead>Exemp.</TableHead>
                  <TableHead className="text-center">Detalhes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.id.toString().padStart(2, '0')}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.genre}</TableCell>
                    <TableCell>{book.copies.toString().padStart(2, '0')}</TableCell>
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
