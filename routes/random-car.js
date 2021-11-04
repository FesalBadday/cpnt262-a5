const randomCar = galleryArray => {
  return galleryArray[Math.floor(Math.random() * galleryArray.length)];
}

//const randomCar = galleryArray[Math.floor(Math.random() * galleryArray.length)];

module.exports = randomCar