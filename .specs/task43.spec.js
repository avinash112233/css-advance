const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/flexWrap.html");

describe("CSS Module test43 #start_test", async () => {
    it("In the #wrap rule should add flex-wrap property and set its value to wrap.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#wrap");
        expect(selectorCSS["flex-wrap"]).to.be.equal('wrap');
    });

    it("In the #nowrap rule should add flex-wrap property and set its value to nowrap.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#nowrap");
        expect(selectorCSS["flex-wrap"]).to.be.equal('nowrap');
    });

    it("In the #reverse rule should add flex-wrap property and set its value to wrap-reverse.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#reverse");
        expect(selectorCSS["flex-wrap"]).to.be.equal('wrap-reverse');
    });


    it("In the .container rule should add justify-content property and set its value to space-around.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container");
        expect(selectorCSS["justify-content"]).to.be.equal('space-around');
    });

});
