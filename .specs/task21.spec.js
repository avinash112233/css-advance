const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Grid-items"
const pathToFile = path.join(__dirname, "../Grid-items/index.html");


describe("CSS Module test21  #start_test", async () => {

    it("should set the grid-row-start and grid-row-end in .a", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".a")
        let flag = false;
        if (selectorCSS["grid-row-start"]) {
            expect(Number.parseInt(selectorCSS["grid-row-start"])).to.be.equal(5)
            expect(Number.parseInt(selectorCSS["grid-row-end"])).to.be.equal(7)
            flag = true;
        }
        else if (selectorCSS["grid-row"]) {
            var array = selectorCSS["grid-row"].split("/").map(data=>Number.parseInt(data))
            expect(array[0]).to.be.equal(5)
            expect(array[1]).to.be.equal(7)
            flag = true;
        }
        else if (selectorCSS["grid-area"]) {
            var array = selectorCSS["grid-area"].split("/")
            expect(array[0]).to.be.equal("5")
            expect(array[2]).to.be.equal("span 2")
            flag = true;
        }

        expect(flag).to.be.equal(true)
    })

});
