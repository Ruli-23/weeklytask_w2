function fetchData(status) {
    return new Promise(function(resolve, reject){
      setTimeout(function() {
        if (status === true) {
          resolve("Data berhasil diambil");
        } else {
          reject("Gagal mengambil data");
        }
      }, 3000);
    });
  }
  
// menggunakan then-catch
fetchData(true)
  .then((hasil) => console.log(`hasil: ${hasil}`))
  .catch((error) => console.log(`hasil: ${error}`));

// menggunakan try-catch/ async await
async function prosesData(){
    try{
        const result = await fetchData(false)
        console.log(`hasil: ${result}`);
    }catch(error){
        console.log(error)
    }
}
prosesData()