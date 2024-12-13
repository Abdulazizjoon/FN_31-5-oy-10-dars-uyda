let input = document.querySelector("input");
let wrapper = document.querySelector(".wrapper");
function createCard(data) {
    return `
    <img src="${data.Poster}" alt="film img">
    <h2>name: ${data.Title}</h2>
    <p>data: ${data.Released}</p>
    <p>janr: ${data.Genre}</p>
    <p>davomiylig: ${data.Runtime}</p>
    <p>syujet: ${data.Type}</p>
    `
}
let btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    let token = `eeaccaa3`;
    let sum = name.value;
    fetch(`http://www.omdbapi.com/?t=${sum}&apikey=${token}`)
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((data) => {
          console.log(data);
          let card = createCard(data)
          wrapper.innerHTML = card;
      })
      .catch((err) => {
        console.log(err);
      });
  });
