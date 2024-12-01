function getDataFromServer(status, callback) {
    setTimeout(function (){
        if (status) {
            callback(["product 1 ", "product 2", "product 3"], null);
        }else {
            const err = new Error("Failed to Fatch Data");
            err.name = "error";
            callback(null, err);
        }
    }), 3000;
}

//callback dan trycatch
function processData() {
    getDataFromServer(true, (data, err) => {
        if (err) {
            console.log(err.message);
        }else {
            console.log(data)
        }
    });
}
processData()