const assert = require('assert');
const stringHelper = require('../src/twinevgeni-string-helper')

describe('StringHelperTest', function () {

    beforeEach(async function () {
    });

    afterEach(async function () {
    });

    function splitMultiData() {
        return [
            {
                src: "",
                delimiters: ["a", "b"],
                result: [""]
            },
            {
                src: "hello,mr.key",
                delimiters: [",", "."],
                result: ["hello", "mr", "key"]
            },
            {
                src: "hello-mr-key",
                delimiters: ["-"],
                result: ["hello", "mr", "key"]
            }
        ];
    }

    function splitMultiTest(data = splitMultiData()) {
        for (let i = 0; i < data.length; i++) {
            const dataRow = data[i];
            const testName = `splitMulti | src: ${dataRow.src} | delimiters: ${dataRow.delimiters.join(" ")}`;
            it(testName, function () {
                const resultActual = stringHelper.splitMulti(dataRow.src, dataRow.delimiters);
                assert.strictEqual(resultActual.length, dataRow.result.length);
                for (let rowIndex = 0; rowIndex < resultActual.length; rowIndex++) {
                    const resultRow = dataRow.result[rowIndex];
                    const resultRowAction = resultActual[rowIndex];
                    assert.strictEqual(resultRowAction, resultRow);
                }
            });
        }
    }

    splitMultiTest();

    function replaceAllTestData() {
        return [
            {
                src: "a,b,c",
                search: "a",
                replace: "a1",
                expected: "a1,b,c"

            },
            {
                src: "a,a,a,b",
                search: "a",
                replace: "a2",
                expected: "a2,a2,a2,b"
            }
        ]
    }

    function replaceAllTest(data = replaceAllTestData()) {
        for (const dataRow of data) {
            const testName = `replaceAllTest | src: ${dataRow.src} | search: ${dataRow.search} | replace: ${dataRow.replace}`;
            it(testName, function () {
                const resultActual = stringHelper.replaceAll(dataRow.src, dataRow.search, dataRow.replace);
                assert.strictEqual(resultActual, dataRow.expected);
            });
        }
    }

    replaceAllTest();

    function trimSymbolTestData() {
        return [
            {
                src: "  text   ",
                symbol: " ",
                start: true,
                end: true,
                expected: "text"
            },
            {
                src: "  text   ",
                symbol: " ",
                start: false,
                end: true,
                expected: "  text"
            },
            {
                src: "  text   ",
                symbol: " ",
                start: true,
                end: false,
                expected: "text   "
            },
            {
                src: "  text   ",
                symbol: " ",
                start: false,
                end: false,
                expected: "  text   "
            },
        ]
    }

    function trimSymbolTest(data = trimSymbolTestData()) {
        for (const dataRow of data) {
            const testName = `trimSymbolTest | src: ${dataRow.src} | symbol: ${dataRow.symbol} | start: ${dataRow.start} | end: ${dataRow.end}`;
            it(testName, function () {
                const resultActual = stringHelper.trimSymbol(dataRow.src, dataRow.symbol, dataRow.start, dataRow.end);
                assert.strictEqual(resultActual, dataRow.expected);
            });
        }
    }

    trimSymbolTest();

    it('isEmptyTest', function () {
        assert.strictEqual(stringHelper.isEmpty(null), true);
        assert.strictEqual(stringHelper.isEmpty(), true);
        assert.strictEqual(stringHelper.isEmpty(undefined), true);
        assert.strictEqual(stringHelper.isEmpty(""), true);
        assert.strictEqual(stringHelper.isEmpty("abc"), false);
    });

    it('isNotEmptyTest', function() {
        assert.strictEqual(stringHelper.isNotEmpty(null), false);
        assert.strictEqual(stringHelper.isNotEmpty(), false);
        assert.strictEqual(stringHelper.isNotEmpty(undefined), false);
        assert.strictEqual(stringHelper.isNotEmpty(""), false);
        assert.strictEqual(stringHelper.isNotEmpty("abc"), true);
        assert.strictEqual(stringHelper.isNotEmpty("abc fdgf fdfd"), true);
        assert.strictEqual(stringHelper.isNotEmpty("null"), true);
    })

    it('isNumericTest', function() {
        assert.strictEqual(stringHelper.isNumeric("123"), true);
        assert.strictEqual(stringHelper.isNumeric("150001234"), true);
        assert.strictEqual(stringHelper.isNumeric("123A"), false);
        assert.strictEqual(stringHelper.isNumeric(null), false);
        assert.strictEqual(stringHelper.isNumeric(""), false);
        assert.strictEqual(stringHelper.isNumeric(undefined), false);
    })

    it('EMPTY_Test', function() {
        assert.strictEqual(stringHelper.EMPTY, "");
    })

});
