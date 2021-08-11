
  function smallestNum(arr) {
    let range = [];
    for (let i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
      range.push(i);
    }

   let nok = range[0];
   for (i = 1; i < range.length; i++) {
    let GCD = nod(nok, range[i]);
    nok = (nok * range[i]) / GCD;
  }
  return nok;

  function nod(a, b)  {
    if (b === 0)
      return a;
    else
      return nod (b, a % b);
  }
}
   console.log(smallestNum([4, 12, 14]));