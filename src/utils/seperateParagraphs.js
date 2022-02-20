
function seperateParas(text) {
    let text_array = text.split(' ')
    let paragraph = []
    let seperatedParagraphs = []
    let final = []
    text_array.forEach(word => {
      if(word != '<br/><br/>'){
          paragraph.push(word)
      }
      else {
          seperatedParagraphs.push(paragraph);
          paragraph = [];
      }
    })

    seperatedParagraphs.forEach((para) => {
        let newPara = para.join(' ')
        final.push(newPara)
    })

    return final;
}


export default seperateParas;