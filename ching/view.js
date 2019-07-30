class UI {
  constructor(div) {
    this.div = div;
    this.yangSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="150"><path d="M-.969-.34h153.995v23.246H-.969z"/></svg>`;
    this.yingSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="150"><path d="M-.969-.34H71.67v23.246H-.969zM79.419-.34h72.639v23.246H79.419z" /></svg>`;
  }

  showLines(hexArray) {
    const lines = hexArray.map(line => {
      const yang = line.isYang ? this.yangSVG : this.yingSVG;
      const mutable = line.isMutable ? "mutable" : "";

      return `<div class="${mutable} lines" data-position=${
        line.position
      }>${yang}</div>`;
    });
    const linesReversed = [...lines].reverse().join("");
    this.div.innerHTML = linesReversed;
  }

  showText(data) {
    const {
      number,
      hexagram,
      definition,
      description,
      chineseName,
      name,
      character
    } = data;
    this.div.innerHTML = `<div class="title"><h1>

            <span class="chinese-symbol">${chineseName} </span>
            <span class="">${number} </span>
            <span>${name}</span>
            <span>${character}</span>
        </h1>
       </div>
       <div class="description">
       <p> ${description}</p>

       </div>

  
    `;
  }

  showSingleLine(data, num, lineText) {

const {
  number,
  hexagram,
  definition,
  description,
  chineseName,
  name,
  character
} = data;



    this.div.innerHTML = `

<div class="title"><h1>

            <span class="chinese-symbol">${chineseName} </span>
            <span class="">${number} </span>
            <span>${name}</span>
            <span>${character}</span>
        </h1>
       </div>

    <h4>Line ${num} </h4>
    <p class="lead">${lineText}</p>`;
  }
}