document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navUl = document.querySelector("#nav-links ul");
    const icon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", () => {
        navUl.classList.toggle("open");

        if (navUl.classList.contains("open")) {
            icon.classList.replace("fa-bars", "fa-xmark");
        } else {
            icon.classList.replace("fa-xmark", "fa-bars");
        }
    });
});
// const menuToggle = document.getElementById("menu-toggle");
//     const navLinks = document.querySelector("na ");

//     if (menuToggle && navLinks) {
//         menuToggle.addEventListener("click", () => {
//             console.log("Toggle clicked!");
//             navLinks.classList.toggle("active");
//         });

//         document.querySelectorAll("nav ul li a").forEach(link => {
//             link.addEventListener("click", () => {
//                 navLinks.classList.remove("active");
//             });
//         });
//     }

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.testimonial-track');
    const dots = document.querySelectorAll('.dot');

    if (track && dots.length) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const moveAmount = index * 1160;

                track.style.transform = `translateX(-${moveAmount}px)`;

                document.querySelector('.dot.active')?.classList.remove('active');
                dot.classList.add('active');
            });
        });
    }

});

const track = document.querySelector('.testimonial-track');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const moveAmount = index * 1160; 
        
        track.style.transform = `translateX(-${moveAmount}px)`;
        document.querySelector('.dot.active').classList.remove('active');
        dot.classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".testimonial-track");
  const dots = document.querySelectorAll(".dot");

  if (!track || !dots.length) return;

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {

      let moveBy;

      if (window.innerWidth <= 765) {
        // MOBILE → 1 card
        moveBy = index * 100;
        track.style.transform = `translateX(-${moveBy}%)`;
      } else {
        // DESKTOP → 2 cards
        const cardWidth = document.querySelector(".test-card").offsetWidth + 20;
        moveBy = index * cardWidth;
        track.style.transform = `translateX(-${moveBy}px)`;
      }

      document.querySelector(".dot.active")?.classList.remove("active");
      dot.classList.add("active");
    });
  });
});

const accHeaders = document.querySelectorAll('.accordion-header');

accHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const body = this.nextElementSibling;
        document.querySelectorAll('.accordion-body').forEach(el => {
            if (el !== body) el.style.maxHeight = null;
        });

        if (body.style.maxHeight) {
            body.style.maxHeight = null;
        } else {
            body.style.maxHeight = body.scrollHeight + "px";
        }
    });
});

const modal = document.getElementById('contactModal');
const btn = document.getElementById('contactBtn');
const close = document.getElementById('closeModal');

btn.onclick = () => modal.style.display = 'block';
close.onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; }
