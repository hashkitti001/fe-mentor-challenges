function getAdvice() {
  const options = { method: "GET" };
  fetch('https://api.adviceslip.com/advice', options)
    .then(response => response.json()).then(response => {
      document.querySelector("#advice-id").innerText = response.slip.id;
      document.querySelector("#advice").innerText = '"' + response.slip.advice + '"';
    }).catch(err => console.error(err));
}
