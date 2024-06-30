import { Input } from "@/components/ui/input"
import { ContractList } from "./contract-list"

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const HomePage = ({ }: HomePageProps) => {
    return <div className="my-4 w-full">
        <div className="flex items-center justify-center my-16">
            <div className="w-[80%] md:w-[60%]">
                <div>
                    <div className="my-8">
                        <div className="text-center font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold my-2">
                            Vaulidity
                        </div>
                        <div className="text-center leading-normal text-muted-foreground sm:leading-8">
                            Unified <b>Vaul</b>t  for So<b>lidity</b> Contracts
                        </div>
                    </div>
                    <Input placeholder="Search for a contract" />
                </div>
            </div>
        </div>
        <ContractList />
    </div>
}