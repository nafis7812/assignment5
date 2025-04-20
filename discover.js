document.getElementById('discover').addEventListener('click', function locationUrl() {
    location.href = 'main.html';
  });
  
  document.getElementById('color').addEventListener('click', function() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  } )

  document.getElementById('box').addEventListener('click', function () {
    // Get the number element
    const numberElement = document.getElementById("number");

    // Convert current number text to integer
    let currentNumber = parseInt(numberElement.textContent);

    // Reduce it by 1
    numberElement.textContent = currentNumber - 1;
    
    alert("Board updated successfully!");

    // Hide the button
    document.getElementById("Button").style.display = "none";
  } )

  document.getElementById('box1').addEventListener('click', function () {
    // Get the number element
    const numberElement = document.getElementById("number");

    // Convert current number text to integer
    let currentNumber = parseInt(numberElement.textContent);

    // Reduce it by 1
    numberElement.textContent = currentNumber - 1;

    alert("Board updated successfully!");

    // Hide the button
    document.getElementById("Button1").style.display = "none";
  } )

  document.getElementById('box2').addEventListener('click', function () {
    // Get the number element
    const numberElement = document.getElementById("number");

    // Convert current number text to integer
    let currentNumber = parseInt(numberElement.textContent);

    // Reduce it by 1
    numberElement.textContent = currentNumber - 1;

    alert("Board updated successfully!");

    // Hide the button
    document.getElementById("Button2").style.display = "none";
  } )

  document.getElementById('box3').addEventListener('click', function () {
    // Get the number element
    const numberElement = document.getElementById("number");

    // Convert current number text to integer
    let currentNumber = parseInt(numberElement.textContent);

    // Reduce it by 1
    numberElement.textContent = currentNumber - 1;

    alert("Board updated successfully!");

    // Hide the button
    document.getElementById("Button3").style.display = "none";
  } )

  document.getElementById('box4').addEventListener('click', function () {
    // Get the number element
    const numberElement = document.getElementById("number");

    // Convert current number text to integer
    let currentNumber = parseInt(numberElement.textContent);

    // Reduce it by 1
    numberElement.textContent = currentNumber - 1;

    alert("Board updated successfully!");

    // Hide the button
    document.getElementById("Button4").style.display = "none";
  } )

  document.getElementById('box5').addEventListener('click', function () {
    // Get the number element
    const numberElement = document.getElementById("number");

    // Convert current number text to integer
    let currentNumber = parseInt(numberElement.textContent);

    // Reduce it by 1
    numberElement.textContent = currentNumber - 1;

    alert("Board updated successfully!");

    // Hide the button
    document.getElementById("Button5").style.display = "none";
  } )

  const button = document.getElementById("Button");
    const number1 = document.getElementById("number1");

    button.addEventListener("click", () => {
      // Increase the number by 1
      number1.textContent = parseInt(number1.textContent) + 1;

      // Hide the button
      button.style.display = "none";
    });

    const button1 = document.getElementById("Button1");
    const number2 = document.getElementById("number1");

    button1.addEventListener("click", () => {
      // Increase the number by 1
      number2.textContent = parseInt(number2.textContent) + 1;

      // Hide the button
      button1.style.display = "none";
    });

    const button2 = document.getElementById("Button2");
    const number3 = document.getElementById("number1");

    button2.addEventListener("click", () => {
      // Increase the number by 1
      number3.textContent = parseInt(number3.textContent) + 1;

      // Hide the button
      button2.style.display = "none";
    });

    const button3 = document.getElementById("Button3");
    const number4 = document.getElementById("number1");

    button3.addEventListener("click", () => {
      // Increase the number by 1
      number4.textContent = parseInt(number4.textContent) + 1;

      // Hide the button
      button3.style.display = "none";
    });

    const button4 = document.getElementById("Button4");
    const number5 = document.getElementById("number1");

    button4.addEventListener("click", () => {
      // Increase the number by 1
      number5.textContent = parseInt(number5.textContent) + 1;

      // Hide the button
      button4.style.display = "none";
    });

    const button5 = document.getElementById("Button5");
    const number6 = document.getElementById("number1");

    button5.addEventListener("click", () => {
      // Increase the number by 1
      number6.textContent = parseInt(number6.textContent) + 1;

      // Hide the button
      button5.style.display = "none";
    });

    



   