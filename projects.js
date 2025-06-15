const stem = document.querySelector(".stem");
const coding = document.querySelector(".coding");
const other = document.querySelector(".other");
const inner = document.querySelector(".inner");
const stemCode = `<div class="content3">
        <h2>Generative AI Project</h2>
        <p class="p">My brother Lawrence and I explored the mathematical reasoning abilities of generative AI tools and conducted large-scale surveys to understand how our community perceived them. We presented our findings to the school district and played a key role in forming the district's AI committee, successfully advocating for student access to these tools for educational use.</p>
        <br>
        <p class="p">Our project earned first place in both the state of Kansas and the South Central region, and ultimately won the <a href="https://lawrencekstimes.com/2024/07/24/lvs-national-stem-competition/" target="_blank" style="text-decoration: underline; color:blue;">2024 eCYBERMISSION National STEM Competition</a> in the 8th grade division.</p>
    </div>
    <div class="content3">
        <h2>AI Monitoring in Schools</h2>
        <p class="p">Lawrence and I investigated the effectiveness and impact of AI-powered student monitoring tools used in our school district. To better understand community perspectives, we conducted large-scale surveys that revealed important concerns and expectations. We advocated for a balanced, transparent, and well-regulated approach to the use of these technologies, emphasizing that students—being the primary subjects of monitoring—deserve a voice in how such tools are implemented.</p>
        <br>
        <p class="p">Our project earned first place in both the state of Kansas and the South Central region, and we were honored to be named national finalists in the <a href="https://ecybermission.blogspot.com/2025/05/meet-2025-national-finalists.html" target="_blank" style="text-decoration: underline; color: blue;">2025 eCYBERMISSION STEM Competition</a> for the 9th grade division.</p>
    </div>
    <div class="content3">
        <h2>Current and Future Projects</h2>
        <p class="p">Coming soon. Check back for updates.</p>
        <br>
    </div>`
const codeCode = `<div class="content3">
        <h2>Guitar Tools Application</h2>
        <p class="p">This project is an interactive website designed to help guitarists improve their skills through a suite of practice tools. The site features custom-built utilities aimed at sharpening essential guitar techniques like strumming, scale practice, and chord recognition.</p>
        <br>
        <p class="p">Check it out at this link: <a href="https://danieldkdao.github.io/GuitarTools/" target="_blank" style="text-decoration: underline; color:blue;">Guitar Tools Website</a></p>
    </div>
    <div class="content3">
        <h2>Message Encryption Decryption</h2>
        <p class="p">This project is a simple web-based encryption and decryption tool. It lets users securely encode messages using a randomized substitution cipher, and then decode them using the same key. The interface is clean and user-friendly, with a toggle switch that lets users switch between encryption and decryption modes. A dynamic “Reset Key” button shuffles the character mapping, allowing for a new encryption scheme each time — ensuring that every message is uniquely encoded.</p>
        <br>
        <p class="p">Check it out at this link: <a href="https://danieldkdao.github.io/encryptDecrypt/" target="_blank" style="text-decoration: underline; color:blue;">Message Encryption Decryption</a></p>
    </div>`;
const otherCode = `<div class="content3">
        <h2>Entrepreneurship Challenge</h2>
        <p class="p">My brother Lawrence and I, won first place in the 2025 <a href="https://lawrencekstimes.com/2025/02/10/2025-dgco-yec/" target="_blank" style="text-decoration: underline; color: blue;">Douglas County Youth Entrepreneurship Challenge.</a> Our business, “Don’t Panic AI Tutors,” offers tutoring and workshops to help students understand AI, get curious about it, and build the skills they’ll need in a tech-driven world. Our mission is to make AI education fun, accessible, and empowering for students.</p>
        <br>
        <p class="p">We went on to compete at the 2025 <a href="https://networkkansas.com/student-innovators-take-the-spotlight-at-the-2025-kansas-entrepreneurship-challenge/" target="_blank" style="text-decoration: underline; color: blue;">Kansas Entrepreneurship Challenge</a>, hosted by Network Kansas, where we received the Exemplary Award — the highest honor at the competition. The recognition really encouraged us to keep growing our project.</p>
    </div>
    <div class="content3">
        <h2>Jazz</h2>
        <p class="p">I've been learning guitar for about three years now, and this summer I went to the Coleman Hawkins Jazz Camp. It was a really fun experience — I met some great friends, played a lot of music, and learned so much from the instructors and other musicians. It helped me grow a lot as a guitarist and made me even more excited to keep practicing and improving.</p>
    </div>`;

stem.addEventListener('click', () => {
    inner.innerHTML = stemCode;
    other.classList.add("unselect");
    stem.classList.remove("unselect");
    coding.classList.add("unselect");
})
coding.addEventListener('click', () => {
    inner.innerHTML = codeCode;
    stem.classList.add("unselect");
    other.classList.add("unselect");
    coding.classList.remove("unselect");
})
other.addEventListener('click', () => {
    inner.innerHTML = otherCode;
    other.classList.remove("unselect");
    stem.classList.add("unselect");
    coding.classList.add("unselect");
})
