const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet =
  utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Savory";
const pathToFile = path.join(__dirname, "../Savory/savory.html");

describe("CSS Module test29 #start_test", async () => {
  it("In the .main rule should add the justify-content property and set its value to center.", async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
    const selectorCSS = recursive_selectors_CSSRules(newDom, "main")
    expect(selectorCSS["justify-content"]).to.be.equal("center")
  });
  
});
