"use client"

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ChainID, getIconByChainId, getNetworkNameFromChainID } from "@/lib/chains"
import { useEffect, useState } from "react"
import { ScrollArea } from "../ui/scroll-area"
import Image from "next/image"
import { useParams } from "next/navigation"

interface ChainDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    handleOnChange?: (value: string) => void
}

export function ChainDropdown({ handleOnChange }: ChainDropdownProps) {
    const params = useParams()

    const [open, setOpen] = useState(false)

    let chain = params.chain as string
    if (!(Object.values(ChainID) as string[]).includes(chain)) {
        chain = ChainID.TRON_NILE_TESTNET
    }

    const [value, setValue] = useState<string>(chain)

    const chainList = Object.entries(ChainID).map(([_, value]) => ({
        value: value.toString(),
        label: getNetworkNameFromChainID(value),
    }))

    useEffect(() => {
        handleOnChange && handleOnChange(value)
    }, [value])

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className="flex items-center justify-center border rounded-lg p-1 px-2">
                    <Image
                        width={14}
                        height={14}
                        alt={getNetworkNameFromChainID(value)}
                        loader={() => getIconByChainId(value)}
                        src={getIconByChainId(value)}
                        className={cn(
                            buttonVariants({ size: "icon", variant: "outline" }),
                            "cursor-pointer border-none h-5 w-5 sm:h-8 sm:w-8"
                        )}
                    />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0 border-none">
                <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        <ScrollArea className="h-[200px] 1-full">
                            {(chainList).map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={getNetworkNameFromChainID(framework.value)}
                                    onSelect={(currentValue) => {
                                        setValue(framework.value)
                                        handleOnChange && handleOnChange(framework.value)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </ScrollArea>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
