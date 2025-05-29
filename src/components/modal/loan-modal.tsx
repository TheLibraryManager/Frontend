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
import { useState } from "react"
import api from "@/services/api"

export function LoanModal({onAdd}: {onAdd: () => void}) {

    type LoanForm = {
        client_id: number;
        book_id: number;
        loan_date: string;
        due_date: string;
    }

    const [open, setOpen] = useState(false);
    const [form, setForm] = useState<LoanForm>({
        client_id: 0,
        book_id: 0,
        loan_date: '',
        due_date: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try{
            await api.post('/loans', form)
            setForm({
                client_id: 0,
                book_id: 0,
                loan_date: '',
                due_date: ''
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
                <DialogTitle>Cadastrar Empréstimo</DialogTitle>
                <DialogDescription>
                    Descrevas as informações para cadastrar um novo emprestimo na base de dados.
                </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="client_id" className="text-right">
                            Cliente
                        </Label>
                        <Input id="client_id" name="client_id" className="col-span-3" value={form.client_id} onChange={handleChange} required/>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="book_id" className="text-right">
                            Livro
                        </Label>
                        <Input id="book_id" name="book_id" className="col-span-3" value={form.book_id} onChange={handleChange} required/>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="loan_date" className="text-right">
                            Data
                        </Label>
                        <Input type="date" id="loan_date" name="loan_date" className="col-span-3" value={form.loan_date} onChange={handleChange} required/>
                        
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="due_date" className="text-right">
                            Vencimento
                        </Label>
                        <Input type="date" id="due_date" name="due_date" className="col-span-3" value={form.due_date} onChange={handleChange} required/>
                    </div>

                    <DialogFooter>
                        <Button type="submit">Adicionar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
            </Dialog>
    )
}