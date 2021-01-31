const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/flex.html");

describe("CSS Module test42 #start_test", async () => {
    it("In the (#top .side) refract three properties in one line.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#top .side");
        expect(selectorCSS["flex-grow"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex-shrink"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex-basis"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex"]).to.be.equal("2 2 100px");

    });

    it("In the (#top .center) refract three properties in one line.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#top .center");
        expect(selectorCSS["flex-grow"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex-shrink"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex-basis"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex"]).to.be.equal("1 3 50px");
    });

    it("In the (#bottom .side) refract three properties in one line.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#bottom .side");
        expect(selectorCSS["flex-grow"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex-shrink"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex-basis"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex"]).to.be.equal("1 2 75px");
    });


    it("In the (#bottom .center) refract three properties in one line.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#bottom .center");
        expect(selectorCSS["flex-grow"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex-shrink"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex-basis"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSS["flex"]).to.be.equal("2 1 100px");
    });

});
