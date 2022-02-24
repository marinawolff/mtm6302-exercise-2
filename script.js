//Creates array and adds the images to the array
const images = [ 'image-1', 'image-2', 'image-3', 'image-4', 'image-5', 'image-6', 'image-7', 'image-8', 'image-9', 'image-10', 'image-11', 'image-12'];

//adds images dynamically to the gallery
const $image = document.getElementById('img-gallery')

const html = []

for (const image of images){
    html.push(`<div class="img" id="unique-image"><img src="images/${image}.jpg"></div>`)
}

$image.innerHTML = html.join('')

//makes the images interactive
//mouseover
const hover = document.querySelectorAll('.img')


for(let i = 0; i < images.length; i++) {
    hover[i].addEventListener("mouseover", function(){
        hover[i].style.opacity = 0.6;
})};

for(let i = 0; i < images.length; i++) {
hover[i].addEventListener("mouseout", function() {
    hover[i].style.opacity = 1.0;
})};


//click

// -------------------------------------------------------------------------------------------------------------
display = 'images'

function switchDisplay(e){
    
    console.log(e.target)

    if(display === 'images'){
               $image.innerHTML = `<div class = "text"> <p> You clicked on the image!</p></div>`
            //    <div class="img" id="unique-image"><img src="images/${$image}.jpg"></div>`

       } else {
               $image.innerHTML = `<img src="images/${$image}.jpg">`
       display = 'images'
     }
}

$image.addEventListener('click', switchDisplay)
//------------------------------------------------------------------------------------------------------------------



