
const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Grid-items"
const pathToFile = path.join(__dirname , "../Grid-items/index.html");


describe("CSS Module test23  #start_test", async() => {
 
    it("should set the grid-row in .b using span", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".b")
        let flag=false;
        if(selectorCSS["grid-row"]){
            var array=selectorCSS["grid-row"].split("/")
            expect(array[0]).to.be.equal("2")
            expect(array[1]).to.be.equal("span 3")
            flag=true;
        }
        else if(selectorCSS["grid-area"]){
            var array=selectorCSS["grid-area"].split("/")
            expect(array[0]).to.be.equal("2")
            expect(array[2]).to.be.equal("span 3")
            flag=true;
        }
        expect(flag).to.be.equal(true)
    })

    it("should set the grid-colum in .b using span", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".b")
        let flag=false;
        if(selectorCSS["grid-column"]){
            if(selectorCSS["grid-column"].includes("span")){
                var array=selectorCSS["grid-column"].split("/")
                expect(array[0]).to.be.equal("2")
                expect(array[1]).to.be.equal("span 6")
                flag=true;
            }
        }
        else if(selectorCSS["grid-area"]){
            if(selectorCSS["grid-area"].includes("span")){
                var array=selectorCSS["grid-area"].split("/")
                expect(array[1]).to.be.equal("2")
                expect(array[3]).to.be.equal("span 6")
                flag=true;
            }
        }
        expect(flag).to.be.equal(true)
    })

    it("should set the grid-colum in .a using span", async()=> {
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".a")
        let flag=false;
        if(selectorCSS["grid-column"]){
            var array=selectorCSS["grid-column"].split("/")
            expect(array[0]).to.be.equal("1")
            expect(array[1]).to.be.equal("span 2")
            flag=true;
        }
        else if(selectorCSS["grid-area"]){
            var array=selectorCSS["grid-area"].split("/")
            expect(array[1]).to.be.equal("1")
            expect(array[3]).to.be.equal("span 2")
            flag=true;
        }
        expect(flag).to.be.equal(true)
    })
    

});
