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
import { BookModal } from "@/components/modal/book-modal";
import { Separator } from "@/components/ui/separator";
import {Header} from "@/components/header/header";
import { useEffect, useState } from "react";
import api from "@/services/api";


export function Book() {

  type Book = {
    id: number;
    title: string;
    author: string;
    genre: string;
    copies: number;
  }

  const [dataBooks, setDataBooks] = useState<Book[]>([]);


  const fetchBooks = async () => {
    api.get('/books')
      .then(response => {
        setDataBooks(response.data.reverse());
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });
  }

  const deleteBook = async (id: number) => {
    try {
      await api.delete(`/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  
  useEffect(() => {
    fetchBooks();
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
            <BookModal onAdd={fetchBooks}/>
          </div>

          <div className="rounded-md border overflow-hidden">
            <Table className="w-full">

              <TableHeader>
                <TableRow className="bg-blue-50">
                  <TableHead>ID</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Autor</TableHead>
                  <TableHead>Gênero</TableHead>
                  <TableHead>Exemp.</TableHead>
                  <TableHead className="text-center"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataBooks.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.id.toString().padStart(2, '0')}</TableCell>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.genre}</TableCell>
                    <TableCell>{book.copies.toString().padStart(2, '0')}</TableCell>
                    <TableCell className="text-center">
                      <Button variant="outline" className="hover:text-red-600 cursor-pointer active:bg-gray-200"
                        onClick={() => { deleteBook(book.id) }}>
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
