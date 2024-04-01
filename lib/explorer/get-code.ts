
import { isAddress } from "web3-validator";
import { ChainID, getRPC, getTronRPC } from "../chains";
import Web3 from "web3";
import { isAddress as isTronAddress } from "tronweb/utils";
const { TronWeb } = require('tronweb');

export const getCode = async (address: string, chain: string) => {
    switch (chain) {
        case ChainID.TRON_MAINNET:
        case ChainID.TRON_NILE_TESTNET:
        case ChainID.TRON_SHASTA_TESTNET:
            return await tron_getCode(address, chain)
        default:
            return await eth_getCode(address, chain)
    }
}


/**
 * Converts a Tron address to an Ethereum address using Node TronWeb
 * @param address 
 * @param rpc 
 * @returns 
 */
const tronToEth = (address: string, chain: string): string => {
    const tronWeb = new TronWeb({
        fullHost: getTronRPC(chain),
    });
    let ethAddr: string = tronWeb.address.toHex(address);
    if (ethAddr && ethAddr.startsWith("41")) {
        ethAddr = ethAddr.replace("41", "0x")
    }

    return ethAddr
}

const tron_getCode = async (address: string, chain: string): Promise<string> => {
    if (!isTronAddress(address)) {
        return ""
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "jsonrpc": "2.0",
        "method": "eth_getCode",
        "params": [
            tronToEth(address, chain),
            "latest"
        ],
        "id": 64
    });

    const rpc = getTronRPC(chain)
    const response = await fetch(`${rpc}/jsonrpc`, {
        method: "POST",
        headers: myHeaders,
        body: raw,
    })

    const data = await response.json();
    return data.result;
}

const eth_getCode = async (address: string, chain: string): Promise<string> => {
    const rpc = getRPC(chain)
    if (!rpc) {
        return ""
    }

    if (!isAddress(address)) {
        return ""
    }

    const web3 = new Web3(
        new Web3.providers.HttpProvider(rpc));

    return await web3.eth.getCode(address)
}