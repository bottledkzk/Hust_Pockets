const images = [


    '../images/hust1.jpg',

    '../images/hust2.jpg',

    '../images/hust3.jpg',

    '../images/hust4.jpg',

    '../images/hust5.jpg',

    '../images/hust6.jpg',

    '../images/hust7.jpg',

    '../images/hust8.jpg',

    '../images/hust9.jpg',

    '../images/hust10.jpg',

    '../images/hust11.jpg',

    '../images/hust12.jpg',

    '../images/hust13.jpg',

    '../images/hust14.jpg',

    '../images/hust15.jpg',

    '../images/hust16.jpg',

    '../images/hust17.jpg',

    '../images/hust18.jpg',

    '../images/hust19.jpg',


];

const randomIndex = Math.floor(Math.random() * images.length);
document.getElementById('randomImage').src = images[randomIndex];

