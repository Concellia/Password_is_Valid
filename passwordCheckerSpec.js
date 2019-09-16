describe("Is password valid!!", function() {
  it("should be larger than 8 characters", function() {
    expect(function() {
      passWordChecker("Tiyi1234");
    }).toThrow(new Error("Password invalid please enter a valid password!!"));
  });
  it("password should not be null", function() {
    let passwordchecker = passWordChecker("Tiyise123");
    expect(passwordchecker).toBe(true);
  });
  it("password should have at least one uppercase letter", function() {
    expect(function() {
      passWordChecker("tiyi123");
    }).toThrow(new Error("Password invalid please enter a valid password!!"));
  });
  it("password should have at least one lowercase letter", function() {
    let passwordchecker = passWordChecker("Tiyise123");
    expect(passwordchecker).toBe(true);
  });
  it("password should have at least one number", function() {
    expect(function() {
      passWordChecker("Tiyiselani");
    }).toThrow(new Error("Password invalid please enter a valid password!!"));
  });
});
describe("Is password ok!!", function() {
  it("should not be null, have more than 8 characters and have a number", function() {
    let passwordok = passwordIsOk("123456789");
    expect(passwordok).toBe(true);
  });
  it("should not be null, have more than 8 characters and have lowercase", function() {
    let passwordok = passwordIsOk("aaaaaaaaa");
    expect(passwordok).toBe(true);
  });
  it("should not be null, have more than 8 characters and have uppercase", function() {
    let passwordok = passwordIsOk("aaaaAAAAA");
    expect(passwordok).toBe(true);
  });
  it("the password is never OK if  it has less than 9 characters and it is null", function() {
    let passwordok = passwordIsOk("Tiyi12");
    expect(passwordok).toBe(false);
  });
});
