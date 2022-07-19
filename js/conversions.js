

function getMorseFromChar(char) {
    switch(char.toLowerCase()) {
        // ALPHA
        case 'a':
            return DOT+DASH;
        case 'b':
            return DASH+DOT+DOT+DOT;
        case 'c':
            return DASH+DOT+DASH+DOT;
        case 'd':
            return DASH+DOT+DOT;
        case 'e':
            return DOT;
        case 'f':
            return DOT+DOT+DASH+DOT;
        case 'g':
            return DASH+DASH+DOT;
        case 'h':
            return DOT+DOT+DOT+DOT;
        case 'i':
            return DOT+DOT;
        case 'j':
            return DOT+DASH+DASH+DASH;
        case 'k':
            return DASH+DOT+DASH;
        case 'l':
            return DOT+DASH+DOT+DOT;
        case 'm':
            return DASH+DASH;
        case 'n':
            return DASH+DOT;
        case 'o':
            return DASH+DASH+DASH;
        case 'p':
            return DOT+DASH+DASH+DOT;
        case 'q':
            return DASH+DASH+DOT+DASH;
        case 'r':
            return DOT+DASH+DOT+DASH;
        case 's':
            return DOT+DOT+DOT;
        case 't':
            return DASH;
        case 'u':
            return DOT+DOT+DASH;
        case 'v':
            return DOT+DOT+DOT+DASH;
        case 'w':
            return DOT+DASH+DASH;
        case 'x':
            return DASH+DOT+DOT+DASH;
        case 'y':
            return DASH+DOT+DASH+DASH;
        case 'z':
            return DASH+DASH+DOT+DOT;
        
        // NUM
        case '0':
            return DASH+DASH+DASH+DASH+DASH;
        case '1':
            return DOT+DASH+DASH+DASH+DASH;
        case '2':
            return DOT+DOT+DASH+DASH+DASH;
        case '3':
            return DOT+DOT+DOT+DASH+DASH;
        case '4':
            return DOT+DOT+DOT+DOT+DASH;
        case '5':
            return DOT+DOT+DOT+DOT+DOT;
        case '6':
            return DASH+DOT+DOT+DOT+DOT;
        case '7':
            return DASH+DASH+DOT+DOT+DOT;
        case '8':
            return DASH+DASH+DASH+DOT+DOT;
        case '9':
            return DASH+DASH+DASH+DASH+DOT;
        
        // SYM
        case '.':
            return DOT+DASH+DOT+DASH+DOT+DASH;
        case ',':
            return DASH+DASH+DOT+DOT+DASH+DASH;
        case '!':
            return DASH+DOT+DASH+DOT+DASH+DASH;
        case '?':
            return DOT+DOT+DASH+DASH+DOT+DOT;
        case ':':
            return DASH+DASH+DASH+DOT+DOT+DOT;
        case "'":
            return DOT+DASH+DASH+DASH+DASH+DOT;
        case ';':
            return DASH+DOT+DASH+DOT+DASH+DOT;
        
        // CURR
        case '$':
            return DOT+DOT+DOT+DASH+DOT+DOT+DASH;
        
        // MATH
        case '+':
            return DOT+DASH+DOT+DASH+DOT;
        case '-':
            return DASH+DOT+DOT+DOT+DOT+DASH;
        case '/':
            return DASH+DOT+DOT+DASH+DOT;
        case '=':
            return DASH+DOT+DOT+DOT+DASH;
        
        // CATCHES
        case '':
            return '';
        
        // DEF
        default:
            return '#';
    }
}

