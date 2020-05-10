// 1st
function prime() {
    let arr = ["2","1", "11", "7", "22", "99", "2", "16", "43", "7"];
    let num = arr[0];
    document.getElementById("demo1").innerHTML = num;
    if (num % 2 === 0 || num !== 2) {
        document.getElementById("demo1").innerHTML = num + " is non-prime ";
    }

    for (let i = 3, s=Math.sqrt(num); i<=s; i+=2){
        if(num % i === 0){
            document.getElementById("demo1").innerHTML = txt;
        }
        let root = Math.ceil(Math.sqrt(num[y]));
        console.log(root);
        for (let x = 2; x < root; x++) {
            if (num[y] % x === 0 || num[y] < 2) {
                return false;
            }
            
        }
        txt += num[y] + " ";
        document.getElementById("demo1").innerHTML = txt;
    }
}

// function prime() {
//     let num = ["2","1", "11", "7", "22", "99", "2", "16", "43", "7"];
//     let txt = "";
//     for (let y = 0; y <= num.length; y++) {
//         let root = Math.ceil(Math.sqrt(num[y]));
//         console.log(root);
//         for (let x = 2; x < root; x++) {
//             if (num[y] % x === 0 || num[y] < 2) {
//                 return false;
//             }
            
//         }
//         txt += num[y] + " ";
//         document.getElementById("demo1").innerHTML = txt;
//     }
// }





// function prime() {
    // let num = ["3", "11", "7","22", "99", "2","16", "43", "7"];
    // let txt = "";
    // for (let j = 0; j < num.length; j++) {
    //         let root = Math.ceil(Math.sqrt(num[j]));
    //         console.log(root);
    //         for (let i = 2; i < root+1; i++) {
    //             if (num[j] % i == 0 || num[j]<=1) {
    //                 return false;


    //             }

    //         }        txt += num[j] + " ";
    //                 document.getElementById("demo1").innerHTML = txt;




    //     }
    // }


// function prime() {
//     let num = [3, 11, 16, 99, 2, 43, 7];
//     let txt = "";
//     for (let j = 0; j < num.length; j++) {
//         if (num[j] < 2) {
//             return false;
//         }
//         if (num[j]===2){
//             return true;
//         }
//         let root = Math.ceil(Math.sqrt(num[j]));
//         console.log(root);
//         for (let i = 2; i < root; i++) {
//             if (num[j] % i == 0) {
//                 return false;
//             }
//         }
//         txt += num[j] + " ";
//         document.getElementById("demo1").innerHTML = txt;

//     }
// }


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
    var sentence = "The Quick Brown Fox";
    var captializeString = (str) => str[0].toLowerCase() + str.slice(1).toUpperCase();
    var words = sentence.split(' ').map(captializeString).join(' ');
    document.getElementById("demo3").innerHTML = words;
}

// 4th 
function sumOfSquares() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let total = 0;
    for (let m = 0; m <= arr.length; m++) {
        total += Math.pow(arr[i],2);
        document.getElementById("demo4").innerHTML = total;

          // i = arr.length;
        // while(i--)
     }
}

// 5th
function oddOrEven() {
    let stmt1 = " ";
    let stmt2 = " ";
    for (let k = 0; k <= 15; k++) {
        if (k % 2 === 0) {
            stmt1 += k + " , ";
            document.getElementById("demo5").innerHTML = stmt1 + " Are even numbers. " ;
            console.log(k + " is even");
        }
        else {
            stmt2 += k + " , ";
            document.getElementById("demo55").innerHTML = stmt2 + " Are odd numbers. ";
            console.log(k + " is odd");
        }
    }
}