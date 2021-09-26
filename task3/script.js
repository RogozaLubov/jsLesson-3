
  function smallestNum(numberFirst, numberSecond) {
    let i = 0;
    let result = true;
    do {
        i++;
        result = ((parseFloat(i%numberFirst) == 0) &&
                  (parseFloat(i%numberSecond) == 0)) ? false : true;
    } while(result);
    alert("Наименьшее общее кратное чисел "+numberFirst+" и "+numberSecond+" = "+i);
    return i;
}