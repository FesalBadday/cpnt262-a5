const randomCar = galleryArray => {
  return galleryArray[Math.floor(Math.random() * galleryArray.length)];
}

module.exports = randomCar