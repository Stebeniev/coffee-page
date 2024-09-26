let selectorOptions = document.querySelectorAll(".selector_option");
let galleries = document.querySelectorAll(".gallery");
let galleryCoffee = document.querySelector(".gallery_coffee");
let galleryTea = document.querySelector(".gallery_tea");
let galleryDessert = document.querySelector(".gallery_dessert");
let body = document.querySelector("body");
let options = document.querySelectorAll(".option");
const modalBackdrop = document.querySelector(".modalBackdrop");

const products = JSON.parse(`[
    {
      "id": "coffee1",
      "pic": "../assets/img/coffee-1.png",
      "name": "Irish coffee",
      "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      "price": "7.00",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "coffee2",
      "pic": "../assets/img/coffee-2.png",
      "name": "Kahlua coffee",
      "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      "price": "7.00",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "coffee3",
      "pic": "../assets/img/coffee-3.png",
      "name": "Honey raf",
      "description": "Espresso with frothed milk, cream and aromatic honey",
      "price": "5.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "coffee4",
      "pic": "../assets/img/coffee-4.png",
      "name": "Ice cappuccino",
      "description": "Cappuccino with soft thick foam in summer version with ice",
      "price": "5.00",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "coffee5",
      "pic": "../assets/img/coffee-5.png",
      "name": "Espresso",
      "description": "Classic black coffee",
      "price": "4.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "coffee6",
      "pic": "../assets/img/coffee-6.png",
      "name": "Latte",
      "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
      "price": "5.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "coffee7",
      "pic": "../assets/img/coffee-7.png",
      "name": "Latte macchiato",
      "description": "Espresso with frothed milk and chocolate",
      "price": "5.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "coffee8",
      "pic": "../assets/img/coffee-8.png",
      "name": "Coffee with cognac",
      "description": "Fragrant black coffee with cognac and whipped cream",
      "price": "6.50",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "tea1",
      "pic": "../assets/img/tea-1.png",
      "name": "Moroccan",
      "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      "price": "4.50",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "tea2",
      "pic": "../assets/img/tea-2.png",
      "name": "Ginger",
      "description": "Original black tea with fresh ginger, lemon and honey",
      "price": "5.00",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "tea3",
      "pic": "../assets/img/tea-3.png",
      "name": "Cranberry",
      "description": "Invigorating black tea with cranberry and honey",
      "price": "5.00",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "tea4",
      "pic": "../assets/img/tea-4.png",
      "name": "Sea buckthorn",
      "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      "price": "5.50",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "dessert1",
      "pic": "../assets/img/dessert-1.png",
      "name": "Marble cheesecake",
      "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      "price": "3.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "dessert2",
      "pic": "../assets/img/dessert-2.png",
      "name": "Red velvet",
      "description": "Layer cake with cream cheese frosting",
      "price": "4.00",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "dessert3",
      "pic": "../assets/img/dessert-3.png",
      "name": "Cheesecakes",
      "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      "price": "4.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "dessert4",
      "pic": "../assets/img/dessert-4.png",
      "name": "Creme brulee",
      "description": "Delicate creamy dessert in a caramel basket with wild berries",
      "price": "4.00",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "dessert5",
      "pic": "../assets/img/dessert-5.png",
      "name": "Pancakes",
      "description": "Tender pancakes with strawberry jam and fresh strawberries",
      "price": "4.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "dessert6",
      "pic": "../assets/img/dessert-6.png",
      "name": "Honey cake",
      "description": "Classic honey cake with delicate custard",
      "price": "4.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "dessert7",
      "pic": "../assets/img/dessert-7.png",
      "name": "Chocolate cake",
      "description": "Cake with hot chocolate filling and nuts with dried apricots",
      "price": "5.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "id": "dessert8",
      "pic": "../assets/img/dessert-8.png",
      "name": "Black forest",
      "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      "price": "6.50",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    }
  ]
  `);

const modalTotalPrice = document.querySelector(".modalTotalPrice");
function animatePriceChange(oldPrice, newPrice) {
  const duration = 330;
  const stepTime = 10;
  const steps = duration / stepTime;
  const stepAmount = (newPrice - oldPrice) / steps;
  let currentStep = 0;

  const counterInterval = setInterval(() => {
    if (currentStep < steps) {
      oldPrice += stepAmount;
      modalTotalPrice.textContent = `$${oldPrice.toFixed(2)}`;
      currentStep++;
    } else {
      modalTotalPrice.textContent = `$${newPrice.toFixed(2)}`;
      clearInterval(counterInterval);
    }
  }, stepTime);
}

function updateTotalPrice(basePrice, sizes, additives) {
  let totalPrice = parseFloat(basePrice);
  const selectedSize = document.querySelector(".modalSize .modalActive");
  if (selectedSize) {
    const sizeKey = selectedSize.id.replace("modalSize", "").toLowerCase();
    totalPrice += parseFloat(sizes[sizeKey]["add-price"]);
  }

  const selectedAdditives = document.querySelectorAll(
    ".modalAdditives .modalActive"
  );
  selectedAdditives.forEach((additive) => {
    const additiveIndex =
      parseInt(additive.id.replace("modalAdditive", "")) - 1;
    totalPrice += parseFloat(additives[additiveIndex]["add-price"]);
  });

  const oldPrice = parseFloat(
    document.querySelector(".modalTotalPrice").textContent.replace("$", "")
  );
  animatePriceChange(oldPrice, totalPrice);
}

