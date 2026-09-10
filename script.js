/* ==========================================
   MASHAL AHMAD PORTFOLIO
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio Loaded");


    /* ======================================
       PHOTO LOAD CHECK
    ====================================== */

    const photo =
        document.querySelector(".photo-box img");

    if (photo) {

        photo.addEventListener("error", function () {

            console.log(
                "Photo not found. Put profile.jpg inside image folder."
            );

        });

    }


    /* ======================================
       SKILLS SCROLL ANIMATION
    ====================================== */

    const skills =
        document.querySelectorAll(".skill");

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    skills.forEach(function (skill) {

        observer.observe(skill);

    });


    /* ======================================
       CONTACT CLICK
    ====================================== */

    const contactCards =
        document.querySelectorAll(".contact-card");

    contactCards.forEach(function (card) {

        card.addEventListener("click", function () {

            console.log("Contact option selected");

        });

    });

});