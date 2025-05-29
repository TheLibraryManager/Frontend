import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Card } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Header } from "@/components/header/header";
import { Separator } from "@/components/ui/separator";

import { useEffect, useState } from "react";
import api from "@/services/api";

export function Home() {

  const [loan, setLoan] = useState(0);
  const [books, setBooks] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    api.get('/loans')
      .then(response => {
        setLoan(response.data.length);
      })
      .catch(error => {
        console.error("Error fetching loans:", error);
      });

    api.get('/books')
      .then(response => {
        setBooks(response.data.length);
      })
      .catch(error => {
        console.error("Error fetching books:", error);
      });

    api.get('/clients')
      .then(response => {
        setClients(response.data.length);
      })
      .catch(error => {
        console.error("Error fetching clients:", error);
      });
  }, []);

  const chartData = [
  { month: "January", loan: 186 },
  { month: "February", loan: 305 },
  { month: "March", loan: 237 },
  { month: "April", loan: 73 },
  { month: "May", loan: 209 },
  { month: "June", loan: 214 },
  ]

  const chartConfig = {
  loan: {
    label: "Emprestimos",
    color: "#31689C;",
  },
} satisfies ChartConfig

    return (
        <div className="flex h-screen w-full">

          <AppSidebar/>

          <div className="w-full flex flex-col">

            <Header/>

            <Separator/>

            <main className="w-full p-8 flex flex-col gap-8">

              <div className="flex items-center justify-around gap-8">

                <div>
                  <p className="text-secondary p-2 text-sm">Total emprestimos</p>
                  <Card className="w-36 lg:w-68 shadow-md">
                    <p className="text-6xl font-medium text-primary mt-8 ml-4">{loan}</p>
                  </Card>
                </div>

                <div>
                  <p className="text-secondary p-2 text-sm">Livros disponíveis</p>
                  <Card className="w-36 lg:w-68 shadow-md">
                    <p className="text-6xl font-medium text-primary mt-8 ml-4">{books}</p>
                  </Card>
                </div>

                <div>
                  <p className="text-secondary p-2 text-sm">Total clientes</p>
                  <Card className="w-36 lg:w-68 shadow-md">
                    <p className="text-6xl font-medium text-primary mt-8 ml-4">{clients}</p>
                  </Card>
                </div>

              </div>

              <div className="flex justify-around flex-col gap-10 lg:flex-row">

                <div>
                  <p className="text-secondary p-2 text-sm">Emprestimos Mês</p>
                  <Card className="w-lg lg:w-2xl shadow-md p-10">
                    <ChartContainer config={chartConfig} className="h-64">
                      <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          tickMargin={10}
                          axisLine={false}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="loan" fill="var(--color-loan)" radius={8} />
                      </BarChart>
                    </ChartContainer>
                  </Card>
                </div>

                <div>
                  <p className="text-secondary p-2 text-sm">Clientes frequentes</p>
                  <Card className="w-36 lg:w-68 lg:h-84 shadow-md">
                    <div className="border-b-2 border-gray mt-4">
                      
                    </div>
                    <div className="border-b-2 border-gray mt-4">
                      
                    </div>
                    <div className="border-b-2 border-gray mt-4">
                      
                    </div>
                    <div className="border-b-2 border-gray mt-4">
                      
                    </div>
                    <div className="border-b-2 border-gray mt-4">
                      
                    </div>
                    
                  </Card>
                </div>
              </div>
              
            </main>
          </div>
        </div>
    )
}