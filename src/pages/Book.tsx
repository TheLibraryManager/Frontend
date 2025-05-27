import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  //DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


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
      <SidebarTrigger />
      <main className="w-full p-8 mt-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Gerenciador de Livros</h1>
          <Dialog>
            <DialogTrigger asChild>
                <Button><Plus/> Adicionar Livro</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>Adicionar Livro</DialogTitle>
                <DialogDescription>
                    Descrevas as informações para adicionar um novo livro na base de dados.
                </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                        Título
                    </Label>
                    <Input id="title" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="genre" className="text-right">
                        Gênero
                    </Label>
                    <Input id="genre" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="copies" className="text-right">
                        Exemplares
                    </Label>
                    <Input id="copies" className="col-span-3" />
                </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Adicionar</Button>
                </DialogFooter>
            </DialogContent>
            </Dialog>
        </div>
        <div className="rounded-md border overflow-hidden">
          <Table className="w-full">
            <TableCaption>Lista de livros</TableCaption>
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
  )
}
