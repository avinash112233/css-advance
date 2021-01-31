const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Typography"
const pathToFile = path.join(__dirname , "../Typography/typography.html");


describe("CSS Module test07  #start_test", async() => {
 
    it("should reset the heading so that it is aligned to the center",async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,"h1")
        expect(selectorCSS["text-align"]).to.be.equal("center")
    })
});