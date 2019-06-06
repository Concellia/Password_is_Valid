describe("Is password valid!!", function(){
    it("should be larger than 8 characters", function(){
        let passwordchecker =passWordChecker("Tiyise")
        expect(passwordchecker).toBe("Password invalid please enter a valid password!!");
    })
    it("password should not be null", function(){
        let passwordchecker =passWordChecker("Tiyise123")
        expect(passwordchecker).toBe(true);
    })
    it("password should have at least one uppercase letter", function(){
        let passwordchecker =passWordChecker("tiyise123")
        expect(passwordchecker).toBe("Password invalid please enter a valid password!!");
    })
    it("password should have at least one lowercase letter", function(){
    let passwordchecker =passWordChecker("Tiyise123")
    expect(passwordchecker).toBe(true);
    })
    it("password should have at least one number", function(){
    let passwordchecker =passWordChecker("Tiyiselani")
    expect(passwordchecker).toBe("Password invalid please enter a valid password!!");
    })
});
describe("Is password ok!!", function(){
    it("should not be null, have more than 8 characters and have a number", function(){
    let passwordok = passwordIsOk("123456789")
    expect(passwordok).toBe(true);
    })
    it("should not be null, have more than 8 characters and have lowercase", function(){
    let passwordok = passwordIsOk("aaaaaaaaa")
    expect(passwordok).toBe(true);
    })
    it("should not be null, have more than 8 characters and have uppercase", function(){
    let passwordok = passwordIsOk("aaaaAAAAA")
    expect(passwordok).toBe(true);
    })
    it("the password is never OK if  it has less than 9 characters and it is null", function(){
    let passwordok = passwordIsOk("Tiyi12") 
    expect(passwordok).toBe(false);
    })
})