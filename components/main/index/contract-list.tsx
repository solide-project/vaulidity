"use client"

import { ChainID } from "@/lib/chains"
import { ContractCard } from "./contract-card"

interface ContractListProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const ContractList = ({ }: ContractListProps) => {
    return <div className="container">
        <div className="grid grid-cols-12 gap-4">
            {items.map((item, index: number) => {
                return <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                    <ContractCard item={item} />
                </div>
            })}
        </div>
    </div>
}

const items = [
    // {
    //     chain: ChainID.TRON_NILE_TESTNET,
    //     address: "TE43ModJ1frz3T9uv4bfaARGsTETuPzFnn"
    // },
    {
        chain: ChainID.TRON_NILE_TESTNET,
        address: "TVPaonF8QAWHAi59vcz3a93mQdNSATjnLP",
        name: "SolidityDatabaseRegistry"
    },
    {
        chain: ChainID.ETHEREUM_MAINNET,
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        name: "TetherToken"
    },
    {
        chain: ChainID.BASE_SEPOLIA,
        address: "0x9Ad37425A145d169bcAe4Abdcde474285522ca22",
        name: "Dice"
    },
    {
        chain: ChainID.POLYGON_MAINNET,
        address: "0x11227e54f19934164a81d5add1ce5825d46b2271",
        name: "UNSRegistry"
    },
    {
        chain: ChainID.ETHEREUM_HOLESKY,
        address: "0x18bF2989913ac0EadB8113C265bE089A883cF74a",
        name: "VotingERC721"
    }
]
