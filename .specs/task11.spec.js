const chai = require('chai');
const expect = chai.expect;
const path = require('path');
const utils = require('./util');
const createDom = utils.createDOM;
const load_dom_with_external_stylesheet = utils.load_dom_with_external_stylesheet;
const recursive_selectors_CSSRules = utils.recursive_selectors_CSSRules;
const recursive_selectors_CSS_Font_Rules = utils.recursive_selectors_CSS_Font_Rules;
const mid_directory_name = 'Typography';
const pathToFile = path.join(__dirname, '../Typography/typography.html');

describe('CSS Module test11  #start_test', async () => {
  it('Should add the required font-face to external stylesheet', async function () {
    this.timeout(3500);
    const dom = await createDom(pathToFile);
    const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name);
    const font_face = recursive_selectors_CSS_Font_Rules(newDom, 'Space Mono');
    const srcs = font_face.map((font) => font.src);
    const urls = srcs.map((src) => {
      const initial_pos = src.indexOf('url(') + 'url('.length;
      const final_pos = src.indexOf(')', initial_pos);
      return src.slice(initial_pos, final_pos);
    });

    expect(urls).to.be.include(
      'https://fonts.gstatic.com/s/spacemono/v6/i7dPIFZifjKcF5UAWdDRYEF8RQ.woff2'
    );
  });
  // it("Should add the required font-face to external stylesheet", async function () {
  //     this.timeout(3500)
  //     const dom = await createDom(pathToFile)
  //     const newDom = await load_dom_with_external_stylesheet(dom, mid_directory_name)
  //     const font_face = recursive_selectors_CSS_Font_Rules(newDom, "Space Mono")
  //     const srcs = font_face.map(font => font.src.split(",")[2])
  //     const urls = srcs.map(src=>{
  //         const initial_pos = src.indexOf("url(")+"url(".length
  //         const final_pos = src.indexOf(")", initial_pos);
  //         return src.slice(initial_pos, final_pos)
  //     })
  //     expect(urls).to.be.include("https://fonts.gstatic.com/s/spacemono/v5/i7dMIFZifjKcF5UAWdDRaPpZUFWaHg.woff2")
  // })
});
