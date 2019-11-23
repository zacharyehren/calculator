const calculator = (calc) => {
    const calcArray = calc.split("");
    let number = calcArray[0];
    let finalArray = [];

    // break out numbers and operators
    for (let i = 1; i < calcArray.length; i++) {
        let char = calcArray[i];

        if (!isNaN(char)) {
            if (number === null) {
                number = char;
            } else {
                number = number + char;
            }
        } else {
            finalArray.push(parseInt(number));
            finalArray.push(char);
            number = null;
        }

        if (i === calcArray.length - 1) {
            finalArray.push(parseInt(number));
        }
    }

    let calculation = finalArray[0];
    const validCalculations = ['*', '/', 'x', '+', '-'];

    // calculate the numbers
    for (let i = 1; i < finalArray.length; i++) {
        let char = finalArray[i];
        let nextNum = finalArray[i + 1];

        if (!isNaN(char)) {
            continue;
        }

        if (!validCalculations.includes(char)) {
            calculation = ` ${char} isn't a thing. What kind of voodoo math are you trying to do?`
            console.log(calculation);
            return;
        }

        switch(char) {
            case "+":
                calculation = calculation + nextNum;
                break;
            case "-":
                    calculation = calculation - nextNum;
                    break;
            case "*":
                    calculation = calculation * nextNum;
                    break;
            case "x":
                    calculation = calculation * nextNum;
                    break;
            case "/":
                    calculation = calculation / nextNum;
                    break;
        }
    }

    console.log(calculation);
}

calculator("2x7+15*100/25-4");