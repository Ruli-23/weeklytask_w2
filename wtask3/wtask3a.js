function checkEvenOdd(number) {
    return new Promise((resolve, reject) => {
      if (typeof number === "number") {
        if (number % 2 === 0) {
          resolve("Angka genap");
        } else {
          resolve("Angka ganjil");
        }
      } else {
        reject("Input bukan angka");
      }
    });
  }
  checkEvenOdd(4)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
