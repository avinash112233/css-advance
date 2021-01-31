const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Typography"
const pathToFile = path.join(__dirname , "../Typography/typography.html");


describe("CSS Module test09  #start_test", async() => {
 
    it("should set font and fallback font to main font sections",async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".garamond .sample .text")
        const array=selectorCSS["font-family"].split(",")
        expect(array[0]).to.include("Garamond")
        expect(array[1]).to.include("serif")
    })

    it("should set font and fallback font to main font sections",async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".helvetica .sample .text")
        const font_array=selectorCSS["font-family"].split(",")
        expect(font_array[0]).to.include("Helvetica")
        expect(font_array[1]).to.include("sans-serif")
    
    })
   

});




