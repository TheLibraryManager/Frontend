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

import { useState, type ChangeEvent, type FormEvent } from "react"
import api from "@/services/api";


export function BookModal({onAdd}: {onAdd: () => void}) {

    type BookForm = {
        title: string;
        author: string;
        genre: string;
        copies: number;
    }

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<BookForm>({
        title: '',
        author: '',
        genre: '',
        copies: 0
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try{
            await api.post('/books', form)
            setForm({
                title: '',
                author: '',
                genre: '',
                copies: 0
            })
            setOpen(false);
            onAdd();
        } catch (error) {
            console.error("Error adding book:", error);
        }
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
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
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Título
                        </Label>
                        <Input id="title" name="title" className="col-span-3" value={form.title} onChange={handleChange} required/>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="author" className="text-right">
                            Autor
                        </Label>
                        <Input id="author" name="author" className="col-span-3" value={form.author} onChange={handleChange} required/>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="genre" className="text-right">
                            Gênero
                        </Label>
                        <Input id="genre" name="genre" className="col-span-3" value={form.genre} onChange={handleChange} required/>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="copies" className="text-right">
                            Exemplares
                        </Label>
                        <Input id="copies" name="copies" type="number" className="col-span-3" value={form.copies} onChange={handleChange} required/>
                    </div>

                    <DialogFooter className="mt-4">
                        <Button type="submit">Adicionar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
            </Dialog>
    )
}