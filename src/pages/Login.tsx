import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "@/assets/personBooks.svg";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <main className="h-screen flex w-full">
            <div className="bg-primary w-full h-full flex p-16 items-center justify-center">
                <img src={Image} alt="Imagem de livros" className="w-3/4"/>
            </div>
            <section className="flex items-center justify-center bg-background h-full max-w-xl w-full p-4">
                <Card className="w-full max-w-sm">
                    <CardHeader className="text-center mb-4">
                        <CardTitle className="text-xl font-medium tracking-tighter text-secondary"> 
                            Acesso ao Sistema
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="mx-4">
                        <div>
                            <Label htmlFor="email" className="p-2 text-secondary">Email</Label>
                            <Input id="email" placeholder="exemple@email.com" type="email"/>
                        </div>
                        <div className="mt-4 ">
                            <Label htmlFor="password" className="p-2 text-secondary">Senha</Label>
                            <Input id="password" placeholder="senha" type="password"/>
                        </div>
                        <Button className="mt-10 w-full" onClick={() => {window.location.href = "/home"}}>Entrar</Button>
                    </CardContent>
                    <Link to="/register">
                        <CardDescription className="ml-6 text-secondary">Cadastre-se</CardDescription>
                    </Link>
                </Card>
            </section>

        </main>
    )
}