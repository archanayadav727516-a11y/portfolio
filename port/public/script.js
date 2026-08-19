const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.classList.toggle("open", isOpen);

});


/* Close menu when clicking a navigation link */

document.querySelectorAll(".nav-tabs a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.classList.remove("open");

    });

});


/* =====================================================
   SCROLL SPY — highlight the active editor tab
===================================================== */

const sections = document.querySelectorAll("section[id]");
const tabs = document.querySelectorAll(".tab");

const spyObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const id = entry.target.getAttribute("id");

                tabs.forEach((tab) => {

                    const link = tab.querySelector("a");
                    const isMatch = link.getAttribute("href") === `#${id}`;

                    tab.classList.toggle("active", isMatch);

                });

            }

        });

    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
);

sections.forEach((section) => spyObserver.observe(section));