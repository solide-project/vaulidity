import { SolidityDatabaseRegistry } from "../registry/tron-contract";

export const findMetadata = async (hash: string): Promise<any> => {
    const registry = new SolidityDatabaseRegistry({});
    await registry.load();
    return registry.find(hash);
}