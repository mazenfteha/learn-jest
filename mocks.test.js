const foreEach = (items, callback) =>{
    for(let i =0; i < items.length; i++){
        callback(items[i])
    }
}

it("mock callback", ()=> {
    const mockCalledback = jest.fn(x => 42 + x);

    foreEach([0,1], mockCalledback);

    expect(mockCalledback.mock.calls.length).toBe(2)

    expect(mockCalledback.mock.calls[0][0]).toBe(0)

    expect(mockCalledback.mock.calls[1][0]).toBe(1)

    expect(mockCalledback.mock.results[0].value).toBe(42)

    expect(mockCalledback.mock.results[1].value).toBe(43)
})

it("mock return", () => {
    const mock = jest.fn();

    mock.mockReturnValueOnce(true).mockReturnValueOnce(false)

    const result = mock();
    const result2 = mock();


    expect(result).toBe(true)
    expect(result2).toBe(false)

})