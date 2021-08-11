let a = prompt("Enter a value");
let b, sum = 0;
let z = a;
while(a > 0)
{
  b = a % 10;
  sum = sum * 10 + b;
  a = parseInt(a / 10);
}
alert(sum);