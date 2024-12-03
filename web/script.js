const images = [


    '../images/hust1.jpg',

    '../images/hust2.jpg',

    '../images/hust3.jpg',

    '../images/hust4.jpg',

    '../images/hust5.jpg',

    '../images/hust6.jpg',

];

const randomIndex = Math.floor(Math.random() * images.length);
document.getElementById('randomImage').src = images[randomIndex];

