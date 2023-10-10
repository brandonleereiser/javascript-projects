// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("check orginization" , function(){
  expect(launchcode.Orginization).toBe("nonprofit")
  });
  test("check the name of executive director", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("check percentage of cool employees", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("check programs offered", function(){
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test("should return launch", function(){
    expect(launchcode.launchOutput(2)).toBe("launch!")
  });
  test("should return code", function(){
    expect(launchcode.launchOutput(3)).toBe("Code!")
  });
  test("returns rocks!", function(){
    expect(launchcode.launchOutput(5)).toBe("Rocks!")
  });
  test("returns launchcode!", function(){
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!")
  });
  test("returns code rocks", function(){
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!")
  });
  test("return launch code", function(){
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks!")
  });
  test("return launchode rocks", function(){
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!")
  });
  test("returns rutabagas", function(){
    !expect(launchOutput.launchOutput(30)).notToBe("Rutabagas! That doesn't work.")
  });
});