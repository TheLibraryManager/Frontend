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

export function ClientModal({onAdd}: {onAdd: () => void}) {

    type ClientForm = {
        name: string;
        email: string;
        phone: string;
        address: string;
        cpf: string;
    }

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<ClientForm>({
        name: '',
        email: '',
        phone: '',
        address: '',
        cpf: ''
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
            await api.post('/clients', form)
            setForm({
                name: '',
                email: '',
                phone: '',
                address: '',
                cpf: ''
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
                <DialogTitle>Cadastrar Cliente</DialogTitle>
                <DialogDescription>
                    Descrevas as informações para cadastrar um novo cliente na base de dados.
                </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Nome
                        </Label>
                        <Input id="name" name="name" className="col-span-3" value={form.name} onChange={handleChange} required/>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input id="email" name="email" className="col-span-3" value={form.email} onChange={handleChange} required/>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                            Telefone
                        </Label>
                        <Input id="phone" name="phone" className="col-span-3" value={form.phone} onChange={handleChange} required/>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="address" className="text-right">
                            Endereço
                        </Label>
                        <Input id="address" name="address" className="col-span-3" value={form.address} onChange={handleChange} required/>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="cpf" className="text-right">
                            CPF
                        </Label>
                        <Input id="cpf" name="cpf" className="col-span-3" value={form.cpf} onChange={handleChange} required/>
                    </div>

                    <DialogFooter className="mt-4">
                        <Button type="submit">Adicionar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
            </Dialog>
    )
}