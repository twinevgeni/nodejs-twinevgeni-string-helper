"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringHelper = void 0;
const EMPTY_STRING = "";
const _StringHelper = (() => {
    function splitMulti(str, tokens) {
        let tempChar = tokens[0];
        for (let i = 1; i < tokens.length; i++) {
            str = str.split(tokens[i]).join(tempChar);
        }
        return str.split(tempChar);
    }
    function replaceAll(str, search, replace) {
        return str.split(search).join(replace);
    }
    function stringToBoolean(str) {
        if (!str)
            return false;
        switch (str.toLowerCase().trim()) {
            case "true":
            case "yes":
            case "1": return true;
            case "false":
            case "no":
            case "0": return false;
            default: return Boolean(str);
        }
    }
    function isNumeric(value) {
        return isNotEmpty(value) && !isNaN(Number(value));
    }
    function stringToNumber(str) {
        return Number(str);
    }
    function trimSymbol(str, symbol = ' ', start = true, end = true) {
        if (!str)
            return str;
        if (start) {
            let i;
            for (i = 0; i < str.length; i++) {
                if (str.charAt(i) !== symbol)
                    break;
            }
            str = str.substring(i);
        }
        if (end) {
            let i;
            for (i = str.length - 1; i >= 0; i--) {
                if (str.charAt(i) !== symbol)
                    break;
            }
            str = str.substring(0, i + 1);
        }
        return str;
    }
    function isEmpty(value) {
        return value === null || value === undefined || (typeof value === 'string' && value.length === 0);
    }
    function isNotEmpty(value) {
        return !isEmpty(value);
    }
    return {
        splitMulti,
        replaceAll,
        trimSymbol,
        isEmpty,
        isNotEmpty,
        isNumeric,
        stringToBoolean,
        stringToNumber,
        EMPTY: EMPTY_STRING,
    };
})();
exports.StringHelper = _StringHelper;
