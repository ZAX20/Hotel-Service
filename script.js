const containerTag = document.querySelector(".container");
const liTag = document.querySelector("li");
const ulTag = document.querySelector("ul");
const sliderTag = document.querySelector(".slider");

const homeInfoTag = document.querySelector(".homeInfo");
const homeBtnTag = document.querySelector(".homeBtn");

const showroomBtnTag = document.querySelector(".showroomBtn");
const showroomInfoTag = document.querySelector(".showroomDiv");
const boxDivTag = document.querySelector(".boxDiv");

const bookNowBtnTag = document.querySelector(".bookNowBtn");
const bookNowTag = document.querySelector(".bookNowDiv");

const contactUsBtnTag = document.querySelector(".contactBtn");
const contactUsTag = document.querySelector(".contactUsDiv");

const addressBtnTag = document.querySelector(".adressBtn");
const addressDivTag = document.querySelector(".addressDiv");



// homeBtnTag.addEventListener('load', function() {
//     homeInfoTag.classList.add("showHomeInfo");
//     homeInfoTag.appendChild(homeInfoTag);
//     showroomInfoTag.remove();
//     console.log("clicked");
// });
function restoreHomeInfo () {
    showroomInfoTag.remove();
    bookNowTag.remove();
    contactUsTag.remove();
    addressDivTag.remove();
    containerTag.appendChild(homeInfoTag);
}

homeBtnTag.addEventListener("click", restoreHomeInfo);

showroomBtnTag.addEventListener("click", () => {
    homeInfoTag.remove();
    bookNowTag.remove();
    contactUsTag.remove();
    addressDivTag.remove();
    if (showroomInfoTag.remove) {
        containerTag.append(showroomInfoTag);
    }
    showroomInfoTag.classList.add("showShowroomInfo");
    // showroomInfoTag.classList.add("")
});

bookNowBtnTag.addEventListener("click", () => {
    addressDivTag.remove();
    contactUsTag.remove();
    showroomInfoTag.remove();
    homeInfoTag.remove();
    if (bookNowTag.remove) {
        containerTag.append(bookNowTag);
    }
        bookNowTag.classList.add("showBookNowInfo");
});

contactUsBtnTag.addEventListener("click", () => {
    homeInfoTag.remove();
    showroomInfoTag.remove();
    bookNowTag.remove();
    addressDivTag.remove();
    if (contactUsTag.remove) {
        containerTag.append(contactUsTag);
    }
    contactUsTag.classList.add("showContactUsInfo");
    
});

addressBtnTag.addEventListener("click", () => {
    if (addressDivTag.remove) {
        containerTag.append(addressDivTag);
    }
    homeInfoTag.remove();
    showroomInfoTag.remove();
    contactUsTag.remove();
    bookNowTag.remove();
    addressDivTag.classList.add("showAddressDiv");
})