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

  const [dataClients, setDataClients] = useState<Client[]>([]);

  const fetchClients = () => {
    api.get('/clients')
      .then(response => {
        setDataClients(response.data.reverse());
      })
      .catch(error => {
        console.error("Error fetching clients:", error);
      });
  }

  const deleteClient = async (id: number) => {
    try {
      await api.delete(`/clients/${id}`);
      fetchClients();
    } catch (error) {
      console.error("Error deleting client:", error);
    }
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
                  <TableHead className="text-center"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataClients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell>{client.id.toString().padStart(2, '0')}</TableCell>
                    <TableCell>{client.name}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.phone}</TableCell>
                    <TableCell className="text-center">
                      <Button variant="outline" className="hover:text-red-600 cursor-pointer active:bg-gray-200"
                        onClick={() => {deleteClient(client.id)}}>
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
