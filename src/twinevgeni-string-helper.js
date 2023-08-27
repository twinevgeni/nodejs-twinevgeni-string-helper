const EMPTY_STRING = "";

module.exports = function () {
    function splitMulti(str, tokens) {
        let tempChar = tokens[0];
        for (let i = 1; i < tokens.length; i++) {
            str = str.split(tokens[i]).join(tempChar);
        }
        str = str.split(tempChar);
        return str;
    }

    function replaceAll(str, search, replace) {
        return str.split(search).join(replace);
    }

    function stringToBoolean(string){
        switch(string.toLowerCase().trim()){
            case "true": case "yes": case "1": return true;
            case "false": case "no": case "0": case null: return false;
            default: return Boolean(string);
        }
    }

    function isNumeric(num){
        return !isNaN(num)
    }

    function trimSymbol(str, symbol = ' ', start = true, end = true) {
        if (start) {
            let i;
            for (i = 0; i < str.length; i++) {
                let char = str.charAt(i);
                if (char !== symbol) {
                    break;
                }
            }

            str = str.substring(i);
        }

        if (end) {
            let i;
            for (i = (str.length - 1); i >= 0; i--) {
                let char = str.charAt(i);
                if (char !== symbol) {
                    break;
                }
            }

            str = str.substring(0, i+1);
        }

        return str;
    }
    return {
        splitMulti: splitMulti,
        replaceAll: replaceAll,
        stringToBoolean: stringToBoolean,
        isNumeric: isNumeric,
        trimSymbol: trimSymbol,
        EMPTY: EMPTY_STRING
    }
}();
