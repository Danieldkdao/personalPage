const stem = document.querySelector(".stem");
const coding = document.querySelector(".coding");
const other = document.querySelector(".other");
const inner = document.querySelector(".inner");
const stemCode = `<div class="content3">
                <h2>Amazing food <em>every day</em></h2>
                <p class="p">Our family doesn't have a dinner bell; the aromas from the kitchen have their own gravitational pull.</p>
                <br>
                <div class="imgContainer">
                    <button class="food">
                      <img src="food1.jpg" alt="summer salad" class="foodImg tired1">  
                    </button>
                    <button class="food">
                      <img src="food2.jpg" alt="fish soup" class="foodImg tired2">  
                    </button>
                    <button class="food">
                      <img src="food3.jpg" alt="seafood stew" class="foodImg tired3">  
                    </button>
                </div>
            </div>
            <div class="content3">
                <h2>Problem Solved (Mostly)</h2>
                <p class="p">I love the puzzle of math—the thrill of cracking a tough problem. But the best part? Thanks to my <a href="https://hailongdao.github.io/" target="_blank" class="a">dad</a>, I've gotten to meet so many brilliant, fascinating mathematicians.</p>
            </div>
            <div class="content3">
                <h2>Jetlagged & Culturally Humbled</h2>
                <p class="p">Traveling lets me explore new places, taste new foods, and meet people whose lives are nothing like mine—that's the best part.</p>
                <br>
            </div>`
const codeCode = `<div class="content3">
        <h2>Tennis</h2>
        <p class="p">I love tennis because it’s fun and keeps me active. Playing it helps me stay focused and improve every time I practice. I’ve met a lot of great friends through tennis, and we always cheer each other on. Sometimes we stay after practice just to watch the game together. Watching the pros play helps me learn new moves and strategies. I train with my brother every day—we walk to the park with our rackets and play. Helping him improve has made me a better player too, and it’s become one of my favorite parts of the day.</p>
    </div>`;
const otherCode = `<div class="content3">
        <h2>Rubik's Cubes</h2>
        <p class="p">I love playing with Rubik’s Cubes because they challenge my brain and help me think in new ways. Solving them feels like unlocking a puzzle, and every time I get faster, it’s really satisfying. I enjoy learning new solving methods and trying out different cube sizes and shapes. It’s also a fun way to relax and take a break from schoolwork. Sometimes I race my friends to see who can solve it the fastest, which makes it even more exciting.</p>
        <br>
        <p class="p">My Main Cube: <strong>GAN 12 Maglev UV</strong></p>
        <br>
        <p class="p">My Personal Best: <strong>9.36 seconds</strong></p>
    </div>`;

function all(){
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
}

stem.addEventListener('click', () => {
    inner.innerHTML = stemCode;
    other.classList.add("unselect");
    stem.classList.remove("unselect");
    coding.classList.add("unselect");

    all();
})
coding.addEventListener('click', () => {
    inner.innerHTML = codeCode;
    stem.classList.add("unselect");
    other.classList.add("unselect");
    coding.classList.remove("unselect");

    all();
})
other.addEventListener('click', () => {
    inner.innerHTML = otherCode;
    other.classList.remove("unselect");
    stem.classList.add("unselect");
    coding.classList.add("unselect");

    all();
})
