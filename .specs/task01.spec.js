const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Typography"
const pathToFile = path.join(__dirname , "../Typography/typography.html");


describe("CSS Module test01  #start_test", async() => {

    it("should set the font family of h1 to Georgia", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "h1")
        expect(selectorCSS["font-family"]).to.be.equal("Georgia")
        // done();
    })

    it("should set the font family of h2 to Georgia",  async function () {
        this.timeout(3000)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "h2")
        expect(selectorCSS["font-family"]).to.be.equal("Georgia")
    })

    it("should set the font family of paragraph to helvetica",  async function () {
        this.timeout(3000)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, "p")
        expect(selectorCSS["font-family"]).to.be.equal("Helvetica")
    })

});
