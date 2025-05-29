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
import { LoanModal } from "@/components/modal/loan-modal";
import { Separator } from "@/components/ui/separator";
import {Header} from "@/components/header/header";
import api from "@/services/api";
import { useEffect, useState } from "react";


export function Loan() {

  type Loan = {
    id: number;
    client : {
      name: string;
    };
    book: {
      title: string;
    }
    dueDate: string;
  }

  const [dataBooks, setDataBooks] = useState<Loan[]>([]);

  function fetchLoans() {
    api.get('/loans')
      .then(response => {
        setDataBooks(response.data.reverse());
      })
      .catch(error => {
        console.error("Error fetching loans:", error);
      });
  }


  useEffect(() => {
    fetchLoans();
  }, []);


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
            <LoanModal onAdd={fetchLoans}/>
          </div>
          <div className="rounded-md border overflow-hidden">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead>ID</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Livro</TableHead>
                  <TableHead>Vencimento</TableHead>
                  <TableHead className="text-center">Detalhes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.id.toString().padStart(2, '0')}</TableCell>
                    <TableCell>{book.client.name}</TableCell>
                    <TableCell>{book.book.title}</TableCell>
                    <TableCell>
                      {new Date(book.dueDate).toLocaleDateString("pt-BR")}
                    </TableCell>
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
