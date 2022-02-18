//Creates array and adds the images and description as a objects to the array
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
    html.push(`<div class="img"><img data-description="${image.description}" src="images/${image.name}.jpg">
                <p>${image.description}</p></div>`)
}

$image.innerHTML = html.join('')

//makes the images interactive
//click

// const imgs = document.querySelectorAll('.img')

// function imgClick(e){

// }

// img.addEventLiseter('click', imgClick))




//makes the images interactive
//click

display = 'name'

function switchDisplay(e){
    const $allImages = document.querySelectorAll('.img')

    console.log(e.target)

    if(display === 'name'){
        // for (const $image of $allImages) {
            $image.innerHTML = ` <p>${e.target.dataset.description}</p>`
        // }
        display = 'description'
    } else {
        // for (const $image of $allImages) {
            $image.innerHTML = `<img src="images/${$image.dataset.name}.jpg">`
    // }
    display = 'name'
  }
}

$image.addEventListener('click', switchDisplay)
