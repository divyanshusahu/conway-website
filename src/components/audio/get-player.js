import { now } from 'tone';
import { Scale } from 'tonal';
import getInstrument from './get-instrument';
import { release } from 'os';
const crypto = require('crypto');
const ONE_HUNDRED = 100;
const NOTE_TIME_OFFSET_S = 0.01;

const tonicPc = 'D';
// eslint-disable-next-line no-magic-numbers
const octaves = [2, 3, 4, 5, 6];
const notes = octaves.reduce(
    (allNotes, octave) => {
        return allNotes.concat(Scale.notes(`${tonicPc}${octave}`, 'major'))
    },
    []
);
let hashIndex = []
for (let i = 0; i < 1000; i++) {
    let n = crypto.createHash('sha1').update(i.toString()).digest('hex').substr(10)
    hashIndex.push(parseInt(n, 16) % notes.length)
}
console.log(hashIndex)
const getNoteAtHeight = activeCells => {
    return Array.from(activeCells).map((e) => {
        return notes[
            Math.min(
                notes.length - 1,
                hashIndex[e]
            )]
    }
    )
}

const getPlayer = () =>
    getInstrument().then(instrument => (activeCells, releaseTime) => {
        const notes = getNoteAtHeight(activeCells);
        console.log(notes)
        console.log(releaseTime)
        instrument.triggerAttackRelease(notes, releaseTime, now() + NOTE_TIME_OFFSET_S, .03);
    });

export default getPlayer;
