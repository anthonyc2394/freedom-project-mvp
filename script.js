setTempo(120);

// Intro
fitMedia(AK_UNDOG_OOHS_AHHS_5, 1, 1, 9)
fitMedia(AK_UNDOG_OOHS_AHHS_4, 2, 1, 9)
fitMedia(AK_UNDOG_PERC_CYMB_2, 3, 8, 9)
fitMedia(AK_UNDOG_PERC_HATS_4, 4, 1, 9)

// Main
fitMedia(AK_UNDOG_PIANO_3, 1, 9, 33)
fitMedia(AK_UNDOG_808_2, 2, 17, 25)
fitMedia(RD_RNB_PIANO_1, 3, 25, 33)
fitMedia(AK_UNDOG_PAD_2, 3, 9, 25)

fitMedia(AK_UNDOG_PIANO_1, 1, 33, 49)
fitMedia(AK_UNDOG_PERC_CYMB_2, 2, 48, 49)
fitMedia(AK_UNDOG_PERC_KICK_3, 3, 33, 49)
fitMedia(AK_UNDOG_OOHS_AHHS_2, 4, 33, 49)
fitMedia(AK_UNDOG_OOHS_AHHS_4, 4, 49, 65)

fitMedia(AK_UNDOG_PIANO_3, 1, 49, 73)
fitMedia(AK_UNDOG_808_2, 2, 57, 65)
fitMedia(RD_RNB_PIANO_1, 3, 65, 73)
fitMedia(AK_UNDOG_PAD_2, 3, 49, 65)

// Loops
for (var measure = 9; measure < 25; measure += 2) {
    fitMedia(AK_UNDOG_PERC_KICK_2, 4, measure, measure + 1)
}
for (var measure = 10; measure < 25; measure += 2) {
    fitMedia(AK_UNDOG_OOHS_AHHS_1, 4, measure, measure + 1);
}

// Ending
fitMedia(RD_RNB_PIANO_1, 3, 73, 77)
fitMedia(AK_UNDOG_PAD_2, 2, 73, 75)