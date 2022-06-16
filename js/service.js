const update = () => {
    const section = document.getElementsByTagName("section");
    let pageNum;

    const element = [
        {
            service: document.querySelector(".service"),
            first_text: document.querySelector(".first-text"),
            install_button : document.querySelector(".install-button")
        },
        {
            intro: document.querySelector(".section-1-under .intro"),
            first_text_1: document.querySelector(".section-1-under .first-text-1"),
            img: document.querySelector(".section-1-under .icon"),
            second_text_1 : document.querySelector(".section-1-under .second-text-1")
        },
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
    ]

    console.log(element[1].img)

    window.addEventListener("scroll", () => {
        let yOffset = window.pageYOffset;

        for (let i = 0; i < section.length; i++){
            if (yOffset > section[i].offsetTop - window.innerHeight/2 && yOffset < section[i].offsetTop - window.innerHeight/2 + section[i].offsetHeight) {
                pageNum = i;
                break;
            }
        }
        pageEffect()
    })

    const pageEffect = () => {
        switch (pageNum) {
            case 0:
                break;
            case 1:
                element[pageNum].intro.style.opacity = 1;
                element[pageNum].intro.style.transform = 'none';
                element[pageNum].first_text_1.style.opacity = 1;
                element[pageNum].first_text_1.style.transform = 'none';
                element[pageNum].img.style.opacity = 1;
                element[pageNum].img.style.transform = 'none';
                element[pageNum].second_text_1.style.opacity = 1;
                break;
            case 2:
                section[pageNum].classList.add("active");
                break;
            case 3:
                section[pageNum].classList.add("active");
                break;
            case 4:
                section[pageNum].classList.add("active");
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
        }
    }

}

window.addEventListener("load", update);