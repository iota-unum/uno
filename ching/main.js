//MODEL//
const hexagram = {
  lines: []
};

//VIEW//
const view = {
	yangSVG: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="150"><path d="M-.969-.34h153.995v23.246H-.969z"/></svg>`,
	yingSVG: `<svg xmlns="http://www.w3.org/2000/svg" height="20" width="150"><path d="M-.969-.34H71.67v23.246H-.969zM79.419-.34h72.639v23.246H79.419z" /></svg>`,

	displayLines: function() {
		document.querySelector("#container").innerHTML = "";
		for (let i = hexagram.lines.length - 1; i >= 0; i--) {
		let line = document.createElement("div");
		if (hexagram.lines[i].BoolNum % 2 === 0) {
			line.innerHTML = this.yingSVG;
		} else {
			line.innerHTML = this.yangSVG;
		}
		if (hexagram.lines[i].lineMutable === true) {
			line.classList.add("mutable");
		}
		document.querySelector("#container").appendChild(line);
		}
	}
};

//CONTROLLER//
const handlers = {
  casts: 0,
  cast: function() {
    if (this.casts < 6) {
      let line = {};
      let castResult = this.castCoins();
      castResult % 2 === 0 ? (line.BoolNum = 0) : (line.BoolNum = 1);
      if (castResult === 6 || castResult === 9) line.lineMutable = true;
      line.ordinalNumber = this.casts + 1;
      line.coinValue = castResult;
      hexagram.lines.unshift(line);
      this.casts++;
      view.displayLines();
    }
  },
  reset: function() {
    this.casts = 0;
    hexagram.lines = [];
    document.querySelector("#container").innnerHTML = "";
    document.querySelector("#container").innerHTML = "";
  },
  //helper function
  castCoins: function() {
    let coin1 = Math.floor(Math.random() * 2) + 2;
    let coin2 = Math.floor(Math.random() * 2) + 2;
    let coin3 = Math.floor(Math.random() * 2) + 2;

    let castResult = coin1 + coin2 + coin3;
    return castResult;
  }
};
   









	

