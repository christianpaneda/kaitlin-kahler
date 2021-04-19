const pixelsTag = document.querySelector("h3.pixel")
const bodyTag = document.querySelector("body")

// when scrolling the page, update the pixels tag 

document.addEventListener("scroll", () => {
    const pixels = window.pageYOffset
    const height = bodyTag.getBoundingClientRect().height
    const totalDistance = height - window.innerHeight
    const percentage = (pixels / totalDistance) * 100

    pixelsTag.innerHTML = "Progress: "  + Math.round(percentage) + "%";
});

 




