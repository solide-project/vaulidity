import btfs from "@/lib/explorer/btfs";
import { ChainID, getAPIKey, getContractExplorer } from "@/lib/chains";
import { findMetadata } from "@/lib/explorer/find-metadata";
import { getCode } from "@/lib/explorer/get-code";
import { ExplorerData, emptyExplorerData } from "@/lib/explorer/interface";
import { utils } from "web3";
import { ExplorerDashboard } from "@/components/main/explorer";
import { compiler } from "@/lib/helper/parser";
import { ExplorerNotFound } from "@/components/main/explorer-not-found";
import { metadataLib } from "@/lib/solidity";
import { getSource } from "web3-plugin-contracts";

export default async function Home({
    params,
}: {
    params: { chain: string; contract: string };
}) {
    const chain = params.chain

    if (!(Object.values(ChainID) as string[]).includes(chain)) {
        console.log("Chain not supported", chain)
        return <ExplorerNotFound message="Chain not supported" />
    }

    const address = params.contract

    const bytecode = await getCode(address, chain)
    if (!bytecode || bytecode === "0x") {
        console.log("Contract not found on chain", bytecode)
        return <ExplorerNotFound message="Contract not found on chain" />
    }

    const hash = utils.keccak256(bytecode.slice(2))

    // ExplorerDashboard data
    let metadata: any = {}
    let explorerData: ExplorerData = emptyExplorerData
    explorerData.address = address
    explorerData.explorer = getContractExplorer(chain, address)
    explorerData.bytecode = bytecode
    explorerData.bytecodeId = hash

    const data = await findMetadata(hash)
    if (data.id) {
        metadata = await btfs(data.id)

        explorerData.metadataId = data.id
        explorerData.timestamp = data.timestamp.toString()
        explorerData.status.bytecode = true
        explorerData.language = metadataLib.language(metadata) || "Solidity"
        explorerData.compilerVersion = metadataLib.compilerVersion(metadata) || "Unknown"
        explorerData.name = metadataLib.contractName(metadata)
    }

    const sources = await getSource(address, { chainId: chain, apiKey: getAPIKey(chain) })
    // This means contract is verified
    if (typeof sources.result !== "string" && sources.result[0].SourceCode) {
        const source = sources.result[0];

        const input = compiler(source.SourceCode)
        if (input) {
            metadata = input
        } else {
            // Assume this is single file contract
            metadata = {
                sources: {
                    [`${source.ContractName}.sol`]: {
                        content: source.SourceCode
                    }
                }
            }
        }

        explorerData.language = "Solidity"
        explorerData.compilerVersion = source.CompilerVersion
        explorerData.status.onchain = true
        explorerData.name = source.ContractName
    }

    explorerData.ideURL = `https://solide0x.tech/address/${chain}/${address}`

    return <ExplorerDashboard data={explorerData} metadata={metadata} />
}
