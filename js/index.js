
function encodeEnglish() {
	let englishE = document.getElementById(ID_ENGLISH_BOX);
	let english = englishE.value;

	let morse = "";  // init

	// encode english words
	let englishWords = english.split(' ');
	let wordNum = 1;
	let numWords = englishWords.length;
	englishWords.forEach(englishWord => {
		let englishLetters = englishWord.split('');
		englishLetters.forEach(englishLetter => {
			let morseLetter = getMorseFromChar(englishLetter);
			morse += morseLetter + CHAR_SEP;
		});
		if (wordNum < numWords) {
			morse += WORD_SEP;
		}
		wordNum++;
	});

	let morseE = document.getElementById(ID_MORSE_BOX);
	morseE.value = morse;

	console.log("encoded '" + english + "' --> " + morse);
}

function decodeMorse() {
	let morseE = document.getElementById(ID_MORSE_BOX);
	let morse = morseE.value;

	let english = "";  // init
	let morseWords = morse.split(WORD_SEP);
	morseWords.forEach(morseWord => {
		let morseLetters = morseWord.split(CHAR_SEP);
		morseLetters.forEach(morseLetter => {
			char = getCharFromMorse(morseLetter);
			english += char;
		});
		english += " ";  // spaces bw words
	});

	let englishE = document.getElementById(ID_ENGLISH_BOX);
	englishE.value = english;

	console.log("decoded " + morse + " --> " + "'" + english + "'");
}
