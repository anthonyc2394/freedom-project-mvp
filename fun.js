setTempo(120);

// Variable
var sliceSynth = createAudioSlice(MILKNSIZZ_FLUTEY_BUJI_BELL, 1, 2)

// Main Beat
fitMedia(MILKNSIZZ_ADIOS_MELODY, 1, 1, 33);
fitMedia(MILKNSIZZ_ADIOS_ROBOTIC_AH_VOX, 2, 1, 5);
fitMedia(MILKNSIZZ_BASH_DEEP_KICK, 2, 5, 29);
fitMedia(MILKNSIZZ_ADIOS_ROBOTIC_AH_VOX, 2, 29, 33);
fitMedia(MILKNSIZZ_ADIOS_HEY_VOX, 3, 5, 29);

// Loop
for (var measure = 13; measure < 21; measure += 2) {
    fitMedia(sliceSynth, 4, measure, measure + 1)
}

// Volume
setEffect(1, VOLUME, GAIN, 0, 25, -50, 33);
setEffect(2, VOLUME, GAIN, 0, 1, 0, 13);
setEffect(2, VOLUME, GAIN, -8, 13, -8, 21);
setEffect(2, VOLUME, GAIN, 0, 21, 0, 25);
setEffect(2, VOLUME, GAIN, -10, 25, -50, 33);
setEffect(3, VOLUME, GAIN, 0, 1, 0, 13)
setEffect(3, VOLUME, GAIN, -10, 13, -10, 21)
setEffect(3, VOLUME, GAIN, 0, 21, 0, 25);
setEffect(3, VOLUME, GAIN, 0, 25, -25, 29);
setEffect(4, VOLUME, GAIN, 0, 13, 0, 21);

// Pitch
setEffect(4, PITCHSHIFT, PITCHSHIFT_SHIFT, -10)