const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/flexBasis.html");

describe("CSS Module test41 #start_test", async () => {
    it("In the .grow.side rule should add flex-basis property and set its value to 60px.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".grow.side");
        expect(selectorCSS["flex-basis"]).to.be.equal('60px');
    });
    
    it("In the .grow.side rule should add flex-grow property and set its value to 1.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".grow.side");
        expect(selectorCSS["flex-grow"]).to.be.equal('1');
    });
    
    it("In the .grow.center rule should add flex-grow property and set its value to 3.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".grow.center");
        expect(selectorCSS["flex-grow"]).to.be.equal('3');
    });
    
    
    it("In the .shrink.side rule should add flex-basis property and set its value to 2.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".shrink.side");
        expect(selectorCSS["flex-basis"]).to.be.equal('300px');
    });
    
    
    it("In the .shrink.side rule should add flex-shrink property and set its value to 3.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".shrink.side");
        expect(selectorCSS["flex-shrink"]).to.be.equal('3');
    });
    
    
    it("In the .shrink.center rule should add flex-shrink property and set its value to 2.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".shrink.center");
        expect(selectorCSS["flex-shrink"]).to.be.equal('2');
    });
    
    
    it("In the .shrink.center rule should add flex-basis property and set its value to 150px.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, ".shrink.center");
        expect(selectorCSS["flex-basis"]).to.be.equal('150px');
    });
});
