import { getTotalMinted } from './gol'
export async function getWalletAddress(dispatch) {
    let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    window.ethereum.on('accountsChanged', function (accounts) {
        dispatch({ type: "SETWALLET", payload: accounts[0] })
    })
    // Time to reload your interface with accounts[0]!
    dispatch({ type: "SETWALLET", payload: accounts[0].toLowerCase() })
}

export async function setTotalMinted(_interface, dispatch) {
    if (_interface) {
        let minted = await getTotalMinted(_interface.gol)
        dispatch({ type: "TOTALMINTED", payload: minted })
        return minted
    }
    return 0
}