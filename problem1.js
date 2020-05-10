// 1st
function prime() {
    let num = [3, 11, 16, 99, 56, 22];
    let txt = "";
    for (let j = 0; j < num.length; j++) {
        if (num[j] < 2) {
            return false;
        }
        if (num[j]===2){
            return true;
        }
        let root = Math.ceil(Math.sqrt(num[j]));
        console.log(root);
        for (let i = 2; i < root; i++) {
            if (num[j] % i == 0) {
                return false;
            }
        }
        txt += num[j] + " ";
        document.getElementById("demo1").innerHTML = txt + " Are even numbers" ;

    }
}


// 2nd
function frequent() {
    let number = [1, 6, 23, 36, 34, 34, 34, 23, 23, 23, 2];
    let count = 0;
    let max = 1;
    let array = " ";
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] == number[j]) {
                count++;
            }
        }
        if (max < count) {
            max = count;
            array = number[i];
        }

    }
    document.getElementById("demo2").innerHTML = array;
}

// 3rd
function swap() {
    let stmt = "The Quick Brown Fox";
    let captializeString = (str) => str[0].toLowerCase() + str.slice(1).toUpperCase();
    let content = stmt.split(' ').map(captializeString).join(' ');
    document.getElementById("demo3").innerHTML = content;
}

// 4th 
function sumOfSquares() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let total = 0;
    for (let m = 0; m < arr.length; m++) {
        total += arr[m]*arr[m];
        document.getElementById("demo4").innerHTML = total;
    }
}

// 5th
function oddOrEven() {
    let stmt1 = " ";
    let stmt2 = " ";
    for (let k = 0; k <= 15; k++) {
        if (k % 2 === 0) {
            stmt1 += k + " , ";
            document.getElementById("demo5").innerHTML = stmt1 + " Are even numbers. ";
            console.log(k + " is even");
        }
        else {
            stmt2 += k + " , ";
            document.getElementById("demo55").innerHTML = stmt2 + " Are odd numbers. ";
            console.log(k + " is odd");
        }
    }
}

