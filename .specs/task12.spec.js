
const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const recursive_selectors_CSS_Font_Rules = utils.recursive_selectors_CSS_Font_Rules
const mid_directory_name = "Typography"
const pathToFile = path.join(__dirname, "../Typography/typography.html");


describe("CSS Module test12  #start_test", async () => {

    it("Should contain Nexa font-family in font-face", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const font_face = recursive_selectors_CSS_Font_Rules(newDom, "Nexa")
        expect(font_face).length.to.be.above(0)
    })

    it("Should add correct url in font-face", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const font_face = recursive_selectors_CSS_Font_Rules(newDom, "Nexa")
        const urls = font_face.map(font => {
            const initial_pos = font.src.indexOf("url(") + "url(".length;
            const final_pos = font.src.indexOf(")", initial_pos);
            return font.src.slice(initial_pos, final_pos);
        })
        expect(urls).to.be.include("./fonts/Nexa-Light.otf")
    })

    it("Should have proper given format in its src", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const font_face = recursive_selectors_CSS_Font_Rules(newDom, "Nexa")
        const urls = font_face.map(font => {
            const initial_pos = font.src.indexOf("format(") + "format(".length;
            const final_pos = font.src.indexOf(")", initial_pos);
            return font.src.slice(initial_pos, final_pos);
        })
        expect(urls.join("")).to.be.include("truetype")
    })

    it("Should use Nexa font-family in .banner p selector",async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".banner p")
        expect(selectorCSS["font-family"]).to.be.include("Nexa");
    })


    it("Should proper font-size in .banner p selector", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile);
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".banner p");
        expect(selectorCSS["font-size"]).to.be.equal("20px");
    })

});
