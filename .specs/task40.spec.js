const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/flexShrink.html");

describe("CSS Module test40 #start_test", async () => {
    it("In the .top.side rule should add flex-shrink property and set its value to 2.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSSSide = recursive_selectors_CSSRules(newDom, ".top.side");
        expect(selectorCSSSide["flex-shrink"]).to.be.equal('2');
    });
    it("In the .middle.side rule should add flex-shrink property and set its value to 1.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".middle.side");
        expect(selectorCSS["flex-shrink"]).to.be.equal('0');
    });
    
    
    it("In the .bottom.center rule should add flex-shrink property and set its value to 2.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSSCenter = recursive_selectors_CSSRules(newDom, ".bottom.center");
        expect(selectorCSSCenter["flex-shrink"]).to.be.equal('2');
    });
});
