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
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"

export function AppModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button><Plus/> Cadastrar</Button>
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
    )
}