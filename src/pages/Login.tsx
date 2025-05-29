import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "@/assets/personBooks.svg";
//import { Link } from "react-router-dom";
import { useState } from "react";
import api from "@/services/api";
import { Eye, EyeOff } from "lucide-react";

export function Login() {

    type User = {
        email: string;
        password: string;
    }

    const [user, setUser] = useState<User>({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        setErrorMessage(null);
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user.email || !user.password) {
            setErrorMessage('Preencha todos os campos.');
            return;
        }

        try {
            const response = await api.post('/login', user);
            console.log(response.data)
            //window.localStorage.setItem('token', response.data.token)
            window.location.href = '/home'
        } catch (error) {
            setErrorMessage('Email ou senha inválidos.');
            console.error(error)
        }
    }


    return (
        <main className="h-screen flex w-full">
            <div className="bg-primary w-full h-full flex p-16 items-center justify-center">
                <img src={Image} alt="Imagem de livros" className="w-3/4"/>
            </div>
            <section className="flex items-center justify-center bg-background h-full max-w-xl w-full p-4">
                <Card className="w-full max-w-sm">
                    <CardHeader className="text-center mb-2">
                        <CardTitle className="text-xl font-medium tracking-tighter text-secondary"> 
                            Acesso ao Sistema
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="mx-4 mb-6">
                        <form onSubmit={handleLogin}>
                            <div>
                                <Label htmlFor="email" className="p-2 text-secondary">Email</Label>
                                <Input id="email" name="email"  placeholder="exemple@email.com" type="email" value={user.email} onChange={handleChange}/>
                            </div>
                            <div className="mt-4 ">
                                <Label htmlFor="password" className="p-2 text-secondary">Senha</Label>
                                <div className="relative w-full max-w-sm">
                                    <Input id="password" name="password" placeholder="senha" type={showPassword ? 'text' : 'password'} value={user.password} onChange={handleChange}/>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {errorMessage && (
                                <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
                            )}   

                            <Button className="mt-10 w-full" type="submit">Entrar</Button>
                        </form>
                    </CardContent>
                    
                    {/* <Link to="/register">
                        <CardDescription className="ml-6 text-secondary">Cadastre-se</CardDescription>
                    </Link> */}
                </Card>
            </section>

        </main>
    )
}