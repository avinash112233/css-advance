const fs = require("fs");
const jsdom = require("jsdom");
const path = require("path");
const { resolve } = require("path");
const { JSDOM } = jsdom;

const readDir = path =>{
  return new Promise((resolve, reject) =>{
    fs.readdir(path, (err, files)=>{
      if(err) reject(err)
      resolve(files)
    })
  })
}

const readData = path => {
    return new Promise((res, rej) => {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) {
          rej("Error in reading");
        } else {
          res(data);
        }
      });
    });
};

/**
 * Create DOM object by reading file
 * @param filepath Path of file
 */
async function createDOM (filepath){
    const fileData = await readData(filepath)
    const DomObject = new JSDOM(fileData, {
        resources: "usable"
    });
    return (DomObject)
}



async function load_dom_with_external_stylesheet(dom, directoryName=null){

    return new Promise(res=>{

      const mid_directory_name = "../"+(directoryName?directoryName:"CSS-Setup-and-Selector")
      
      for(let i=0; i<dom.window.document.getElementsByTagName("link").length; i++){
        const link_href = dom.window.document.getElementsByTagName("link")[i].attributes.getNamedItem("href").textContent
          
        if(!link_href.startsWith("http")){
          const new_path = "file://"+path.join(__dirname, mid_directory_name, link_href)
          dom.window.document.getElementsByTagName("link")[i].attributes.getNamedItem("href").textContent = new_path
        }

      }

      const DomObject = new JSDOM(dom.serialize(), {
          resources: "usable"
      });
      DomObject.window.onload = function(){
          res(DomObject)
      }
      
    })

}

function recursive_selectors_CSSRules(Dom, selectorText){

  const style_object = {}
  const styleSheets = Dom.window.document.styleSheets

  for(let index=0; index<styleSheets.length; index++){

    const CSSRules = styleSheets[index].cssRules

    for(let i =0; i<CSSRules.length; i++){
      if(CSSRules[i].selectorText==undefined) continue;
      const selectors = (CSSRules[i].selectorText.split(",")).map(selector=>{return selector.trim()})
      
      if(typeof(selectorText)==="string" && selectors.includes(selectorText)){
        const array = __get_style_property_key(CSSRules[i])
        const _importants = {}
        array.forEach(key => {
          style_object[key] = CSSRules[i].style[key]
          if(CSSRules[i].style._importants[key] && CSSRules[i].style._importants[key].length>0)
            _importants[key] = CSSRules[i].style._importants[key]
        });
        if(Object.keys(_importants).length){
          style_object["_importants"] = style_object["_importants"]||{}
          let _important_keys = Object.keys(_importants)
          let _important_values = Object.values(_importants)
          _important_keys.forEach((key, index)=>{
            style_object._importants[key] = _important_values[index]
          })
        }
      }else if(typeof(selectorText)!=="string"){

        // console.log("Input array selector",selectorText)
        // console.log("Splitted Selectors =>", selectors)
        const matched_selectors = selectors.filter(selector=>{

          // console.log("Splitted element Selectors =>",selector);
          return selectorText.includes(selector)

        })
        if(matched_selectors.length===selectorText.length) {
          const array = __get_style_property_key(CSSRules[i])
          const _importants = {}
          array.forEach(key => {
            style_object[key] = CSSRules[i].style[key]
            if(CSSRules[i].style._importants[key] && CSSRules[i].style._importants[key].length>0)
              _importants[key] = CSSRules[i].style._importants[key]
          });
          if(Object.keys(_importants).length){
            style_object["_importants"] = style_object["_importants"]||{}
            let _important_keys = Object.keys(_importants)
            let _important_values = Object.values(_importants)
            _important_keys.forEach((key, index)=>{
              style_object._importants[key] = _important_values[index]
            })
          }
        }

      }
    }

  }
  return style_object
}

function recursive_selectors_CSS_Font_Rules(Dom, fontFamily){

  const font_face_array = new Array()
  const styleSheets = Dom.window.document.styleSheets
  
  for(let index=0; index<styleSheets.length; index++){

    const CSSRules = styleSheets[index].cssRules

    for(let i =0; i<CSSRules.length; i++){
      if(!CSSRules[i].style) continue
      const src = CSSRules[i].style.src
      if(src!==undefined && src.startsWith("http") || CSSRules[i].selectorText) continue

      const font = CSSRules[i].style['font-family']
      const _font_family = (font.startsWith(`'`))||(font.startsWith(`"`))?font.slice(1,-1):font
      if(_font_family!==fontFamily) continue

      const font_object = {}
      const array = __get_style_property_key(CSSRules[i])
      const _importants = {}
      array.forEach(key => {
        font_object[key] = CSSRules[i].style[key]
        if(CSSRules[i].style._importants[key] && CSSRules[i].style._importants[key].length>0)
          _importants[key] = CSSRules[i].style._importants[key]
      });
      if(Object.keys(_importants).length){
        font_object["_importants"] = font_object["_importants"]||{}
        let _important_keys = Object.keys(_importants)
        let _important_values = Object.values(_importants)
        _important_keys.forEach((key, index)=>{
          font_object._importants[key] = _important_values[index]
        })
      }
      
      font_face_array.push(font_object)
    }

  }
  return font_face_array
}

function __get_style_property_key (CSSRules){
  let array = new Array()
  for(let i=0; i<CSSRules.style.length; i++){
    array.push(CSSRules.style[i])
  }
  return array
}

module.exports = {
  createDOM: createDOM,
  readFile: readData,
  readDir: readDir,
  load_dom_with_external_stylesheet: load_dom_with_external_stylesheet,
  recursive_selectors_CSSRules: recursive_selectors_CSSRules,
  recursive_selectors_CSS_Font_Rules: recursive_selectors_CSS_Font_Rules
}
