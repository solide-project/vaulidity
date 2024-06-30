export interface ExplorerData {
    address: string,
    bytecodeId: string,
    timestamp: number,
    metadataId: string,
    chain: string,
    status: {
        onchain: boolean,
        bytecode: boolean
    },
    explorer: string,
    bytecode: string,
    language: string,
    compilerVersion: string,
    name?: string,
    ideURL?: string,
    abi?: string,
    settings: string,
}

export const emptyExplorerData: ExplorerData = {
    address: "",
    bytecodeId: "",
    timestamp: 0,
    metadataId: "",
    chain: "1",
    status: {
        onchain: false,
        bytecode: false
    },
    explorer: "",
    bytecode: "",
    language: "",
    compilerVersion: "",
    ideURL: "",
    abi: "",
    settings: "{}"
}