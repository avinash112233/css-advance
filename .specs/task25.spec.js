
const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Practice"
const pathToFile = path.join(__dirname , "../Practice/practice.html");


describe("CSS Module test25  #start_test", async() => {
 
    it("should set the display property for div to be grid", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".grid")
        expect(selectorCSS["display"]).to.be.equal("grid");
    })

    it("should having required columns", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".grid")
        let flag = false;
        if(selectorCSS["grid-template-columns"]){
            expect(selectorCSS["grid-template-columns"]).to.be.equal("25% 25% 2fr 1fr")
            flag = true;
        }
        else if(selectorCSS["grid-template"]){
            const grid_template_array = selectorCSS["grid-template"].split("/")
            expect(grid_template_array[1]).to.be.include("25% 25% 2fr 1fr");
            flag = true;
        }
        expect(flag).to.be.equal(true)
    })

    it("should having required rows",async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".grid")
        let flag = false;
        if(selectorCSS["grid-template-rows"]){
            expect(selectorCSS["grid-template-rows"]).to.be.equal("200px 200px")
            flag = true;
        }
        else if(selectorCSS["grid-template"]){
            const grid_template_array = selectorCSS["grid-template"].split("/")
            expect(grid_template_array[0]).to.be.include("200px 200px")
            flag = true;
        }
        expect(flag).to.be.equal(true)
    })

    it("should having required gap between rows and columns", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".grid")
        const grid_gap_array = selectorCSS["grid-gap"].split(" ")
        expect(grid_gap_array[0]).to.be.include("10px")
        expect(grid_gap_array[1]).to.be.include("15px")
    })

    it("class a should take up the first two columns of the grid.", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".a")
        let flag = false;
        if(selectorCSS["grid-column"]){
            const grid_column_array = selectorCSS["grid-column"].split("/")
            expect(grid_column_array[0]).to.be.include("1")
            expect(grid_column_array[1]).to.be.include("span 2")
            flag = true;     
        }
        else if(selectorCSS["grid-area"]){
            const grid_area_array = selectorCSS["grid-area"].split("/")
            expect(grid_area_array[1]).to.be.include("1")        
            expect(grid_area_array[3]).to.be.include("span 2")
            flag = true;
        }
        expect(flag).to.be.equal(true)
    })

    it("class a should take up the first two rows of the grid.", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".a")
        let flag = false;
        if(selectorCSS["grid-row"]){
            const grid_column_array = selectorCSS["grid-row"].split("/")
            expect(grid_column_array[0]).to.be.include("1")
            expect(grid_column_array[1]).to.be.include("span 2")
            flag = true;     
        }
        else if(selectorCSS["grid-area"]){
            const grid_area_array = selectorCSS["grid-area"].split("/")
            expect(grid_area_array[0]).to.be.include("1")        
            expect(grid_area_array[2]).to.be.include("span 2")
            flag = true;
        }
        expect(flag).to.be.equal(true)
    })

});
