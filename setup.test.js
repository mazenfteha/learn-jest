let travis = ['Rodeo','Astroworld','jackboys']



describe("travis albums", () => {

    beforeEach(() => {
        console.log("BEFROE EACH")
        travis = ['Rodeo','Astroworld','jackboys']
    })

    it("should add Utopia to end of array", () => {
        travis.push("Utopia");
        expect(travis[travis.length-1]).toBe("Utopia")
    })

    it("should add album to beginning of array", () => {
        travis.unshift("Days before rodeo")
        expect(travis[0]).toBe("Days before rodeo")
    })

    it("should have initial length of 3", () => {
        expect(travis.length).toBe(3)
    })
})