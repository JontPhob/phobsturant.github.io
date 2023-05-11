document.addEventListener('DOMContentLoaded', function () {
    

  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti({
    emojis: ['🫃', '🌝', '🏧', '𓀕', '🫘', '🃏', '💩'],
    emojiSize: randomIntFromInterval(10, 500),
    confettiNumber: randomIntFromInterval(80, 300) ,
 })
  }, false)

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }