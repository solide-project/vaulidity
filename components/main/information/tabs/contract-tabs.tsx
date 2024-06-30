import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ExplorerData } from "@/lib/explorer/interface"
import { BytecodeTab } from "./bytecode-tab"
import { AbiTab } from "./abi-tab"
import { SourceTab } from "./source-tab"
import { SettingsTab } from "./settings-tab"

interface ContractTabsProps extends React.HTMLAttributes<HTMLDivElement> {
    data: ExplorerData
}

export const ContractTabs = ({ data }: ContractTabsProps) => {
    return <div className="flex justify-between my-8">
        <Tabs defaultValue="source" className="w-full">
            <TabsList>
                <TabsTrigger value="source">Source</TabsTrigger>
                <TabsTrigger value="settings">Compiler Settings</TabsTrigger>
                <TabsTrigger value="abi">ABI</TabsTrigger>
                <TabsTrigger value="bytecode">Bytecode</TabsTrigger>
            </TabsList>
            <TabsContent value="source"><SourceTab /></TabsContent>
            <TabsContent value="settings"><SettingsTab data={data} /></TabsContent>
            <TabsContent value="abi"><AbiTab data={data} /></TabsContent>
            <TabsContent value="bytecode"><BytecodeTab data={data} /></TabsContent>
        </Tabs>
    </div>
}