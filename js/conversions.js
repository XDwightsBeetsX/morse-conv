

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
            return DOT+DOT;
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
        case ' ':
            return WORD_SEP;
        case '.':
            return DOT+DASH+DOT+DASH+DOT+DASH;
        case ',':
            return DASH+DASH+DOT+DOT+DASH+DASH;
        case '!':
            return DOT+DOT+DASH+DASH+DOT+DOT;
        case ':':
            return DASH+DASH+DASH+DOT+DOT+DOT;
        case "'":
            return DOT+DASH+DASH+DASH+DASH+DOT;
        case ';':
            return DASH+DOT+DASH+DOT+DASH+DOT;
        case '$':
            return DOT+DOT+DOT+DASH+DOT+DOT+DASH;
        
        // DEF
        default:
            return '#';
    }
}