function getCharFromMorse(morseLetter) {
    // ALPHA
    if (morseLetter == (DOT+DASH)) return 'a';
    if (morseLetter == (DASH+DOT+DOT+DOT)) return 'b';
    if (morseLetter == (DASH+DOT+DASH+DOT)) return 'c';
    if (morseLetter == (DASH+DOT+DOT)) return 'd';
    if (morseLetter == (DOT)) return 'e';
    if (morseLetter == (DOT+DOT+DASH+DOT)) return 'f';
    if (morseLetter == (DASH+DASH+DOT)) return 'g';
    if (morseLetter == (DOT+DOT+DOT+DOT)) return 'h';
    if (morseLetter == (DOT+DOT)) return 'i';
    if (morseLetter == (DOT+DASH+DASH+DASH)) return 'j';
    if (morseLetter == (DASH+DOT+DASH)) return 'k';
    if (morseLetter == (DOT+DASH+DOT+DOT)) return 'l';
    if (morseLetter == (DASH+DASH)) return 'm';
    if (morseLetter == (DASH+DOT)) return 'n';
    if (morseLetter == (DASH+DASH+DASH)) return 'o';
    if (morseLetter == (DOT+DASH+DASH+DOT)) return 'p';
    if (morseLetter == (DASH+DASH+DOT+DASH)) return 'q';
    if (morseLetter == (DOT+DASH+DOT+DASH)) return 'r';
    if (morseLetter == (DOT+DOT+DOT)) return 's';
    if (morseLetter == (DASH)) return 't';
    if (morseLetter == (DOT+DOT+DASH)) return 'u';
    if (morseLetter == (DOT+DOT+DOT+DASH)) return 'v';
    if (morseLetter == (DOT+DASH+DASH)) return 'w';
    if (morseLetter == (DASH+DOT+DOT+DASH)) return 'x';
    if (morseLetter == (DASH+DOT+DASH+DASH)) return 'y';
    if (morseLetter == (DASH+DASH+DOT+DOT)) return 'z';
    
    // NUM
    if (morseLetter == (DASH+DASH+DASH+DASH+DASH)) return '0';
    if (morseLetter == (DOT+DASH+DASH+DASH+DASH)) return '1';
    if (morseLetter == (DOT+DOT+DASH+DASH+DASH)) return '2';
    if (morseLetter == (DOT+DOT+DOT+DASH+DASH)) return '3';
    if (morseLetter == (DOT+DOT+DOT+DOT+DASH)) return '4';
    if (morseLetter == (DOT+DOT+DOT+DOT+DOT)) return '5';
    if (morseLetter == (DASH+DOT+DOT+DOT+DOT)) return '6';
    if (morseLetter == (DASH+DASH+DOT+DOT+DOT)) return '7';
    if (morseLetter == (DASH+DASH+DASH+DOT+DOT)) return '8';
    if (morseLetter == (DASH+DASH+DASH+DASH+DOT)) return '9';
    
    // SYM
    if (morseLetter == (DOT+DASH+DOT+DASH+DOT+DASH)) return '.';
    if (morseLetter == (DASH+DASH+DOT+DOT+DASH+DASH)) return ',';
    if (morseLetter == (DASH+DOT+DASH+DOT+DASH+DASH)) return '!';
    if (morseLetter == (DOT+DOT+DASH+DASH+DOT+DOT)) return '?';
    if (morseLetter == (DASH+DASH+DASH+DOT+DOT+DOT)) return ':';
    if (morseLetter == (DOT+DASH+DASH+DASH+DASH+DOT)) return "'";
    if (morseLetter == (DASH+DOT+DASH+DOT+DASH+DOT)) return ';';
    
    // CURR
    if (morseLetter == (DOT+DOT+DOT+DASH+DOT+DOT+DASH)) return '$';
    
    // MATH
    if (morseLetter == (DOT+DASH+DOT+DASH+DOT)) return '+';
    if (morseLetter == (DASH+DOT+DOT+DOT+DOT+DASH)) return '-';
    if (morseLetter == (DASH+DOT+DOT+DASH+DOT)) return '/';
    if (morseLetter == (DASH+DOT+DOT+DOT+DASH)) return '=';
    
    // CATCHES
    if (morseLetter == '') return '';
    // DEF
    else return '#';
}
