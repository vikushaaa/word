console.clear();let arr = [
    "Скільки голосних букв в країнському алфавіті",  "В якому місті України найбільше жителів",
    "частина мови яка відповідає на питання що і хто",  "Хто придумав комп'ютер",
    "Яка область в Україні найменша за площею"];
  let arr2 = ["шість", "київ", "іменник", "беббідж", "чернівецька"];
  const q = document.querySelector(".q");const a = document.querySelector(".box1");
  let level = document.querySelector(".level");let error = document.querySelector(".error");
  const maxErrors = 3;
  let wordLength = 0;let random = 0;
  let openLetters = undefined;const letters = document.querySelectorAll(".a");
  let currentLevel = 1;
  let errorCount = 0;
  function updateLevel() {  currentLevel++;
    level.textContent = "рівень: " + currentLevel;}
  function updateErrorCount() {
    errorCount++;  error.textContent = "помилки: " + errorCount;
    if (errorCount >= maxErrors) {
      alert("Максимальна кількість помилок досягнута. Спробуйте ще раз.");
      removeItem(arr, random);    removeItem(arr2, random);
      errorCount = 0;    error.textContent = "помилки: 0";
      startRound(arr, arr2); }
  }
  letters.forEach((letter) => {  letter.addEventListener("click", function () {
      const clickedLetter = this.textContent;    let letterFound = false;
      for (let i = 0; i < arr2[random].length; i++) {
        if (arr2[random][i] === clickedLetter) {        openLetters[i].textContent = clickedLetter;
          letterFound = true;      }
      }
      if (letterFound) {      if (Array.from(openLetters).every((item) => item.textContent != "")) {
          setTimeout(() => {          alert("Слово відгадано! Переходьте до наступного рівня.");
            removeItem(arr, random);          removeItem(arr2, random);
            updateLevel();
            errorCount = 0;          error.textContent = "помилки: 0";
            startRound(arr, arr2);}, 100);
        }    } else {
        updateErrorCount();    }
    });});
  function getRandomWord(arr) {
    return Math.trunc(Math.random() * arr.length);}
  // запуск 1 раунду
  startRound(arr, arr2);
  function startRound(questions, answers) {  random = getRandomWord(arr2);
    q.textContent = arr[random];  for (let i = 0; i < wordLength; i++) {
      a.removeChild(a.firstChild);  }
    wordLength = arr2[random].length;  for (let i = 0; i < arr2[random].length; i++) {
      let el = document.createElement("p");    a.appendChild(el);
    }  openLetters = document.querySelectorAll("p");
    errorCount = 0;
    error.textContent = "помилки: 0";}
  function removeItem(arr, index) {
    return arr.splice(index, 1);
  }