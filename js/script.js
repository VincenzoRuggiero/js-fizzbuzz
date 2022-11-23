const containerElem = document.querySelector(".container");

for (i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 3 === 0) {
    containerElem.innerHTML += `<p class="fizz">Fizz</p>`;

    if (i % 5 === 0) {
      containerElem.innerHTML += `<p class="buzz">Buzz</p>`;
    }

    if (i % 3 === 0 && i % 5 === 0) {
      containerElem.innerHTML += `<p class="fizzbuzz">FizzBuzz</p>`;
    }
  }
}
