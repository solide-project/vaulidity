export interface ExplorerData {
    address: string,
    bytecodeId: string,
    timestamp: number,
    metadataId: string,
    status: {
        onchain: boolean,
        bytecode: boolean
    },
    explorer: string,
    bytecode: string,
    language: string,
    compilerVersion: string,
    name?: string,
    ideURL?: string
}

export const emptyExplorerData: ExplorerData = {
    address: "",
    bytecodeId: "",
    timestamp: 0,
    metadataId: "",
    status: {
        onchain: false,
        bytecode: false
    },
    explorer: "",
    bytecode: "",
    language: "",
    compilerVersion: "",
    ideURL: "",
}