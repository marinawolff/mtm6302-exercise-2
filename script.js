//Creates array and adds objects with images and description to the array
const images = [
    {name: 'image-1', description: 'Image 1'},
    {name: 'image-2', description: 'Image 2'},
    {name: 'image-3', description: 'Image 3'},
    {name: 'image-4', description: 'Image 4'},
    {name: 'image-5', description: 'Image 5'},
    {name: 'image-6', description: 'Image 6'},
    {name: 'image-7', description: 'Image 7'},
    {name: 'image-8', description: 'Image 8'},
    {name: 'image-9', description: 'Image 9'},
    {name: 'image-10', description: 'Image 10'},
    {name: 'image-11', description: 'Image 11'},
    {name: 'image-12', description: 'Image 12'},
]


//adds images dynamically to the gallery
const $image = document.getElementById('img-gallery')

const html = []

for (const image of images){
    html.push(`<div class="img" id="unique-image"><img class="each-image" data-description="${image.description}" data-image="${image.name}" src="images/${image.name}.jpg"></div>`)
}

$image.innerHTML = html.join('')

//makes the images interactive

//mouseover eventListener
const hover = document.querySelectorAll('.img')

for(let i = 0; i < images.length; i++) {
    hover[i].addEventListener("mouseover", function() {
        hover[i].style.opacity = 0.6;
})};

for(let i = 0; i < images.length; i++) {
hover[i].addEventListener("mouseout", function() {
    hover[i].style.opacity = 1.0;
})};


//click eventListener 
display = 'name'

function switchDisplay(e){
    const $allImages = document.querySelectorAll('.img')


    console.log(e.target)

    if(display === 'name'){
            // added if statment to select only images with the class "each-image" 
            if(e.target.classList.contains('each-image')){
            $image.innerHTML = `<p class = "text"> You clicked on ${e.target.dataset.description}!</p>`
        }

        display = 'description'
    } else {
           $image.innerHTML = html.join('')
            

           const hover = document.querySelectorAll('.img')

            for(let i = 0; i < images.length; i++) {
                hover[i].addEventListener("mouseover", function() {
                    hover[i].style.opacity = 0.6;
            })};

            for(let i = 0; i < images.length; i++) {
            hover[i].addEventListener("mouseout", function() {
                hover[i].style.opacity = 1.0;
            })};

    display = 'name'
    }
  }

  $image.addEventListener('click', switchDisplay)