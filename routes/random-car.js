const randomCar = galleryArray => {
  return galleryArray[Math.floor(Math.random() * galleryArray.length)] // return a random number
}

module.exports = randomCar // export randomCar