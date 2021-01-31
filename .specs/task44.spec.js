const chai = require("chai");
const expect = chai.expect;
const path = require("path");
const utils = require("./util");
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const mid_directory_name = "Flexbox";
const pathToFile = path.join(__dirname, "../Flexbox/alignContent.html");

describe("CSS Module test44 #start_test", async () => {
    it("In the #flexstart rule should add align-content property and set its value to flex-start.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#flexstart");
        expect(selectorCSS["align-content"]).to.be.equal('flex-start');
    });

    it("In the #flexend rule should add align-content property and set its value to flex-end.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#flexend");
        expect(selectorCSS["align-content"]).to.be.equal('flex-end');
    });

    it("In the #center rule should add align-content property and set its value to center.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#center");
        expect(selectorCSS["align-content"]).to.be.equal('center');
    });


    it("In the .between rule should add justify-content property and set its value to space-between.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#between");
        expect(selectorCSS["align-content"]).to.be.equal('space-between');
    });

    it("In the #around rule should add align-content property and set its value to space-around.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSS = recursive_selectors_CSSRules(newDom, "#around");
        expect(selectorCSS["align-content"]).to.be.equal('space-around');
    });


    it("In the .left, .center and .right rule should change height property to min-height and set its value to 75px.", async function () {
        this.timeout(3500);
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);

        const selectorCSSLeft = recursive_selectors_CSSRules(newDom, ".left");
        const selectorCSSCenter = recursive_selectors_CSSRules(newDom, ".center");
        const selectorCSSRight = recursive_selectors_CSSRules(newDom, ".right");
        expect(selectorCSSLeft["height"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSSRight["height"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSSCenter["height"]).to.be.oneOf(["unset", undefined]);
        expect(selectorCSSLeft["min-height"]).to.be.equal("75px");
        expect(selectorCSSRight["min-height"]).to.be.equal("75px");
        expect(selectorCSSCenter["min-height"]).to.be.equal("75px");
    })
});
