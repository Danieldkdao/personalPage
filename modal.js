const popup = document.querySelector(".popup");
const tired1 = document.querySelector(".tired1");
const tired2 = document.querySelector(".tired2");
const tired3 = document.querySelector(".tired3");

function showPopup(imageSrc, altText) {
    popup.innerHTML = `
        <img src="${imageSrc}" alt="${altText}" style="width: 60%;">
        <button class="x">
            <i class="fa-solid fa-circle-xmark fa-2xl" style="color: #467ddd; padding: 15px 0;"></i>
        </button>
    `;
    popup.showModal();

    const closeBtn = popup.querySelector(".x");
    closeBtn.addEventListener("click", () => {
        popup.close();
    });
}

tired1.addEventListener("click", () => showPopup("food1.jpg", "summer salad"));
tired2.addEventListener("click", () => showPopup("food2.jpg", "fish soup"));
tired3.addEventListener("click", () => showPopup("food3.jpg", "seafood stew"));
