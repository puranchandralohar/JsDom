let main = document.querySelector(".watches_slider");

let url = "https://api.escuelajs.co/api/v1/categories/2/products";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 15; i++) {
      console.log(data);
      let result = `<div class="watch_item">
                        <a href="#">
                            <div class="product_image">
                                <img src="${data[i].images[1]}" alt="${
                                    data[i].title
                                }">
                            </div>
                            <div class="product_title">${data[i].title}</div>
                            <div class="stars">&bigstar;&starf;&starf;&starf;&star;</div>
                            <div class="product_price">Offer Price <strong>Rs.${
                              data[i].price
                            }</strong></div>
                            <div class="product_original_price">M.R.P :Rs.${
                              data[i].price + 1000
                            }</div>
                            <button id = "btn">Offer Available</button>
                        </a>
                    </div>`;
      main.innerHTML += result;
    }
  });

// Slider Part

const main1 = [...document.querySelectorAll(".watches_slider")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

main1.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
