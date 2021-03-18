export async function getWalletAddress(dispatch) {
    let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    dispatch({ type: "SETWALLET", payload: accounts[0].toLowerCase() })
}