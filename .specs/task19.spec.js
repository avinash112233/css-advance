
//check wether user delete width property ar not if not task fail else task pass
const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Grid-template"
const pathToFile = path.join(__dirname, "../Grid-template/index.html");


describe("CSS Module test19  #start_test", async () => {
    it("should delete width property", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".grid")
        expect(Object.keys(selectorCSS)).to.not.include("width")
    })

    it("should use minmax in .grid", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".grid")
        const array = selectorCSS["grid-template"].split("/")
        expect(array[0].replace(/(\s)/g, "")).to.be.include("repeat(3,1fr)")
        expect(array[1]).to.be.include("3fr minmax(50px,300px) 1fr")
    })

});




