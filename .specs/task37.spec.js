const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/justifyContent.html");

describe("CSS Module test37 #start_test", async () => {
  it("In the #flexstart rule should add justify-content property and set its value to flex-start.", async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
    const selectorCSS = recursive_selectors_CSSRules(newDom, "#flexstart");
    expect(selectorCSS["justify-content"]).to.be.equal('flex-start');
  });
  it("In the #flexend rule should add justify-content property and set its value to flex-end.", async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
    const selectorCSS = recursive_selectors_CSSRules(newDom, "#flexend");
    expect(selectorCSS["justify-content"]).to.be.equal('flex-end');
  });
  it("In the #center rule should add justify-content property and set its value to center.", async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
    const selectorCSS = recursive_selectors_CSSRules(newDom, "#center");
    expect(selectorCSS["justify-content"]).to.be.equal('center');
  });
  it("In the #spacearound rule should add justify-content property and set its value to space-around.", async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
    const selectorCSS = recursive_selectors_CSSRules(newDom, "#spacearound");
    expect(selectorCSS["justify-content"]).to.be.equal('space-around');
  });
  it("In the #spacebetween rule should add justify-content property and set its value to space-between.", async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
    const selectorCSS = recursive_selectors_CSSRules(newDom, "#spacebetween");
    expect(selectorCSS["justify-content"]).to.be.equal('space-between');
  });
});
