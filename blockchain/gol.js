import BigNumber from "bignumber.js";

export async function getTotalSold(contract) {
    return await contract.methods["totalSupply"]().call();
}
export function getGOLPrice(ind) {
    let price = (new BigNumber(10)).pow(18);
    if (ind < 125) {
        price.multipliedBy(6);
    } else if (ind < 225) {
        price.multipliedBy(12);
    } else if (ind < 300) {
        price.multipliedBy(18);
    } else if (ind < 350) {
        price.multipliedBy(25);
    } else if (ind < 375) {
        price.multipliedBy(35);
    } else if (ind < 385) {
        price.multipliedBy(50);
    } else {
        price.multipliedBy(100);
    }
    return price.dividedBy(10);
}
export async function mintGOL(state, no, referral) {
    let nextIndex = getTotalSold(state.gol)
    let totalPrice = getGOLPrice(nextIndex).multipliedBy(no);
    state.gol.methods["mintNFT"](no, referral).send({
        from: state.wallet,
        value: totalPrice
    }).on('transactionHash', function (hash) {
        alert(`Pushed transaction ${hash}`)
    }).on('confirmation', function (confirmationNumber, receipt) {
        if (confirmationNumber == 4) {
            alert('successfully minted, Refresh plz.')
        }
    }).on('error', function (error, receipt) {
        alert(error.message)
    });
}