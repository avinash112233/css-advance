const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/flexFlow.html");

describe("CSS Module test46 #start_test", async () => {
    it("In the #row-reverse rule should add flex-flow property and set its value to row.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#row-reverse");
        expect(selectorCSS["flex-flow"]).to.be.equal('row-reverse wrap');
    });
    it("In the #column rule should add flex-flow property and set its value to column wrap.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#column");
        expect(selectorCSS["flex-flow"]).to.be.equal('column wrap');
    });

});
