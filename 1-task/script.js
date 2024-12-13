let img = document.querySelector(".card_img");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let wrapper = document.querySelector(".wrapper");
function createCard(data) {
  return `
        <img src="${data.avatar_url}" class="card_img" alt="userPicture">
        <h2>${data.name}</h2>
        <p>${data.name}</p>
        <p>bio: ${data.bio}</p>
        <p>company: ${data.company}</p>
        <p>followers: ${data.followers}</p>
        <p>following: ${data.following}</p>
    `;
}

btn &&
  btn.addEventListener("click", function (e) {
    let res = document.querySelector("input").value;
    console.log(res);
    e.preventDefault();
    fetch(`https://api.github.com/users/${res}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        let card = createCard(data);
        wrapper.innerHTML = card;
      })
      .catch((err) => {
        console.log(err);
      });
  });
