const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Grid-template"
const pathToFile = path.join(__dirname , "../Grid-template/index.html");


describe("CSS Module test13  #start_test", async() => {
 
    it("should set the display property to grid in class name grid", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".grid")
        expect(selectorCSS["display"]).to.be.equal("grid")
    })

});