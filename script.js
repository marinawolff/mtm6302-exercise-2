//Creates array and add the images and description as a objects to the array
const images = [
    {name: 'image-1', description: 'HI'},
    {name: 'image-2', description: 'HI'},
    {name: 'image-3', description: 'HI'},
    {name: 'image-4', description: 'HI'},
    {name: 'image-5', description: 'HI'},
    {name: 'image-6', description: 'HI'},
    {name: 'image-7', description: 'HI'},
    {name: 'image-8', description: 'HI'},
    {name: 'image-9', description: 'HI'},
    {name: 'image-10', description: 'HI'},
    {name: 'image-11', description: 'HI'},
    {name: 'image-12', description: 'HI'},
]

//adds images dynamically to the gallery
const $image = document.getElementById('img-gallery')

const html = []

for (const image of images){
    html.push(`<div><img src="images/${image.name}.jpg">
                <h5> ${image.description} </h5></div>`)
}

$image.innerHTML = html.join('')

//makes the images interactive
