

function getInput() {
    let inputE = document.getElementById(ID_INPUT_BOX);
    return inputE.value;
}


function getOutput(input) {
    output = "";
    l = input.length;
    for (let i = 0; i < l; i++) {
        m = getMorseFromChar(input.charAt(i));
        if (i != l-1) {
            output += m + CHAR_SEP;
        }
    }

    return output;
}


function convert() {
    console.log("converting...");

    let input = getInput();
    console.log("got input: '" + input + "'");

    let output = getOutput(input);
    console.log("got output: '" + output + "'");

    let outputE = document.getElementById(ID_OUTPUT_BOX);
    outputE.value = output;
}