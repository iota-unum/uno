class Hexagram {
  constructor(hexArray) {
    this.hexArray = hexArray;
    this.originalHexagram = this.createOrignalHexagram(hexArray);
    this.derivedHexagram = this.createDerivedHexagram(hexArray);
  }

  createOrignalHexagram() {
    // console.log("creato originale");

    const originalArray = [...this.hexArray];
    const binary = originalArray
      .map(line => (line.isYang ? 1 : 0))
      .reverse()
      .join("");

    return {
      binary,
      originalArray
    };
  }

  createDerivedHexagram() {
    const derivedArray = this.hexArray.map(line => {
      //   console.log(this.originalHexagram);

      if (line.isMutable) {
        return {
          num: line.num,
          isYang: !line.isYang,
          isMutable: false,
          position: line.position
        };
      }
      return line;
    });

    const binary = derivedArray
      .map(line => (line.isYang ? 1 : 0))
      .reverse()
      .join("");
    // console.log(this);
    return {
      binary,
      derivedArray
    };
  }
   getText = async (binary) => {
    const url1 = "DATA/hexagrams.json";
    const url2 = "DATA/HexIndex.json";
    const data1 = await fetch(url1)
      .then(data => data.json())
      .then(json => json[0])
      .catch(err => console.log(err));
    const { number, hexagram, definition, description } = data1[binary];
    // console.log(data1[binary].number, 'NUMERO')
    const data2 = await fetch(url2)
      .then(data => data.json())
      .then(json =>
        json.hexagrams.filter(hex => hex.number.toString() === number)
      );

    const {
      chineseName,
      names: [name],
      character
    } = data2[0];
    return {
      number,
      hexagram,
      definition,
      description,
      chineseName,
      name,
      character
    }
  }
  getLine = async (hexNum, lineNum) => {
    const url = "DATA/changing-lines.json";
    const data = await fetch(url)
      .then(data => data.json())
      .then(json => json[0][`${hexNum}_${lineNum}`])
      .catch(err => console.log(err));
    return data;
  };
}
