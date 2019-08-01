//DOM queries
const castBtn = document.querySelector(".cast");
const displayOriginal = document.querySelector(".hexagram");
const displayDerived = document.querySelector(".derived");
const displayText = document.querySelector(".hexagramText");
const derivedBtn = document.querySelector(".derived-hex");
const welcome = document.querySelector('.welcome')
//Instantiations
const originalLines = new UI(displayOriginal);
const derivedLines = new UI(displayDerived);
const hexText = new UI(displayText);
const cast = new Cast();
//Listeners
castBtn.addEventListener("click", e => {
  // console.log(cast);
  welcome.classList.add('d-none')
  cast.createHexArray();
  originalLines.showLines(cast.hexArray, 'hexagram');

  if (cast.hexArray.length === 6) {
    const hex = new Hexagram(cast.hexArray);
    console.log(hex.originalHexagram, hex.derivedHexagram);
    castBtn.classList = 'btn btn-outline-success  btn-block'
    if (cast.counter > 6) {
      originalLines.showLines(hex.originalHexagram.originalArray, 'hexagram');
      //Get Text
      //Show Text
      castBtn.innerText = 'original hexagram'
      derivedBtn.classList.remove('d-none')
      hex
        .getText(hex.originalHexagram.binary)
        .then(data => {
          hex.originalHexagram.data = data;
          // console.log(hex.derivedHexagram, 'DATA');

          return data;
        })
        .then(data => hexText.showText(data));

      hex
        .getText(hex.derivedHexagram.binary)
        .then(data => {
          hex.derivedHexagram.data = data;
          // console.log(hex.derivedHexagram, 'DATA');

          return data;
        })
        .then(data => {
          derivedBtn.addEventListener("click", e => {
            hexText.showText(data);
            originalLines.showLines(hex.derivedHexagram.derivedArray);
          } );
        });

      document.addEventListener("click", e => {
        const target = e.target.parentElement;
        if (
          target.classList.contains("lines") ||
          target.parentElement.classList.contains("lines")
        ) {
          const num =
            target.dataset.position || target.parentElement.dataset.position;

          const selectedHex = target.parentElement.classList.contains(
            "hexagram"
          )
            ? hex.originalHexagram
            : hex.derivedHexagram;

          console.log(selectedHex.data.hexagram, "NUMBER");

          hex
            .getLine(selectedHex.data.number, num)
            .then(text => hexText.showSingleLine(selectedHex.data, num, text));
        }
      });
    }
  }
});
