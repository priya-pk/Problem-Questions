//6th
function truncate() {
  var inptxt = document.getElementById("inptxt").value;
  if (inptxt.length > 10) {
    var quotes = "";
    for (var i = 0; i < 10; i++) {
      quotes += inptxt[i];
    }
    quotes += "...";
    inptxt = quotes;
    document.getElementById("demo6").innerHTML = inptxt;
  }
}



//7th

function findLarge(m, n) {
  if (m > n) {
    document.getElementById("demo7").innerHTML = + m + " is greatest.";
  }
  else if (m == n) {
    document.getElementById("demo7").innerHTML = " Both are equal";
  }
  else {
    document.getElementById("demo7").innerHTML = + n + " is greatest.";
  }
  console.log(findLarge(11, 16));
}

// 8th
function alphabetics() {
  var obj = {cont:"hello world"};
  for (var i = 0 in obj) {
    var x=obj[i].split('').sort().join('');
    document.getElementById("demo8").innerHTML = x;
  }
}


function alphabetic() {
  var alph = document.getElementById("alph").value;
 alph = alph.split('').sort().join('');
 document.getElementById("demo88").innerHTML = alph;
}







// function alphabetic() {
// var obj = document.getElementById("alph").value;
// for (var i = 0 in obj) {
//   var x=obj[i].split('').sort().join('');
//   document.getElementById("demo8").innerHTML = x;
// }
// }




//9th

function javaa() {
  var string = "Javascript";
  let content;
  for (let x of string){ 
    content =content.concat(string[x]);
    document.getElementById("demo9").innerHTML = content;
    console.log(content);
    // document.getElementById("demo9").innerHTML = content;
    //  document.write(x+ "<br>");
  } 
}




//10th

function star() {
  for (var i = 0; i <= 3; i++) {
    for (var j = 0; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
}


// document.getElementById("demo10").innerHTML = "*";
 // document.getElementById("demo10").innerHTML = " </br> ";