const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/nestedFlex.html");

describe("CSS Module test47 #start_test", async () => {
    it("In the .main rule should add display property and set its value to flex.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".main");
        expect(selectorCSS["display"]).to.be.equal('flex');
    });
    it("In the .main rule should add align-atems property and set its value to center.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".main");
        expect(selectorCSS["align-items"]).to.be.equal('center');
    });
    it("In the .main rule should add justify-content property and set its value to space-around.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".main");
        expect(selectorCSS["justify-content"]).to.be.equal('space-around');
    });
    it("In the .container rule should add display property and set its value to flex.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container");
        expect(selectorCSS["display"]).to.be.equal('flex');
    });
    it("In the .container rule should add flex-direction property and set its value to column.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container");
        expect(selectorCSS["flex-direction"]).to.be.equal('column');
    });
    it("In the .container rule should add justify-content property and set its value to center.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container");
        expect(selectorCSS["justify-content"]).to.be.equal('center');
    });
    it("In the .container rule should add align-atems property and set its value to center.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container");
        expect(selectorCSS["align-items"]).to.be.equal('center');
    });
    it("In the .child rule should add display property and set its value to flex.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".child");
        expect(selectorCSS["display"]).to.be.equal('flex');
    });
    it("In the .child rule should add justify-content property and set its value to center.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".child");
        expect(selectorCSS["justify-content"]).to.be.equal('center');
    });
    it("In the .child rule should add align-atems property and set its value to center.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".child");
        expect(selectorCSS["align-items"]).to.be.equal('center');
    });
});
