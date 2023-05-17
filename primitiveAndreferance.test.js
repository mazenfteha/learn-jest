describe("testing reference equality", () => {
    const user = {
        name:"mazen"
    }
    user['age'] = 20;

    test("should return a user object with age as 20", () => {
        expect(user).toEqual({ //toEqual cause it's referance
            name:"mazen",
            age:20
        })
    })

    test("Should return a user with a name and age key", () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number)
            })
        )
    })
})