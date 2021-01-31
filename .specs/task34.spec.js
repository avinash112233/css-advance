const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Savory";
const pathToFile = path.join(__dirname, "../Savory/savory.html");

describe("CSS Module test34 #start_test", async () => {
  it("In the main rule should add grid-auto-flow property and set its value to column.", async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
    const selectorCSS = recursive_selectors_CSSRules(newDom, "main");
    expect(selectorCSS["grid-auto-flow"]).to.be.equal('column');
  });
});
