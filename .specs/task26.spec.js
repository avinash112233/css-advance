const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Grid-template-areas"
const pathToFile = path.join(__dirname, "../Grid-template-areas/gridArea.html");


describe("CSS Module test26  #start_test", async() => {

    it("should have grid-template-areas property with all require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container")
        const grid_templates = selectorCSS["grid-template-areas"].split("\n")
        expect(grid_templates[0]).to.be.include("header header")
        expect(grid_templates[1]).to.be.include("nav nav")
        expect(grid_templates[2]).to.be.include("left right")
        expect(grid_templates[3]).to.be.include("footer footer")
    })

    it("header selector should have require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "header")
        expect(selectorCSS["grid-area"]).to.be.equal("header")
    })

    it("nav selector should have require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "nav")
        expect(selectorCSS["grid-area"]).to.be.equal("nav")
    })

    it("left selector should have require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".left")
        expect(selectorCSS["grid-area"]).to.be.equal("left")
    })

    it("right selector should have require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".right")
        expect(selectorCSS["grid-area"]).to.be.equal("right")
    })

    it("footer selector should have require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "footer")
        expect(selectorCSS["grid-area"]).to.be.equal("footer")
    })

    it("should use grid-tempalte-columns property with require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container")
        expect(selectorCSS["grid-template-columns"]).to.be.equal("200px 400px")
    })

    it("should use grid-tempalte-rows property with require values", async function() {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".container")
        expect(selectorCSS["grid-template-rows"]).to.be.equal("150px 200px 600px 200px")
    })

});
