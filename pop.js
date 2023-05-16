setTempo(120);

// Variables
var newSlice = createAudioSlice(ANTHONY24_DESTINY_ELECTRO_LOOP, 1, 9)
var slice = createAudioSlice(ANTHONY24_DESTINY_ELECTRO_LOOP, 9, 17)
var sliceTwo = createAudioSlice(JWOLF_COTG_VOX_MISC_MALE_MELODY, 1, 2)

// Main Beat
fitMedia(ANTHONY24_DESTINY_ELECTRO_LOOP, 1, 1, 17)
fitMedia(newSlice, 1, 17, 25)
fitMedia(ANTHONY24_DESTINY_ELECTRO_LOOP, 1, 25, 41)
fitMedia(slice, 1, 41, 49)
fitMedia(MILKNSIZZ_BELLARINA_KICK, 2, 9, 17)

// Loops
for( var measure = 17; measure < 22; measure += 2) {
    fitMedia(sliceTwo, 3, measure, measure + 1)
    fitMedia(MILKNSIZZ_BELLARINA_KICK, 2, measure + 1, measure + 2)
}
fitMedia(MILKNSIZZ_BELLARINA_KICK, 2, 23, 25)
for( var measure = 25; measure < 30; measure += 2) {
    fitMedia(sliceTwo, 3, measure, measure + 1)
    fitMedia(MILKNSIZZ_BELLARINA_KICK, 2, measure + 1, measure + 2)
}
fitMedia(MILKNSIZZ_BELLARINA_KICK, 2, 31, 41)

// Volume Effects
setEffect(1, VOLUME, GAIN, -2, 1, -2, 17)
setEffect(1, VOLUME, GAIN, -4, 17, -4, 33)
setEffect(1, VOLUME, GAIN, -2, 33, -2, 41)
setEffect(1, VOLUME, GAIN, -2, 41, -20, 49)
setEffect(2, VOLUME, GAIN, -10, 1, -10, 17)
setEffect(2, VOLUME, GAIN, -12, 17, -12, 33)
setEffect(2, VOLUME, GAIN, -10, 33, -10, 49)
setEffect(3, VOLUME, GAIN, 10, 25, 10, 41)

// Pitch Effect
setEffect(3, PITCHSHIFT, PITCHSHIFT_SHIFT, 8)