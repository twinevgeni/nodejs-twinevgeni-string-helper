const EMPTY_STRING = "";

const _StringHelper = (() => {
    function splitMulti(str: string, tokens: string[]): string[] {
        let tempChar = tokens[0];
        for (let i = 1; i < tokens.length; i++) {
            str = str.split(tokens[i]).join(tempChar);
        }
        return str.split(tempChar);
    }

    function replaceAll(str: string, search: string, replace: string): string {
        return str.split(search).join(replace);
    }

    function stringToBoolean(str: string | null | undefined): boolean {
        if (!str) return false;
        switch(str.toLowerCase().trim()) {
            case "true": case "yes": case "1": return true;
            case "false": case "no": case "0": return false;
            default: return Boolean(str);
        }
    }

    function isNumeric(value: unknown): boolean {
        return isNotEmpty(value) && !isNaN(Number(value));
    }

    function stringToNumber(str: string): number {
        return Number(str);
    }

    function trimSymbol(str: string, symbol = ' ', start = true, end = true): string {
        if (!str) return str;
        if (start) {
            let i;
            for (i = 0; i < str.length; i++) {
                if (str.charAt(i) !== symbol) break;
            }
            str = str.substring(i);
        }
        if (end) {
            let i;
            for (i = str.length - 1; i >= 0; i--) {
                if (str.charAt(i) !== symbol) break;
            }
            str = str.substring(0, i + 1);
        }
        return str;
    }

    function isEmpty(value: unknown): boolean {
        return value === null || value === undefined || (typeof value === 'string' && value.length === 0);
    }

    function isNotEmpty(value: unknown): boolean {
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

export const StringHelper = _StringHelper;
