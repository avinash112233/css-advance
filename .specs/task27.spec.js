const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Grid-template-areas"
const pathToFile = path.join(__dirname, "../Grid-template-areas/overlay.html");


describe("CSS Module test27  #start_test", async() => {

    it("left selector should have require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".left")
        const selectorCSSArray = selectorCSS["grid-area"].split("/")
        expect(selectorCSSArray[0].trim()).to.be.equal("4")
        expect(selectorCSSArray[1].trim()).to.be.equal("1")
        expect(selectorCSSArray[2].trim()).to.be.equal("9")
        expect(selectorCSSArray[3].trim()).to.be.equal("5")
    })

    it("right selector should have require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".right")
        const selectorCSSArray = selectorCSS["grid-area"].split("/")
        expect(selectorCSSArray[0].trim()).to.be.equal("4")
        expect(selectorCSSArray[1].trim()).to.be.equal("5")
        expect(selectorCSSArray[2].trim()).to.be.equal("9")
        expect(selectorCSSArray[3].trim()).to.be.equal("7")
    })

    it(".overlap selector should have require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".overlap")
        const selectorCSSArray = selectorCSS["grid-area"].split("/")
        expect(selectorCSSArray[0].trim()).to.be.equal("6")
        expect(selectorCSSArray[1].trim()).to.be.equal("4")
        expect(selectorCSSArray[2].trim()).to.be.equal("span 2")
        expect(selectorCSSArray[3].trim()).to.be.equal("span 2")
    })

    it(".oberlap selector should have require z-index", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".overlap")
        expect(selectorCSS["z-index"]).to.be.equal("5")
    })

    it("footer selector should have require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "footer")
        const selectorCSSArray = selectorCSS["grid-area"].split("/")
        expect(selectorCSSArray[0].trim()).to.be.equal("9")
        expect(selectorCSSArray[1].trim()).to.be.equal("1")
        expect(selectorCSSArray[2].trim()).to.be.equal("13")
        expect(selectorCSSArray[3].trim()).to.be.equal("7")
    })

});
