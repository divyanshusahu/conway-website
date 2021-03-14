export async function getSoldCount(contract) {
    return await contract.methods["totalSupply"]().call();
}