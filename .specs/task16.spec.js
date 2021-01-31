const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Grid-template"
const pathToFile = path.join(__dirname , "../Grid-template/index.html");


describe("CSS Module test16  #start_test", async() => {
 
    it("should use grid-template to set rows and columns in .grid", async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom,".grid")
        let flag = false
        if(selectorCSS["grid-template"].includes("px")){
            
            if(selectorCSS["grid-template"].includes("minmax")){
                
                const array=selectorCSS["grid-template"].split("/")
                
                        expect(array[0].replace(/(\s)/g, "")).to.be.include("repeat(3,1fr)")
                        expect(array[1]).to.be.include("3fr minmax(50px,300px) 1fr")
                        flag = true
            }
            else{
                const array=selectorCSS["grid-template"].split("/")
                        expect(array[0]).to.be.include("40% 50% 50px")
                        expect(array[1]).to.be.include("100px 50% 200px")
                        flag = true
            }
        }else if(selectorCSS["grid-template"].includes("repeat")){
            
            const array=selectorCSS["grid-template"].split("/")
            expect(array[0].replace(/(\s)/g, "")).to.be.include("repeat(3,1fr)")
            expect(array[1]).to.be.include("3fr 50% 1fr")
            flag = true

        }else if(selectorCSS["grid-template"].includes("fr")){
            
            const array=selectorCSS["grid-template"].split("/")
            expect(array[0]).to.be.include("1fr 1fr 1fr")
            expect(array[1]).to.be.include("3fr 50% 1fr")
            flag = true

        }
        expect(flag).to.be.equal(true)
    })
});
