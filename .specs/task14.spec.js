const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const utils = require("./util");
const createDom = utils.createDOM
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules
const mid_directory_name = "Grid-template"
const pathToFile = path.join(__dirname, "../Grid-template/index.html");


describe("CSS Module test14  #start_test", async () => {

    it("should create three columns of 100px 50% and 200px in .grid",async function () {
        this.timeout(3500)
        const dom = await createDom(pathToFile)
        const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
        const selectorCSS = recursive_selectors_CSSRules(newDom, ".grid")
        let flag = false
        if(selectorCSS["grid-template-columns"]){
           expect(selectorCSS["grid-template-columns"]).to.be.equal("100px 50% 200px")
           flag = true
        }
        else if(selectorCSS["grid-template"]){

            if(selectorCSS["grid-template"].includes("px")){
                if(selectorCSS["grid-template"].includes("minmax")){
                    var array=selectorCSS["grid-template"].split("/")
                    expect(array[1]).to.be.equal("3fr minmax(50px,300px) 1fr")
                    flag = true
                }
                else{
                    var array=selectorCSS["grid-template"].split("/")
                    expect(array[1]).to.be.equal("100px 50% 200px")
                    flag = true
                }
            }
            else if(selectorCSS["grid-template"].includes("repeat")){
                var array=selectorCSS["grid-template"].split("/")
                expect(array[1]).to.be.equal("3fr 50% 1fr")
                flag = true
            }
            else if(selectorCSS["grid-template"].includes("fr")){
                var array=selectorCSS["grid-template"].split("/")
                expect(array[1]).to.be.equal("3fr 50% 1fr")
                flag = true
            }
        }
        expect(flag).to.be.equal(true)
    })

});
