class Cast {
  constructor() {
    this.counter = 0;
    this.hexArray = [];
  }
  createHexArray = () => {
    this.counter++;
    //HELPERS (castCoins, createLine)
    const castCoins = () => {
      let coin1 = Math.floor(Math.random() * 2) + 2;
      let coin2 = Math.floor(Math.random() * 2) + 2;
      let coin3 = Math.floor(Math.random() * 2) + 2;
      let castResult = coin1 + coin2 + coin3;
      return castResult;
    };
    const createLine = coinsResult => {
      const line = {
        num: coinsResult,
        isYang: null,
        isMutable: null,
        position: this.hexArray.length + 1
      };
      if (line.num % 2 === 0) {
        line.isYang = false;
      } else {
        line.isYang = true;
      }
      if (line.num === 6 || line.num === 9) {
        line.isMutable = true;
      } else {
        line.isMutable = false;
      }
      // console.log("FROM CREATELINE", this);

      return line;
    };
    //  MAIN FUNCTION
    if (this.hexArray.length < 6) {
      const coinResult = castCoins();
      const line = createLine(coinResult);
      this.hexArray.unshift(line);
    } else {
      return this.hexArray;
    }
  };
}

// createRunningHexagram = () => {

//     //HELPERS (castCoins, createLine)
//     const castCoins = () => {
//         let coin1 = Math.floor(Math.random() * 2) + 2;
//         let coin2 = Math.floor(Math.random() * 2) + 2;
//         let coin3 = Math.floor(Math.random() * 2) + 2;
//         let castResult = coin1 + coin2 + coin3;
//         return castResult;
//     };
//     const createLine = coinsResult => {
//         const line = {
//             num: coinsResult,
//             isYang: null,
//             isMutable: null,
//             position: this.runningHexagram.length + 1
//         };
//         if (line.num % 2 === 0) {
//             line.isYang = false;
//         } else {
//             line.isYang = true;
//         }
//         if (line.num === 6 || line.num === 9) {
//             line.isMutable = true;
//         } else {
//             line.isMutable = false;
//         }
//         console.log("FROM CREATELINE", this);

//         return line;
//     };
//     //  MAIN FUNCTION
//     if (this.runningHexagram.length < 6) {
//         const coinResult = castCoins();
//         const line = createLine(coinResult);
//         this.runningHexagram.unshift(line);
//     }
//     return this.runningHexagram;
// }
