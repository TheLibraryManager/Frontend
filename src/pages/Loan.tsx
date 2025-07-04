import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Button } from "@/components/ui/button";
import { Search, Trash } from "lucide-react";
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
      title: string | null;
    }
    dueDate: string;
  }

  const [dataLoan, setDataLoan] = useState<Loan[]>([]);

  const fetchLoans = async () => {
    await api.get('/loans')
      .then(response => {
        setDataLoan(response.data.reverse());
      })
      .catch(error => {
        console.error("Error fetching loans:", error);
      });
  }

  const deleteLoan = async (id: number) => {
    try {
      await api.delete(`/loans/${id}`);
      fetchLoans();
    } catch (error) {
      console.error("Error deleting loan:", error);
    }
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
                  <TableHead className="text-center"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataLoan.map((loan) => (
                  <TableRow key={loan.id}>
                    <TableCell>{loan.id.toString().padStart(2, '0')}</TableCell>
                    <TableCell>{loan.client? loan.client.name : <i>Cliente removido</i>}</TableCell>
                    <TableCell>{loan.book? loan.book.title : <i>Livro removido</i>}</TableCell>
                    <TableCell>
                      {new Date(loan.dueDate).toLocaleDateString("pt-BR")}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="outline" className="hover:text-red-600 cursor-pointer active:bg-gray-200"
                        onClick={() => {deleteLoan(loan.id)}}>
                        <Trash/>
                      </Button>
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
