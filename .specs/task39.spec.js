const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/flexGrow.html");

describe("CSS Module test39 #start_test", async () => {
    it("In the .top.side and .top.center rule should add flex-grow property and set its value to 1.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSSSide = recursive_selectors_CSSRules(newDom, ".top.side");
        const selectorCSSCenter = recursive_selectors_CSSRules(newDom, ".top.center");
        expect(selectorCSSSide["flex-grow"]).to.be.equal("1").and;
        expect(selectorCSSCenter["flex-grow"]).to.be.equal("1");
    });
    it("In the .middle.center rule should add flex-grow property and set its value to 1.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".middle.center");
        expect(selectorCSS["flex-grow"]).to.be.equal("1");
    });


    it("In the .bottom.side and .bottom.center rule should add flex-grow property and set its value to 1 and 2 respectively.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSSSide = recursive_selectors_CSSRules(newDom, ".bottom.side");
        const selectorCSSCenter = recursive_selectors_CSSRules(newDom, ".bottom.center");
        expect(selectorCSSSide["flex-grow"]).to.be.equal("1");
        expect(selectorCSSCenter["flex-grow"]).to.be.equal("2");
    });
});
