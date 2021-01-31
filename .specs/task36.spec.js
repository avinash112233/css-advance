const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/inlineFlex.html");

describe("CSS Module test36 #start_test", async () => {
  it("In the .contaier rule should add display property and set its value to inline-flex.", async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
    const selectorCSS = recursive_selectors_CSSRules(newDom, ".container");
    expect(selectorCSS["display"]).to.be.equal('inline-flex');
  });
});
