const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet =  utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Savory";
const pathToFile = path.join(__dirname, "../Savory/savory.html");

describe("CSS Module test32 #start_test", async () => {
  it("In the .c element's rule should not have the justify-self property.", async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet( dom, mid_directory_name);
    const selectorCSS = recursive_selectors_CSSRules(newDom, ".c");
    expect(selectorCSS["justify-self"]).to.be.oneOf(["unset", undefined]);
  });

  it("In the .c element's rule should not have the align-self property.", async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
    const selectorCSS = recursive_selectors_CSSRules(newDom, ".a");
    expect(selectorCSS["align-self"]).to.be.oneOf(["unset", undefined]);
  });
});
