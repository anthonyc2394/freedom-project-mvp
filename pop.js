setTempo(120);

var newSlice = createAudioSlice(ANTHONY24_DESTINY_ELECTRO_LOOP, 1, 9)
var slice = createAudioSlice(ANTHONY24_DESTINY_ELECTRO_LOOP, 9, 17)

fitMedia(ANTHONY24_DESTINY_ELECTRO_LOOP, 1, 1, 17)
fitMedia(slice, 1, 17, 25)
fitMedia(newSlice, 1, 25, 33)
fitMedia(ANTHONY24_DESTINY_ELECTRO_LOOP, 1, 33, 49)
fitMedia(slice, 1, 49, 57)
fitMedia(MILKNSIZZ_BELLARINA_KICK, 2, 9, 25)
fitMedia(MILKNSIZZ_BELLARINA_KICK, 2, 41, 49)
fitMedia(HOUSE_ACOUSTIC_PIANO_006, 3, 25, 41)

// Volume Effects
setEffect(1, VOLUME, GAIN, 0, 1, 0, 25)
setEffect(1, VOLUME, GAIN, -2, 25, -2, 41)
setEffect(1, VOLUME, GAIN, 0, 41, 0, 49)
setEffect(1, VOLUME, GAIN, 0, 49, -20, 57)
setEffect(2, VOLUME, GAIN, -8, 1, -8, 25)
setEffect(2, VOLUME, GAIN, -8, 41, -8, 57)
setEffect(3, VOLUME, GAIN, 10, 25, 10, 41)