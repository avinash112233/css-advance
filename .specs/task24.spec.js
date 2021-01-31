
const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Grid-items"
const pathToFile = path.join(__dirname , "../Grid-items/index.html");


describe("CSS Module test24  #start_test", async() => {
 
    it("should set the grid-area in .c using span",async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".c")
        var array=selectorCSS["grid-area"].split("/")
        expect(array[0]).to.be.equal("6")
        expect(array[1]).to.be.equal("8")
        expect(array[2]).to.be.equal("span 3")
        expect(array[3]).to.be.equal("span 1")
    })

    it("should set the grid-colum in .b using span", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".b")
        var array=selectorCSS["grid-area"].split("/")
        expect(array[0]).to.be.equal("2")
        expect(array[1]).to.be.equal("2")
        expect(array[2]).to.be.equal("span 3")
        expect(array[3]).to.be.equal("span 6")
    })

    it("should set the grid-colum in .a using span",async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".a")
        var array=selectorCSS["grid-area"].split("/")
        expect(array[0]).to.be.equal("5")
        expect(array[1]).to.be.equal("1")
        expect(array[2]).to.be.equal("span 2")
        expect(array[3]).to.be.equal("span 2")
    })
    

});
