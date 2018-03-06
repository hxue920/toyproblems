//The Grid Search
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function gridSearch(G, P) {
    for (let r = 0; r<=G.length-P.length; r++) {
        let startIdx = G[r].indexOf(P[0])
        while (startIdx !== -1) {
            if (checkGrid(G, P, r+1, startIdx)) {
                return "YES";
            }
            startIdx = G[r].indexOf(P[0], startIdx+1);
        }
    }
    return "NO";
    
}

function checkGrid(G, P, r, startIdx) {
    let i, j;
    for (i=r, j=1; i<r+P.length-1; i++, j++) {
        if (G[i].indexOf(P[j], startIdx) !== startIdx) {
            return false;
        }
    }
    return true;
}
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var R_temp = readLine().split(' ');
        var R = parseInt(R_temp[0]);
        var C = parseInt(R_temp[1]);
        var G = [];
        for(var G_i = 0; G_i < R; G_i++){
           G[G_i] = readLine();
        }
        var r_temp = readLine().split(' ');
        var r = parseInt(r_temp[0]);
        var c = parseInt(r_temp[1]);
        var P = [];
        for(var P_i = 0; P_i < r; P_i++){
           P[P_i] = readLine();
        }
        var result = gridSearch(G, P);
        process.stdout.write("" + result + "\n");
    }

}
