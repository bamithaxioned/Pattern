
var i,j,k;

document.write("<h2> Pattern 6</h2>");

// /*
// #
// # #
// # # #
// # # # #
// # # # # #
// # # # # # #
// */

var  n = 6;
for (i = 1; i <= 6; i++) { //row
    for (j = 1; j <= i; j++) { //column
        document.write("# ")
    }
    document.write("<br>");
}
document.write("<br>")
// =====================================================================================================================


document.write("<h2> Pattern 1</h2>");

// /*
//      *
//     *A*
//    *A*A*
//   *A*A*A*
//  *A*A*A*A*
//  */

var  n = 5;
for (i = 1; i <= n; i++) { //rows
    for (k = i; k <= n; k++) { //spacing
        document.write("&nbsp;&nbsp;")
    }
    for (j = 1; j < i; j++) { //*A
        document.write("*A")
    }
    document.write("*<br>");
}

// =====================================================================================================================



document.write("<h2> Pattern 3</h2>");
var  n = 3;
for(i=1;i<=n;i++){
    for(j=1;j<=i;j++){
        var c = Math.pow(j,i); //Column to the power row.
        document.write(c+"&nbsp;");
    }
    document.write("<br>")
}
// =====================================================================================================================

document.write("<h2> Pattern 4</h2>");

for (i = 1; i <= 5; i++) {
    for (j = 5; j >= i; j--) {
        document.write("*")
    }
    for (s = 1; s < i; s++) {
        document.write("&nbsp;&nbsp;")
    }
    for (s = 1; s < i; s++) {
        document.write("&nbsp;&nbsp;")
    }
    for (j = 5; j >= i; j--) {
        document.write("*")
    }
    document.write("<br>")
}
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write("*");
    }
    for (s = 4; s >= i; s--) {
        document.write("&nbsp;&nbsp;");
    }
    for (s = 4; s >= i; s--) {
        document.write("&nbsp;&nbsp;");
    }
    for (j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>")
}

// ============================================================================================

document.write("<h2> Pattern 5</h2>");

var s;
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write("*");
    }
    for (s = 4; s >= i; s--) {
        document.write("&nbsp;&nbsp;");
    }
    for (s = 4; s >= i; s--) {
        document.write("&nbsp;&nbsp;");
    }
    for (j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>")
}
for (i = 1; i <= 5; i++) {
    for (j = 5; j >= i; j--) {
        document.write("*")
    }
    for (s = 1; s < i; s++) {
        document.write("&nbsp;&nbsp;")
    }
    for (s = 1; s < i; s++) {
        document.write("&nbsp;&nbsp;")
    }
    for (j = 5; j >= i; j--) {
        document.write("*")
    }
    document.write("<br>")
}

// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
// =====================================================================================================================
