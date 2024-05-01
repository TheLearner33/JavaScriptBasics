function test(input) {
    let index=0;
    let myName = input[index]; // Assuming the first element is a string
  
    for (let j = 0; j < myName.length; j++) {
      let character = myName[j];
      console.log(character);
    }
    index++;
    
  }
  
  test(["Stefan"]);