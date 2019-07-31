//DOM queries
const castBtn = document.querySelector(".cast");
const displayOriginal = document.querySelector(".hexagram");
const displayDerived = document.querySelector(".derived");
const displayText = document.querySelector(".hexagramText");
const derivedBtn = document.querySelector(".derived-hex");
//Instantiations
const originalLines = new UI(displayOriginal);
const derivedLines = new UI(displayDerived);
const hexText = new UI(displayText);
const cast = new Cast();
//Listeners
castBtn.addEventListener("click", e => {
  // console.log(cast);

  cast.createHexArray();
  originalLines.showLines(cast.hexArray);

  if (cast.hexArray.length === 6) {
    const hex = new Hexagram(cast.hexArray);
    console.log(hex.originalHexagram, hex.derivedHexagram);
    castBtn.innerText = "read text";
    if (cast.counter > 6) {
      derivedLines.showLines(hex.derivedHexagram.derivedArray);
      //Get Text
      //Show Text

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
          derivedBtn.addEventListener("click", e => hexText.showText(data));
        });

      document.addEventListener("click", e => {
        const target = e.target.parentElement;
        if (
          target.classList.contains("lines") ||
          target.parentElement.classList.contains("lines")
        ) {
          const num =
            target.dataset.position || target.parentElement.dataset.position;

          const selectedHex = target.parentElement.parentElement.classList.contains(
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
