const assert = require('assert');
const stringHelper = require('../../src/helpers/string')

describe('StringHelperTest', function () {

    beforeEach(async function () {
    });

    afterEach(async function () {
    });

    /**
     * splitMultiData - test data provider
     * @returns {({result: [string], src: string, delimiters: [string, string]}|{result: [string, string, string], src: string, delimiters: [string, string]}|{result: [string, string, string], src: string, delimiters: [string]})[]}
     */
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

    /**
     * splitMultiTest
     * @param data
     */
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

    /**
     * start test suite
     */
    splitMultiTest();
});