function updateModalContent(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  document.querySelector(".modalTitle").textContent = product.name;
  document.querySelector(".modalDescription").textContent = product.description;
  document.querySelector(
    ".modalPhoto"
  ).style.backgroundImage = `url('${product.pic}')`;

  const sizeBox = document.querySelector(".modalSize .modalSelectorBox");
  sizeBox.innerHTML = "";
  Object.keys(product.sizes).forEach((sizeKey) => {
    const sizeOption = document.createElement("div");
    sizeOption.className =
      "modalSelectorItem" + (sizeKey === "s" ? " modalActive" : "");
    sizeOption.id = "modalSize" + sizeKey.toUpperCase();
    sizeOption.innerHTML = `<span class="modalSpan">${sizeKey.toUpperCase()}</span>${
      product.sizes[sizeKey].size
    }`;
    sizeBox.appendChild(sizeOption);
  });

  const additivesBox = document.querySelector(
    ".modalAdditives .modalSelectorBox"
  );
  additivesBox.innerHTML = "";
  product.additives.forEach((additive, index) => {
    const additiveOption = document.createElement("div");
    additiveOption.className = "modalSelectorItem";
    additiveOption.id = "modalAdditive" + (index + 1);
    additiveOption.innerHTML = `<span class="modalSpan">${index + 1}</span>${
      additive.name
    }`;
    additivesBox.appendChild(additiveOption);
  });

  updateTotalPrice(product.price, product.sizes, product.additives);

  document
    .querySelectorAll(".modalSize .modalSelectorItem")
    .forEach((sizeOption) => {
      sizeOption.addEventListener("click", () => {
        document
          .querySelectorAll(".modalSize .modalSelectorItem")
          .forEach((item) => item.classList.remove("modalActive"));
        sizeOption.classList.add("modalActive");

        updateTotalPrice(product.price, product.sizes, product.additives);
      });
    });

  document
    .querySelectorAll(".modalAdditives .modalSelectorItem")
    .forEach((additiveOption) => {
      additiveOption.addEventListener("click", () => {
        additiveOption.classList.toggle("modalActive");

        updateTotalPrice(product.price, product.sizes, product.additives);
      });
    });
}

options.forEach((button) => {
  button.addEventListener("click", () => {
    updateModalContent(button.id);
  });
});

modalBackdrop.addEventListener("click", function (event) {
  if (event.target === modalBackdrop) {
    body.classList.remove("no-scroll");
    modalBackdrop.style.display = "none";
    modalTotalPrice.textContent = "$0.00";
  }
});

document.querySelector(".modalCloseBtn").addEventListener("click", function () {
  body.classList.remove("no-scroll");
  modalBackdrop.style.display = "none";
  modalTotalPrice.textContent = "$0.00";
});

options.forEach((e) => {
  e.addEventListener("click", () => {
    body.classList.add("no-scroll");
    modalBackdrop.style.display = "flex";
  });
});

selectorOptions.forEach(function (selector) {
  selector.addEventListener("click", function (event) {
    let clicked = event.target.closest(".selector_option");
    if (clicked.classList.contains("selector_active")) return;
    console.log(clicked.classList);

    selectorOptions.forEach((el) => {
      el.classList.remove("selector_active");
    });

    clicked.classList.add("selector_active");

    galleries.forEach((ele) => {
      ele.classList.add("hide");
    });

    if (clicked.classList.contains("selector_coffee")) {
      galleryCoffee.classList.remove("hide");
    }
    if (clicked.classList.contains("selector_tea")) {
      galleryTea.classList.remove("hide");
    }
    if (clicked.classList.contains("selector_dessert")) {
      galleryDessert.classList.remove("hide");
    }
  });
});

let coffeeOption = document.querySelector("#coffee_option");
let dessertOption = document.querySelector("#dessert_option");
let dessertBox = document.querySelector("#dessert_box");
let coffeeBox = document.querySelector("#coffee_box");

coffeeOption.addEventListener("click", () => {
  for (let i = 5; i < 9; i++) {
    document.querySelector(`#coffee${i}`).style.display = "block";
  }
  coffeeBox.style.display = "none";
});

dessertOption.addEventListener("click", () => {
  for (let i = 5; i < 9; i++) {
    document.querySelector(`#dessert${i}`).style.display = "block";
  }
  dessertBox.style.display = "none";
});

let menuNav = document.querySelector(".menu");

let burgermenuIcon = document.querySelector(".burgermenu_icon");
let navigation = document.querySelector(".navigation");
let header = document.querySelector("header");
let burgerLink = document.querySelectorAll(".burger_link");

function openMenu(delay) {
  if (burgermenuIcon.classList.contains("burger_active")) {
    burgermenuIcon.classList.remove("burger_active");
    navigation.classList.remove("nav_active");

    navigation.classList.add("removeBurger");
    setTimeout(function () {
      navigation.classList.remove("removeBurger");
      header.classList.remove("header_active");
      body.classList.remove("no-scroll");
    }, delay);
  } else {
    body.classList.add("no-scroll");
    setTimeout(() => {
      window.scrollTo(0, 0);
      burgermenuIcon.classList.add("burger_active");
      navigation.classList.add("nav_active");
      header.classList.add("header_active");
    }, 100);
  }
}

burgermenuIcon.addEventListener("click", function () {
  openMenu(1500);
});

burgerLink.forEach((e) => {
  e.addEventListener("click", function () {
    openMenu(500);
  });
});
