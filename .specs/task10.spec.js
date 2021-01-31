
const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Typography"
const pathToFile = path.join(__dirname , "../Typography/typography.html");


describe("CSS Module test10  #start_test", async() => {

    it("should set the link to the Space Mono font specifying both the normal (400) and bold (700) font weights", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const link = dom.window.document.getElementsByTagName("LINK")
        let link_array = [];
        for(let i=0; i<link.length; i++){
            if(link[i].attributes.getNamedItem("rel").textContent==="stylesheet"){
                const href = link[i].attributes.getNamedItem("href").textContent
                link_array.push(href)
            }
        }
        expect(link_array).to.be.include("https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap")
    })

    it("Should set the font to 'Space Mono' and add monospace as a fallback font", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".space .sample .text")
        const font_array = selectorCSS["font-family"].split(",")
        expect(font_array[0]).to.be.include("Space Mono")
        expect(font_array[1]).to.be.include("monospace")
    })
});
