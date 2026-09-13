/* =========================================
   PAGE SYSTEM
========================================= */

const pages =
    document.querySelectorAll(".page");


function showPage(id) {

    pages.forEach(page => {
        page.classList.remove("active");
    });


    const target =
        document.getElementById(id);


    if (target) {

        target.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================
   LOADING
========================================= */

setTimeout(() => {

    showPage("codePage");

}, 3500);


/* =========================================
   MUSIC
========================================= */

const music =
    document.getElementById(
        "birthdayMusic"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


let musicPlaying = false;


function startBirthdayMusic() {

    music.volume = 0.65;


    music.play()
        .then(() => {

            musicPlaying = true;

            musicButton.textContent = "♫";

            musicButton.classList.add(
                "playing"
            );

        })
        .catch(error => {

            console.log(
                "Music could not autoplay:",
                error
            );

        });

}


musicButton.addEventListener(
    "click",
    () => {

        if (musicPlaying) {

            music.pause();

            musicPlaying = false;

            musicButton.textContent = "♪";

            musicButton.classList.remove(
                "playing"
            );

        } else {

            music.play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.textContent = "♫";

                    musicButton.classList.add(
                        "playing"
                    );

                })
                .catch(() => {

                    console.log(
                        "Music file not found."
                    );

                });

        }

    }
);


/* =========================================
   SECRET CODE
========================================= */

const SECRET_CODE =
    "150997";


let enteredCode = "";


const dots =
    document.querySelectorAll(
        "#codeDots span"
    );


const codeMessage =
    document.getElementById(
        "codeMessage"
    );


function updateDots() {

    dots.forEach(
        (dot, index) => {

            if (
                index <
                enteredCode.length
            ) {

                dot.classList.add(
                    "filled"
                );

            } else {

                dot.classList.remove(
                    "filled"
                );

            }

        }
    );

}


/* NUMBER BUTTONS */

document
    .querySelectorAll(
        ".keypad button[data-number]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (
                    enteredCode.length >=
                    SECRET_CODE.length
                ) {

                    return;

                }


                enteredCode +=
                    button.dataset.number;


                updateDots();

            }
        );

    });


/* CLEAR */

document
    .getElementById("clearCode")
    .addEventListener(
        "click",
        () => {

            enteredCode = "";

            codeMessage.textContent = "";

            updateDots();

        }
    );


/* SUBMIT */

document
    .getElementById("submitCode")
    .addEventListener(
        "click",
        () => {

            if (
                enteredCode ===
                SECRET_CODE
            ) {

                codeMessage.textContent =
                    "Correct ♡";


                /*
                    Musik dimulai setelah
                    password benar.
                */

                startBirthdayMusic();


                setTimeout(
                    () => {

                        showPage(
                            "giftPage"
                        );

                    },
                    900
                );


            } else {

                codeMessage.textContent =
                    "Hmm... try again ♡";


                enteredCode = "";

                updateDots();

            }

        }
    );


/* =========================================
   GIFT BOX
========================================= */

const giftBox =
    document.getElementById(
        "giftBox"
    );


giftBox.addEventListener(
    "click",
    () => {

        giftBox.classList.add(
            "opened"
        );


        setTimeout(
            () => {

                showPage(
                    "memoriesPage"
                );

            },
            900
        );

    }
);


/* =========================================
   PHOTO POLAROIDS
========================================= */

const polaroids =
    document.querySelectorAll(
        ".polaroid"
    );


const photoModal =
    document.getElementById(
        "photoModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const closePhoto =
    document.getElementById(
        "closePhoto"
    );


/*
    Klik polaroid
    → foto diperbesar
*/

polaroids.forEach(
    polaroid => {

        polaroid.addEventListener(
            "click",
            () => {

                const photo =
                    polaroid.dataset.photo;


                modalImage.src =
                    photo;


                photoModal.classList.add(
                    "active"
                );

            }
        );

    }
);


/*
    Tutup foto
*/

function closePhotoModal() {

    photoModal.classList.remove(
        "active"
    );


    setTimeout(
        () => {

            modalImage.src = "";

        },
        350
    );

}


closePhoto.addEventListener(
    "click",
    closePhotoModal
);


/*
    Klik area luar foto
*/

photoModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            photoModal
        ) {

            closePhotoModal();

        }

    }
);


/*
    ESC di keyboard
    untuk desktop/laptop
*/

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closePhotoModal();

        }

    }
);


/* =========================================
   TO LETTER
========================================= */

document
    .getElementById("toLetter")
    .addEventListener(
        "click",
        () => {

            showPage(
                "letterPage"
            );

        }
    );


/* =========================================
   ENVELOPE
========================================= */

const envelope =
    document.getElementById(
        "envelope"
    );


envelope.addEventListener(
    "click",
    () => {

        envelope.classList.toggle(
            "open"
        );

    }
);


/* =========================================
   TO FINAL BIRTHDAY
========================================= */

document
    .getElementById("toBirthday")
    .addEventListener(
        "click",
        () => {

            showPage(
                "birthdayPage"
            );


            createConfetti();

        }
    );


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );


    container.innerHTML = "";


    const symbols = [
        "✦",
        "♡",
        "✿",
        "•"
    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.classList.add(
            "confetti"
        );


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 +
            "%";


        piece.style.animationDuration =
            (
                3 +
                Math.random() * 4
            ) + "s";


        piece.style.animationDelay =
            Math.random() * 2 +
            "s";


        piece.style.fontSize =
            (
                8 +
                Math.random() * 12
            ) + "px";


        container.appendChild(
            piece
        );

    }

}


/* =========================================
   FINAL BUTTON
========================================= */

document
    .getElementById("closeBirthday")
    .addEventListener(
        "click",
        () => {

            const button =
                document.getElementById(
                    "closeBirthday"
                );


            button.textContent =
                "♡ Made with love ♡";


            createConfetti();

        }
    );