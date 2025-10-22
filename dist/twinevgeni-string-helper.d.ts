export declare const StringHelper: {
    splitMulti: (str: string, tokens: string[]) => string[];
    replaceAll: (str: string, search: string, replace: string) => string;
    trimSymbol: (str: string, symbol?: string, start?: boolean, end?: boolean) => string;
    isEmpty: (value: unknown) => boolean;
    isNotEmpty: (value: unknown) => boolean;
    isNumeric: (value: unknown) => boolean;
    stringToBoolean: (str: string | null | undefined) => boolean;
    stringToNumber: (str: string) => number;
    EMPTY: string;
};
