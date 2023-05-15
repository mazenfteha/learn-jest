const sum = require("./sum")

describe("example tests", () => {
    it("should add 1 + 2 to equal 3", ()=>{
        const result = sum(1, 2);
        expect(result).toBe(3)
    })

    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({})
    })
})

//Truthiness
describe("truthy or falsy", () => {
    it("null", ()=> {
        const n = null;
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy()
        expect(n).toBeNull()
        expect(n).not.toBeUndefined();
    })

    it("zero", () => {
        const z = 0;
        expect(z).not.toBeNull()
        expect(z).not.toBeUndefined()
        expect(z).not.toBeTruthy()
        expect(z).toBeFalsy()
    })
})

//numbers
describe("numbers", () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toEqual(4)
        expect(value).toBeGreaterThan(3)
        expect(value).toBeLessThan(5);
    })
})

//strings
describe("strings with regular expressions", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/)
    })
})

//arrays
describe("Metro Boomin", ()=>{
    const metroIntros = [
        'metroooo',
        'metro boomin wants some more nigga',
        'metro boomin make it boom',
        'if yong metro dosent trust you i will shot you',
    ]
    it('metroo introductions has metroooo on it', () => {
        expect(metroIntros).toContain('metroooo')
    })
})