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
import { ClientModal } from "@/components/modal/client-modal";
import { Separator } from "@/components/ui/separator";
import {Header} from "@/components/header/header";
import { useEffect, useState } from "react";
import api from "@/services/api";


export function Client() {

  type Client = {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
  }

  const [dataBooks, setDataBooks] = useState<Client[]>([]);

  function fetchClients() {
    api.get('/clients')
      .then(response => {
        setDataBooks(response.data.reverse());
      })
      .catch(error => {
        console.error("Error fetching clients:", error);
      });
  }


  useEffect(() => {
    fetchClients();
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
            <ClientModal onAdd={fetchClients}/>
          </div>
          <div className="rounded-md border overflow-hidden">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead>ID</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead className="text-center">Detalhes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.id.toString().padStart(2, '0')}</TableCell>
                    <TableCell>{book.name}</TableCell>
                    <TableCell>{book.email}</TableCell>
                    <TableCell>{book.phone}</TableCell>
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
