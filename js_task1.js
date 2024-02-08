// print number from 1 to 10

//   console.log("using for loop");
for (let i = 1; i <= 10; i++) {
  // console.log(`${i}`);
}

//   console.log("using while loop");
let j = 1;
while (j <= 10) {
  //   console.log(`${j}`);
  j++;
}

function myfun() {
  console.log("using do while loop");
  let k = 1;
  do {
    console.log(`${k}`);
    k++;
  } while (k <= 10);
}

myfun();
