const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Typography"
const pathToFile = path.join(__dirname , "../Typography/typography.html");


describe("CSS Module test08  #start_test", async() => {
 
    it("should set the line height of the paragraph element within the banner class to 1.4",async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".banner p")
        expect(selectorCSS["line-height"]).to.be.equal("1.4")
    })
});