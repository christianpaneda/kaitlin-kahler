const pixelsTag = document.querySelector("h3.pixel")
const bodyTag = document.querySelector("body")
const sectionThresholds = document.querySelectorAll("section")
const aboutTag = document.querySelector("h2.about") 
const headerTag = document.querySelector("header")


// when scrolling the page, update the pixels tag 

document.addEventListener("scroll", () => {
    const pixels = window.pageYOffset
    const height = bodyTag.getBoundingClientRect().height
    const totalDistance = height - window.innerHeight
    const percentage = (pixels / totalDistance) * 100

    pixelsTag.innerHTML = "Progress: "  + Math.round(percentage) + "%";
});

// offset check for each section

document.addEventListener("scroll", () => {
    const pixels = window.pageYOffset

    sectionThresholds.forEach(section => {
        if (section.offsetTop <= pixels){
            aboutTag.innerHTML = section.getAttribute("data-kaitlin")
            

            if (section.classList.contains("data-is-dark")){
                headerTag.classList.add("white")
            }
            else{
                headerTag.classList.remove("white")
            }
        }

      
    })

})

// user scrolls [done]
// check if it has passed the threshold
// if it has passed the threshold, then change the title
// if it has passed the threshold, then change the color