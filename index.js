//Aligned the header at the top of the page to the left
let header = document.querySelector('#page-header')
header.style.textAlign = "left"

//Rounding off the images on the page
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = "50px"
}

//Aligned all dog names to the left
let dogNames = document.querySelectorAll('.dog-name')

//Changed the color of the footer text
let footer = document.querySelector('.footer')
footer.style.color = "blue"
footer.style.borderStyle = "solid"

// Select some elements...