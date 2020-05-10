// 6th
function truncate() {
  let inptxt = document.getElementById("inptxt").value;
  if (inptxt.length > 10) {
    let quotes = "";
    for(let i = 0; i < 10; i++) {
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
  let obj = {cont:"hello world"};
  for (var i=0 in obj) {
    let x=obj[i].split('').sort().join('');
    document.getElementById("demo8").innerHTML = x;
  }
}


function alphabetic() {
  let alph = document.getElementById("alph").value;
 alph = alph.split('').sort().join('');
 document.getElementById("demo88").innerHTML = alph;
}


//9th

function javaa() {
  let string = "Javascript";
  let content ="";
  for (let x of string){ 
    for( let y of string){
      content += content.concat(string[]); 
    }
    content +="<br>"
  }
    document.getElementById("demo9").innerHTML = content;
    console.log(content);
  } 



//10th

function star() {
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
}

