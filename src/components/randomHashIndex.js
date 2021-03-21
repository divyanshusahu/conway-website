import pattern from './pattern2'
const crypto = require('crypto');
let hashIndex = []
for (let i = 0; i < 1000; i++) {
    let n = crypto.createHash('sha1').update(i.toString()).digest('hex').substr(0, 3)
    hashIndex.push(parseInt(n, 16))
}
function getColor(tokenId) {
    let hash = hashIndex[tokenId] % 16;
    console.log(hash)
    if (hash < 6) {
        return 0;
    } else if (hash < 11) {
        return 1;
    } else if (hash < 14) {
        return 2;
    }
    return 3;
}
function getXYNo(tokenId) {
    let hash = Math.floor((hashIndex[tokenId] % 256) / 16);
    if (hash < 5) {
        return 0;
    } else if (hash < 10) {
        return 1;
    } else if (hash < 14) {
        return 2;
    }
    return 2;
}
function getSpeed(tokenId) {
    let s = ["fast", "medium", "slow"];
    let ind = hashIndex[tokenId] % 3;
    return s[ind];
}
let patterns = Object.keys(pattern)
export function getTokenDetails(tokenId) {
    let color = getColor(tokenId);
    color = 3;
    let xNo = 30, yNo = 20;
    let divisions = [{ xd: 1, yd: 1 }, { xd: 1.5, yd: 1.5 }, { xd: 2, yd: 1 }, { xd: 2, yd: 2 }, { xd: .5, yd: .5 }, { xd: 2.5, yd: 2.5 }];
    let xyInd = getXYNo(tokenId);
    xyInd = 1;
    let details = {
        gridSize: `${xNo}x${yNo}`,
        xyNo: `${xNo * divisions[xyInd].xd}x${yNo * divisions[xyInd].yd}`,
        color,
        tokenId,
        // pattern: "Blonker",
        speed: getSpeed(tokenId),
        pattern: "Bi porttraitor"//patterns[tokenId]
    }
    return details;
}
export default hashIndex;