function divideAndSort(input) {
    if (typeof input !== "number") {
      return "Input harus berupa angka";
    }
  
    const sortedNumbers = input
      .toString()
      .split("0")
      .map((group) => group.split("").sort().join(""))
      .join("");
  
    return parseInt(sortedNumbers);
  }
  
  console.log(divideAndSort(5956560159466056)); // Output: 55566914566956
  