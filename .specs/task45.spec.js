const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/flexDirection.html");

describe("CSS Module test45 #start_test", async () => {
    it("In the #row rule should add flex-direction property and set its value to row.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#row");
        expect(selectorCSS["flex-direction"]).to.be.equal('row');
    });
    it("In the #row-reverse rule should add flex-direction property and set its value to row-reverse.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#row-reverse");
        expect(selectorCSS["flex-direction"]).to.be.equal('row-reverse');
    });

    it("In the #column rule should add flex-direction property and set its value to column.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#column");
        expect(selectorCSS["flex-direction"]).to.be.equal('column');
    });
    it("In the #column-reverse rule should add flex-direction property and set its value to column-reverse.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#column-reverse");
        expect(selectorCSS["flex-direction"]).to.be.equal('column-reverse');
    });

    it("In the .container rule should change height property to max-height and set its value to 600px.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container");
        expect(selectorCSS["height"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["max-height"]).to.be.equal("600px");
    })

    it("In the .container rule should add align-items property and set its value to center.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container");
        expect(selectorCSS["align-items"]).to.be.equal('center');
    });
    it("In the .container rule should add justify-content property and set its value to space-around.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container");
        expect(selectorCSS["justify-content"]).to.be.equal('space-around');
    });
    it("In the .box rule should add flex-grow property and set its value to 1.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".box");
        expect(selectorCSS["flex-grow"]).to.be.equal('1');
    });

});
