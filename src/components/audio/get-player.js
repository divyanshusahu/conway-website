import { now } from 'tone';
import { Scale } from 'tonal';
import getInstrument from './get-instrument';
import hashIndex from '../randomHashIndex';

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

console.log(hashIndex)
const getNoteAtHeight = activeCells => {
    console.log(activeCells)
    console.log(notes)
    return Array.from(activeCells).map((e) => {
        return notes[
            Math.min(
                notes.length - 1,
                hashIndex[e % 1000] % notes.length
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
