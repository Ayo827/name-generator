function Generator(){
    var total = document.getElementById("total").value
    if(total.length <= 0){
        let div = document.getElementById('Message');
        div.innerText = 'Please enter the number of names you want to generate'
    }else{

    let div = document.getElementById('Message');
    div.innerText = ''
    var names = [];
    for(var i = 0; i < total; i++){
        const Alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 
       'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
       'W', 'X', 'Y', 'Z'];
    
       //STEP ONE
       var name = Alphabets[Math.floor(Math.random() * Alphabets.length)];
       var nextletter = "";
       //FOR A
        var A1 = [ 'I', 'L', 'M', 'N', 'R', 'S', 'U', 'V', 'Z'];
        var A2 = ['W', 'R', 'S'];
        var A3 = ['W', 'R', 'S'];
        var A4 = ['W', 'R', 'S'];
        var A5 = ['W', 'R', 'S'];
        var A6 = ['W', 'R', 'S'];
        var A7 = ['W', 'R', 'S'];
        var A8 = ['W', 'R', 'S'];
        var A9 = ['W', 'R', 'S'];
        var A10 = [ 'B', 'C', 'G', 'H', 'I', 'L', 'N', 'R', 'S', 'T', 'V', 'Y' ];
        //For B
        var B1 = ['A', 'E', 'I', 'L', 'O', 'N'];
        var B2 = ['W', 'R', 'S'];
        var B3 = ['W', 'R', 'S'];
        var B4 = ['W', 'R', 'S'];
        var B5 = ['W', 'R', 'S'];
        var B6 = ['W', 'R', 'S'];
        var B7 = ['W', 'R', 'S'];
        var B8 = ['W', 'R', 'S'];
        var B9 = ['W', 'R', 'S'];
        var B10 = ['E', 'I', 'R', 'Y'];
          //For C
          var C1 = ['A', 'H', 'I', 'L', 'R', 'Y'];
          var C2 = ['W', 'R', 'S'];
          var C3 = ['W', 'R', 'S'];
          var C4 = ['W', 'R', 'S'];
          var C5 = ['W', 'R', 'S'];
          var C6 = ['W', 'R', 'S'];
          var C7 = ['W', 'R', 'S'];
          var C8 = ['W', 'R', 'S'];
          var C9 = ['W', 'R', 'S'];
          var C10 = ['K'];
            //For D
        var D1 = ['A', 'I', 'O', 'R'];
        var D2 = [ 'B', 'D', 'E', 'I', 'J', 'K', 'L', 'M', 'N', 'Q', 'R', 'S', 'T', 'U', 'V'];
        var D3 = [ 'H', 'K'];
        var D4 = ['A', 'B', 'D', 'G', 'I', "l", 'N', 'R', 'S', 'T'];
        var D5 = ['A', 'E', 'I', 'L', 'O'];
        var D6 = ['W', 'R', 'S'];
        var D7 = ['W', 'R', 'S'];
        var D8 = ['W', 'R', 'S'];
        var D9 = ['W', 'R', 'S'];
        var D10 = [ 'A', 'E', 'R' ];
          //For E
          var E1 = ['W', 'R', 'S'];
          var E2 = ['W', 'R', 'S'];
          var E3 = ['W', 'R', 'S'];
          var E4 = ['W', 'R', 'S'];
          var E5 = ['W', 'R', 'S'];
          var E6 = ['W', 'R', 'S'];
          var E7 = ['W', 'R', 'S'];
          var E8 = ['W', 'R', 'S'];
          var E9 = ['W', 'R', 'S'];
          var E10 = ['W', 'R', 'S'];
            //For F
        var F1 = ['W', 'R', 'S'];
        var F2 = ['W', 'R', 'S'];
        var F3 = ['W', 'R', 'S'];
        var F4 = ['W', 'R', 'S'];
        var F5 = ['W', 'R', 'S'];
        var F6 = ['W', 'R', 'S'];
        var F7 = ['W', 'R', 'S'];
        var F8 = ['W', 'R', 'S'];
        var F9 = ['W', 'R', 'S'];
        var F10 = ['W', 'R', 'S'];
          //For G
          var G1 = ['W', 'R', 'S'];
          var G2 = ['W', 'R', 'S'];
          var G3 = ['W', 'R', 'S'];
          var G4 = ['W', 'R', 'S'];
          var G5 = ['W', 'R', 'S'];
          var G6 = ['W', 'R', 'S'];
          var G7 = ['W', 'R', 'S'];
          var G8 = ['W', 'R', 'S'];
          var G9 = ['W', 'R', 'S'];
          var G10 = ['W', 'R', 'S'];
            //For H
        var H1 = ['W', 'R', 'S'];
        var H2 = ['W', 'R', 'S'];
        var H3 = ['W', 'R', 'S'];
        var H4 = ['W', 'R', 'S'];
        var H5 = ['W', 'R', 'S'];
        var H6 = ['W', 'R', 'S'];
        var H7 = ['W', 'R', 'S'];
        var H8 = ['W', 'R', 'S'];
        var H9 = ['W', 'R', 'S'];
        var H10 = ['W', 'R', 'S'];
          //For I
          var I1 = ['W', 'R', 'S'];
          var I2 = ['W', 'R', 'S'];
          var I3 = ['W', 'R', 'S'];
          var I4 = ['W', 'R', 'S'];
          var I5 = ['W', 'R', 'S'];
          var I6 = ['W', 'R', 'S'];
          var I7 = ['W', 'R', 'S'];
          var I8 = ['W', 'R', 'S'];
          var I9 = ['W', 'R', 'S'];
          var I10 = ['W', 'R', 'S'];
          //For J
          var J1 = ['W', 'R', 'S'];
          var J2 = ['W', 'R', 'S'];
          var J3 = ['W', 'R', 'S'];
          var J4 = ['W', 'R', 'S'];
          var J5 = ['W', 'R', 'S'];
          var J6 = ['W', 'R', 'S'];
          var J7 = ['W', 'R', 'S'];
          var J8 = ['W', 'R', 'S'];
          var J9 = ['W', 'R', 'S'];
          var J10 = ['W', 'R', 'S'];
            //For K
        var K1 = ['W', 'R', 'S'];
        var K2 = ['W', 'R', 'S'];
        var K3 = ['W', 'R', 'S'];
        var K4 = ['W', 'R', 'S'];
        var K5 = ['W', 'R', 'S'];
        var K6 = ['W', 'R', 'S'];
        var K7 = ['W', 'R', 'S'];
        var K8 = ['W', 'R', 'S'];
        var K9 = ['W', 'R', 'S'];
        var K10 = ['W', 'R', 'S'];
          //For L
          var L1 = ['W', 'R', 'S'];
          var L2 = ['W', 'R', 'S'];
          var L3 = ['W', 'R', 'S'];
          var L4 = ['W', 'R', 'S'];
          var L5 = ['W', 'R', 'S'];
          var L6 = ['W', 'R', 'S'];
          var L7 = ['W', 'R', 'S'];
          var L8 = ['W', 'R', 'S'];
          var L9 = ['W', 'R', 'S'];
          var L10 = ['W', 'R', 'S'];
            //For M
        var M1 = ['W', 'R', 'S'];
        var M2 = ['W', 'R', 'S'];
        var M3 = ['W', 'R', 'S'];
        var M4 = ['W', 'R', 'S'];
        var M5 = ['W', 'R', 'S'];
        var M6 = ['W', 'R', 'S'];
        var M7 = ['W', 'R', 'S'];
        var M8 = ['W', 'R', 'S'];
        var M9 = ['W', 'R', 'S'];
        var M10 = ['W', 'R', 'S'];
          //For N
          var N1 = ['W', 'R', 'S'];
          var N2 = ['W', 'R', 'S'];
          var N3 = ['W', 'R', 'S'];
          var N4 = ['W', 'R', 'S'];
          var N5 = ['W', 'R', 'S'];
          var N6 = ['W', 'R', 'S'];
          var N7 = ['W', 'R', 'S'];
          var N8 = ['W', 'R', 'S'];
          var N9 = ['W', 'R', 'S'];
          var N10 = ['W', 'R', 'S'];
            //For O
        var O1 = ['W', 'R', 'S'];
        var O2 = ['W', 'R', 'S'];
        var O3 = ['W', 'R', 'S'];
        var O4 = ['W', 'R', 'S'];
        var O5 = ['W', 'R', 'S'];
        var O6 = ['W', 'R', 'S'];
        var O7 = ['W', 'R', 'S'];
        var O8 = ['W', 'R', 'S'];
        var O9 = ['W', 'R', 'S'];
        var O10 = ['W', 'R', 'S'];
          //For P
          var P1 = ['W', 'R', 'S'];
          var P2 = ['W', 'R', 'S'];
          var P3 = ['W', 'R', 'S'];
          var P4 = ['W', 'R', 'S'];
          var P5 = ['W', 'R', 'S'];
          var P6 = ['W', 'R', 'S'];
          var P7 = ['W', 'R', 'S'];
          var P8 = ['W', 'R', 'S'];
          var P9 = ['W', 'R', 'S'];
          var P10 = ['W', 'R', 'S'];
            //For Q
        var Q1 = ['W', 'R', 'S'];
        var Q2 = ['W', 'R', 'S'];
        var Q3 = ['W', 'R', 'S'];
        var Q4 = ['W', 'R', 'S'];
        var Q5 = ['W', 'R', 'S'];
        var Q6 = ['W', 'R', 'S'];
        var Q7 = ['W', 'R', 'S'];
        var Q8 = ['W', 'R', 'S'];
        var Q9 = ['W', 'R', 'S'];
        var Q10 = ['W', 'R', 'S'];
          //For R
          var R1 = ['W', 'R', 'S'];
          var R2 = ['W', 'R', 'S'];
          var R3 = ['W', 'R', 'S'];
          var R4 = ['W', 'R', 'S'];
          var R5 = ['W', 'R', 'S'];
          var R6 = ['W', 'R', 'S'];
          var R7 = ['W', 'R', 'S'];
          var R8 = ['W', 'R', 'S'];
          var R9 = ['W', 'R', 'S'];
          var R10 = ['W', 'R', 'S'];
            //For S
        var S1 = ['W', 'R', 'S'];
        var S2 = ['W', 'R', 'S'];
        var S3 = ['W', 'R', 'S'];
        var S4 = ['W', 'R', 'S'];
        var S5 = ['W', 'R', 'S'];
        var S6 = ['W', 'R', 'S'];
        var S7 = ['W', 'R', 'S'];
        var S8 = ['W', 'R', 'S'];
        var S9 = ['W', 'R', 'S'];
        var S10 = ['W', 'R', 'S'];
          //For T
          var T1 = ['W', 'R', 'S'];
          var T2 = ['W', 'R', 'S'];
          var T3 = ['W', 'R', 'S'];
          var T4 = ['W', 'R', 'S'];
          var T5 = ['W', 'R', 'S'];
          var T6 = ['W', 'R', 'S'];
          var T7 = ['W', 'R', 'S'];
          var T8 = ['W', 'R', 'S'];
          var T9 = ['W', 'R', 'S'];
          var T10 = ['W', 'R', 'S'];
            //For U
        var U1 = ['W', 'R', 'S'];
        var U2 = ['W', 'R', 'S'];
        var U3 = ['W', 'R', 'S'];
        var U4 = ['W', 'R', 'S'];
        var U5 = ['W', 'R', 'S'];
        var U6 = ['W', 'R', 'S'];
        var U7 = ['W', 'R', 'S'];
        var U8 = ['W', 'R', 'S'];
        var U9 = ['W', 'R', 'S'];
        var U10 = ['W', 'R', 'S'];
          //For V
          var V1 = ['W', 'R', 'S'];
          var V2 = ['W', 'R', 'S'];
          var V3 = ['W', 'R', 'S'];
          var V4 = ['W', 'R', 'S'];
          var V5 = ['W', 'R', 'S'];
          var V6 = ['W', 'R', 'S'];
          var V7 = ['W', 'R', 'S'];
          var V8 = ['W', 'R', 'S'];
          var V9 = ['W', 'R', 'S'];
          var V10 = ['W', 'R', 'S'];
            //For W
        var W1 = ['W', 'R', 'S'];
        var W2 = ['W', 'R', 'S'];
        var W3 = ['W', 'R', 'S'];
        var W4 = ['W', 'R', 'S'];
        var W5 = ['W', 'R', 'S'];
        var W6 = ['W', 'R', 'S'];
        var W7 = ['W', 'R', 'S'];
        var W8 = ['W', 'R', 'S'];
        var W9 = ['W', 'R', 'S'];
        var W10 = ['W', 'R', 'S'];
          //For X
          var X1 = ['W', 'R', 'S'];
          var X2 = ['W', 'R', 'S'];
          var X3 = ['W', 'R', 'S'];
          var X4 = ['W', 'R', 'S'];
          var X5 = ['W', 'R', 'S'];
          var X6 = ['W', 'R', 'S'];
          var X7 = ['W', 'R', 'S'];
          var X8 = ['W', 'R', 'S'];
          var X9 = ['W', 'R', 'S'];
          var X10 = ['W', 'R', 'S'];
            //For Y
        var Y1 = ['W', 'R', 'S'];
        var Y2 = ['W', 'R', 'S'];
        var Y3 = ['W', 'R', 'S'];
        var Y4 = ['W', 'R', 'S'];
        var Y5 = ['W', 'R', 'S'];
        var Y6 = ['W', 'R', 'S'];
        var Y7 = ['W', 'R', 'S'];
        var Y8 = ['W', 'R', 'S'];
        var Y9 = ['W', 'R', 'S'];
        var Y10 = ['W', 'R', 'S'];
          //For Z
          var Z1 = ['W', 'R', 'S'];
          var Z2 = ['W', 'R', 'S'];
          var Z3 = ['W', 'R', 'S'];
          var Z4 = ['W', 'R', 'S'];
          var Z5 = ['W', 'R', 'S'];
          var Z6 = ['W', 'R', 'S'];
          var Z7 = ['W', 'R', 'S'];
          var Z8 = ['W', 'R', 'S'];
          var Z9 = ['W', 'R', 'S'];
          var Z10 = ['W', 'R', 'S'];
       //STEP TWO
       if(name === 'A'){
        nextletter = A1[Math.floor(Math.random() * A1.length)];
        name = name + nextletter
       }
       else if(name === 'B'){
        nextletter = B1[Math.floor(Math.random() * B1.length)];
        name = name + nextletter
       }
       else if(name === 'C'){
        nextletter = C1[Math.floor(Math.random() * C1.length)];
        name = name + nextletter
       }
       else if(name === 'D'){
        nextletter = D1[Math.floor(Math.random() * D1.length)];
        name = name + nextletter
       }
       else if(name === 'E'){
        nextletter = E1[Math.floor(Math.random() * E1.length)];
        name = name + nextletter
       }
       else if(name === 'F'){
        nextletter = F1[Math.floor(Math.random() * F1.length)];
        name = name + nextletter
       }
       else if(name === 'G'){
        nextletter = G1[Math.floor(Math.random() * G1.length)];
        name = name + nextletter
       }
       else if(name === 'H'){
        nextletter = H1[Math.floor(Math.random() * H1.length)];
        name = name + nextletter
       }
       else if(name === 'I'){
        nextletter = I1[Math.floor(Math.random() * I1.length)];
        name = name + nextletter
       }
       else if(name === 'J'){
        nextletter = J1[Math.floor(Math.random() * J1.length)];
        name = name + nextletter
       }
       else if(name === 'K'){
        nextletter = K1[Math.floor(Math.random() * K1.length)];
        name = name + nextletter
       }
       else if(name === 'L'){
        nextletter = L1[Math.floor(Math.random() * L1.length)];
        name = name + nextletter
       }
       else if(name === 'M'){
        nextletter = M1[Math.floor(Math.random() * M1.length)];
        name = name + nextletter
       }
       else if(name === 'N'){
        nextletter = N1[Math.floor(Math.random() * N1.length)];
        name = name + nextletter
       }
       else if(name === 'O'){
        nextletter = O1[Math.floor(Math.random() * O1.length)];
        name = name + nextletter
       }
       else if(name === 'P'){
        nextletter = P1[Math.floor(Math.random() * P1.length)];
        name = name + nextletter
       }
       else if(name === 'Q'){
        nextletter = Q1[Math.floor(Math.random() * Q1.length)];
        name = name + nextletter
       }
       else if(name === 'R'){
        nextletter = R1[Math.floor(Math.random() * R1.length)];
        name = name + nextletter
       }
       else if(name === 'S'){
        nextletter = S1[Math.floor(Math.random() * S1.length)];
        name = name + nextletter
       }
       else if(name === 'T'){
        nextletter = T1[Math.floor(Math.random() * T1.length)];
        name = name + nextletter
       }
       else if(name === 'U'){
        nextletter = U1[Math.floor(Math.random() * U1.length)];
        name = name + nextletter
       }
       else if(name === 'V'){
        nextletter = V1[Math.floor(Math.random() * V1.length)];
        name = name + nextletter
       }
       else if(name === 'W'){
        nextletter = W1[Math.floor(Math.random() * W1.length)];
        name = name + nextletter
       }
       else if(name === 'X'){
        nextletter = X1[Math.floor(Math.random() * X1.length)];
        name = name + nextletter
       }
       else if(name === 'Y'){
        nextletter = Y1[Math.floor(Math.random() * Y1.length)];
        name = name + nextletter
       }
       else{
        nextletter = Z1[Math.floor(Math.random() * Z1.length)];
        name = name + nextletter
       }
    
       // STEP THREE
       if(nextletter === 'A'){
        nextletter = A2[Math.floor(Math.random() * A2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'B'){
        nextletter = B2[Math.floor(Math.random() * B2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'C'){
        nextletter = C2[Math.floor(Math.random() * C2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'D'){
        nextletter = D2[Math.floor(Math.random() * D2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'E'){
        nextletter = E2[Math.floor(Math.random() * E2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'F'){
        nextletter = F2[Math.floor(Math.random() * F2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'G'){
        nextletter = G2[Math.floor(Math.random() * G2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'H'){
        nextletter = H2[Math.floor(Math.random() * H2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'I'){
        nextletter = I2[Math.floor(Math.random() * I2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'J'){
        nextletter = J2[Math.floor(Math.random() * J2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'K'){
        nextletter = K2[Math.floor(Math.random() * K2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'L'){
        nextletter = L2[Math.floor(Math.random() * L2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'M'){
        nextletter = M2[Math.floor(Math.random() * M2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'N'){
        nextletter = N2[Math.floor(Math.random() * N2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'O'){
        nextletter = O2[Math.floor(Math.random() * O2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'P'){
        nextletter = P2[Math.floor(Math.random() * P2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Q'){
        nextletter = Q2[Math.floor(Math.random() * Q2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'R'){
        nextletter = R2[Math.floor(Math.random() * R2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'S'){
        nextletter = S2[Math.floor(Math.random() * S2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'T'){
        nextletter = T2[Math.floor(Math.random() * T2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'U'){
        nextletter = U2[Math.floor(Math.random() * U2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'V'){
        nextletter = V2[Math.floor(Math.random() * V2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'W'){
        nextletter = W2[Math.floor(Math.random() * W2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'X'){
        nextletter = X2[Math.floor(Math.random() * X2.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Y'){
        nextletter = Y2[Math.floor(Math.random() * Y2.length)];
        name = name + nextletter
       }
       else{
        nextletter = Z2[Math.floor(Math.random() * Z2.length)];
        name = name + nextletter
       }
    
       //STEP FOUR
       if(nextletter === 'A'){
        nextletter = A3[Math.floor(Math.random() * A3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'B'){
        nextletter = B3[Math.floor(Math.random() * B3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'C'){
        nextletter = C3[Math.floor(Math.random() * C3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'D'){
        nextletter = D3[Math.floor(Math.random() * D3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'E'){
        nextletter = E3[Math.floor(Math.random() * E3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'F'){
        nextletter = F3[Math.floor(Math.random() * F3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'G'){
        nextletter = G3[Math.floor(Math.random() * G3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'H'){
        nextletter = H3[Math.floor(Math.random() * H3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'I'){
        nextletter = I3[Math.floor(Math.random() * I3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'J'){
        nextletter = J3[Math.floor(Math.random() * J3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'K'){
        nextletter = K3[Math.floor(Math.random() * K3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'L'){
        nextletter = L3[Math.floor(Math.random() * L3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'M'){
        nextletter = M3[Math.floor(Math.random() * M3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'N'){
        nextletter = N3[Math.floor(Math.random() * N3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'O'){
        nextletter = O3[Math.floor(Math.random() * O3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'P'){
        nextletter = P3[Math.floor(Math.random() * P3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Q'){
        nextletter = Q3[Math.floor(Math.random() * Q3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'R'){
        nextletter = R3[Math.floor(Math.random() * R3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'S'){
        nextletter = S3[Math.floor(Math.random() * S3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'T'){
        nextletter = T3[Math.floor(Math.random() * T3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'U'){
        nextletter = U3[Math.floor(Math.random() * U3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'V'){
        nextletter = V3[Math.floor(Math.random() * V3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'W'){
        nextletter = W3[Math.floor(Math.random() * W3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'X'){
        nextletter = X3[Math.floor(Math.random() * X3.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Y'){
        nextletter = Y3[Math.floor(Math.random() * Y3.length)];
        name = name + nextletter
       }
       else{
        nextletter = Z3[Math.floor(Math.random() * Z3.length)];
        name = name + nextletter
       }
       // STEP FIVE
       if(nextletter === 'A'){
        nextletter = A4[Math.floor(Math.random() * A4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'B'){
        nextletter = B4[Math.floor(Math.random() * B4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'C'){
        nextletter = C4[Math.floor(Math.random() * C4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'D'){
        nextletter = D4[Math.floor(Math.random() * D4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'E'){
        nextletter = E4[Math.floor(Math.random() * E4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'F'){
        nextletter = F4[Math.floor(Math.random() * F4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'G'){
        nextletter = G4[Math.floor(Math.random() * G4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'H'){
        nextletter = H4[Math.floor(Math.random() * H4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'I'){
        nextletter = I4[Math.floor(Math.random() * I4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'J'){
        nextletter = J4[Math.floor(Math.random() * J4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'K'){
        nextletter = K4[Math.floor(Math.random() * K4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'L'){
        nextletter = L4[Math.floor(Math.random() * L4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'M'){
        nextletter = M4[Math.floor(Math.random() * M4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'N'){
        nextletter = N4[Math.floor(Math.random() * N4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'O'){
        nextletter = O4[Math.floor(Math.random() * O4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'P'){
        nextletter = P4[Math.floor(Math.random() * P4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Q'){
        nextletter = Q4[Math.floor(Math.random() * Q4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'R'){
        nextletter = R4[Math.floor(Math.random() * R4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'S'){
        nextletter = S4[Math.floor(Math.random() * S4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'T'){
        nextletter = T4[Math.floor(Math.random() * T4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'U'){
        nextletter = U4[Math.floor(Math.random() * U4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'V'){
        nextletter = V4[Math.floor(Math.random() * V4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'W'){
        nextletter = W4[Math.floor(Math.random() * W4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'X'){
        nextletter = X4[Math.floor(Math.random() * X4.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Y'){
        nextletter = Y4[Math.floor(Math.random() * Y4.length)];
        name = name + nextletter
       }
       else{
        nextletter = Z4[Math.floor(Math.random() * Z4.length)];
        name = name + nextletter
       }
       //STEP SIX
       if(nextletter === 'A'){
        nextletter = A5[Math.floor(Math.random() * A5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'B'){
        nextletter = B5[Math.floor(Math.random() * B5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'C'){
        nextletter = C5[Math.floor(Math.random() * C5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'D'){
        nextletter = D5[Math.floor(Math.random() * D5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'E'){
        nextletter = E5[Math.floor(Math.random() * E5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'F'){
        nextletter = F5[Math.floor(Math.random() * F5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'G'){
        nextletter = G5[Math.floor(Math.random() * G5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'H'){
        nextletter = H5[Math.floor(Math.random() * H5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'I'){
        nextletter = I5[Math.floor(Math.random() * I5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'J'){
        nextletter = J5[Math.floor(Math.random() * J5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'K'){
        nextletter = K5[Math.floor(Math.random() * K5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'L'){
        nextletter = L5[Math.floor(Math.random() * L5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'M'){
        nextletter = M5[Math.floor(Math.random() * M5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'N'){
        nextletter = N5[Math.floor(Math.random() * N5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'O'){
        nextletter = O5[Math.floor(Math.random() * O5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'P'){
        nextletter = P5[Math.floor(Math.random() * P5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Q'){
        nextletter = Q5[Math.floor(Math.random() * Q5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'R'){
        nextletter = R5[Math.floor(Math.random() * R5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'S'){
        nextletter = S5[Math.floor(Math.random() * S5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'T'){
        nextletter = T5[Math.floor(Math.random() * T5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'U'){
        nextletter = U5[Math.floor(Math.random() * U5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'V'){
        nextletter = V5[Math.floor(Math.random() * V5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'W'){
        nextletter = W5[Math.floor(Math.random() * W5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'X'){
        nextletter = X5[Math.floor(Math.random() * X5.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Y'){
        nextletter = Y5[Math.floor(Math.random() * Y5.length)];
        name = name + nextletter
       }
       else{
        nextletter = Z5[Math.floor(Math.random() * Z5.length)];
        name = name + nextletter
       }
       //STEP SEVEN
       if(nextletter === 'A'){
        nextletter = A6[Math.floor(Math.random() * A6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'B'){
        nextletter = B6[Math.floor(Math.random() * B6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'C'){
        nextletter = C6[Math.floor(Math.random() * C6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'D'){
        nextletter = D6[Math.floor(Math.random() * D6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'E'){
        nextletter = E6[Math.floor(Math.random() * E6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'F'){
        nextletter = F6[Math.floor(Math.random() * F6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'G'){
        nextletter = G6[Math.floor(Math.random() * G6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'H'){
        nextletter = H6[Math.floor(Math.random() * H6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'I'){
        nextletter = I6[Math.floor(Math.random() * I6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'J'){
        nextletter = J6[Math.floor(Math.random() * J6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'K'){
        nextletter = K6[Math.floor(Math.random() * K6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'L'){
        nextletter = L6[Math.floor(Math.random() * L6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'M'){
        nextletter = M6[Math.floor(Math.random() * M6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'N'){
        nextletter = N6[Math.floor(Math.random() * N6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'O'){
        nextletter = O6[Math.floor(Math.random() * O6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'P'){
        nextletter = P6[Math.floor(Math.random() * P6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Q'){
        nextletter = Q6[Math.floor(Math.random() * Q6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'R'){
        nextletter = R6[Math.floor(Math.random() * R6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'S'){
        nextletter = S6[Math.floor(Math.random() * S6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'T'){
        nextletter = T6[Math.floor(Math.random() * T6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'U'){
        nextletter = U6[Math.floor(Math.random() * U6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'V'){
        nextletter = V6[Math.floor(Math.random() * V6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'W'){
        nextletter = W6[Math.floor(Math.random() * W6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'X'){
        nextletter = X6[Math.floor(Math.random() * X6.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Y'){
        nextletter = Y6[Math.floor(Math.random() * Y6.length)];
        name = name + nextletter
       }
       else{
        nextletter = Z6[Math.floor(Math.random() * Z6.length)];
        name = name + nextletter
       }
       //STEP EIGHT
       if(nextletter === 'A'){
        nextletter = A7[Math.floor(Math.random() * A7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'B'){
        nextletter = B7[Math.floor(Math.random() * B7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'C'){
        nextletter = C7[Math.floor(Math.random() * C7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'D'){
        nextletter = D7[Math.floor(Math.random() * D7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'E'){
        nextletter = E7[Math.floor(Math.random() * E7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'F'){
        nextletter = F7[Math.floor(Math.random() * F7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'G'){
        nextletter = G7[Math.floor(Math.random() * G7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'H'){
        nextletter = H7[Math.floor(Math.random() * H7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'I'){
        nextletter = I7[Math.floor(Math.random() * I7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'J'){
        nextletter = J7[Math.floor(Math.random() * J7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'K'){
        nextletter = K7[Math.floor(Math.random() * K7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'L'){
        nextletter = L7[Math.floor(Math.random() * L7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'M'){
        nextletter = M7[Math.floor(Math.random() * M7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'N'){
        nextletter = N7[Math.floor(Math.random() * N7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'O'){
        nextletter = O7[Math.floor(Math.random() * O7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'P'){
        nextletter = P7[Math.floor(Math.random() * P7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Q'){
        nextletter = Q7[Math.floor(Math.random() * Q7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'R'){
        nextletter = R7[Math.floor(Math.random() * R7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'S'){
        nextletter = S7[Math.floor(Math.random() * S7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'T'){
        nextletter = T7[Math.floor(Math.random() * T7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'U'){
        nextletter = U7[Math.floor(Math.random() * U7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'V'){
        nextletter = V7[Math.floor(Math.random() * V7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'W'){
        nextletter = W7[Math.floor(Math.random() * W7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'X'){
        nextletter = X7[Math.floor(Math.random() * X7.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Y'){
        nextletter = Y7[Math.floor(Math.random() * V7.length)];
        name = name + nextletter
       }
       else{
        nextletter = Z7[Math.floor(Math.random() * Z7.length)];
        name = name + nextletter
       }
       //STEP NINE
       if(nextletter === 'A'){
        nextletter = A8[Math.floor(Math.random() * A8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'B'){
        nextletter = B8[Math.floor(Math.random() * B8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'C'){
        nextletter = C8[Math.floor(Math.random() * C8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'D'){
        nextletter = D8[Math.floor(Math.random() * D8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'E'){
        nextletter = E8[Math.floor(Math.random() * E8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'F'){
        nextletter = F8[Math.floor(Math.random() * F8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'G'){
        nextletter = G8[Math.floor(Math.random() * G8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'H'){
        nextletter = H8[Math.floor(Math.random() * H8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'I'){
        nextletter = I8[Math.floor(Math.random() * I8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'J'){
        nextletter = J8[Math.floor(Math.random() * J8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'K'){
        nextletter = K8[Math.floor(Math.random() * K8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'L'){
        nextletter = L8[Math.floor(Math.random() * L8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'M'){
        nextletter = M8[Math.floor(Math.random() * M8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'N'){
        nextletter = N8[Math.floor(Math.random() * N8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'O'){
        nextletter = O8[Math.floor(Math.random() * O8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'P'){
        nextletter = P8[Math.floor(Math.random() * P8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Q'){
        nextletter = Q8[Math.floor(Math.random() * Q8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'R'){
        nextletter = R8[Math.floor(Math.random() * R8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'S'){
        nextletter = S8[Math.floor(Math.random() * S8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'T'){
        nextletter = T8[Math.floor(Math.random() * T8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'U'){
        nextletter = U8[Math.floor(Math.random() * U8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'V'){
        nextletter = V8[Math.floor(Math.random() * V8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'W'){
        nextletter = W8[Math.floor(Math.random() * W8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'X'){
        nextletter = X8[Math.floor(Math.random() * X8.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Y'){
        nextletter = Y8[Math.floor(Math.random() * Y8.length)];
        name = name + nextletter
       }
       else{
        nextletter = Z8[Math.floor(Math.random() * Z8.length)];
        name = name + nextletter
       }
       //STEP TEN
       if(nextletter === 'A'){
        nextletter = A9[Math.floor(Math.random() * A9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'B'){
        nextletter = B9[Math.floor(Math.random() * B9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'C'){
        nextletter = C9[Math.floor(Math.random() * C9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'D'){
        nextletter = D9[Math.floor(Math.random() * D9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'E'){
        nextletter = E9[Math.floor(Math.random() * E9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'F'){
        nextletter = F9[Math.floor(Math.random() * F9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'G'){
        nextletter = G9[Math.floor(Math.random() * G9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'H'){
        nextletter = H9[Math.floor(Math.random() * H9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'I'){
        nextletter = I9[Math.floor(Math.random() * I9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'J'){
        nextletter = J9[Math.floor(Math.random() * J9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'K'){
        nextletter = K9[Math.floor(Math.random() * K9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'L'){
        nextletter = L9[Math.floor(Math.random() * L9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'M'){
        nextletter = M9[Math.floor(Math.random() * M9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'N'){
        nextletter = N9[Math.floor(Math.random() * N9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'O'){
        nextletter = O9[Math.floor(Math.random() * O9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'P'){
        nextletter = P9[Math.floor(Math.random() * P9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Q'){
        nextletter = Q9[Math.floor(Math.random() * Q9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'R'){
        nextletter = R9[Math.floor(Math.random() * R9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'S'){
        nextletter = S9[Math.floor(Math.random() * S9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'T'){
        nextletter = T9[Math.floor(Math.random() * T9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'U'){
        nextletter = U9[Math.floor(Math.random() * U9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'V'){
        nextletter = V9[Math.floor(Math.random() * V9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'W'){
        nextletter = W9[Math.floor(Math.random() * W9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'X'){
        nextletter = X9[Math.floor(Math.random() * X9.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Y'){
        nextletter = Y9[Math.floor(Math.random() * Y9.length)];
        name = name + nextletter
       }
       else{
        nextletter = Z9[Math.floor(Math.random() * Z9.length)];
        name = name + nextletter
       }
       //STEP 11
       if(nextletter === 'A'){
        nextletter = A10[Math.floor(Math.random() * A10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'B'){
        nextletter = B10[Math.floor(Math.random() * B10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'C'){
        nextletter = C10[Math.floor(Math.random() * C10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'D'){
        nextletter = D10[Math.floor(Math.random() * D10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'E'){
        nextletter = E10[Math.floor(Math.random() * E10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'F'){
        nextletter = F10[Math.floor(Math.random() * F10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'G'){
        nextletter = G10[Math.floor(Math.random() * G10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'H'){
        nextletter = H10[Math.floor(Math.random() * H10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'I'){
        nextletter = I10[Math.floor(Math.random() * I10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'J'){
        nextletter = J10[Math.floor(Math.random() * J10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'K'){
        nextletter = K10[Math.floor(Math.random() * K10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'L'){
        nextletter = L10[Math.floor(Math.random() * L10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'M'){
        nextletter = M10[Math.floor(Math.random() * M10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'N'){
        nextletter = N10[Math.floor(Math.random() * N10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'O'){
        nextletter = O10[Math.floor(Math.random() * O10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'P'){
        nextletter = P10[Math.floor(Math.random() * P10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Q'){
        nextletter = Q10[Math.floor(Math.random() * Q10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'R'){
        nextletter = R10[Math.floor(Math.random() * R10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'S'){
        nextletter = S10[Math.floor(Math.random() * S10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'T'){
        nextletter = T10[Math.floor(Math.random() * T10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'U'){
        nextletter = U10[Math.floor(Math.random() * U10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'V'){
        nextletter = V10[Math.floor(Math.random() * V10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'W'){
        nextletter = W10[Math.floor(Math.random() * W10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'X'){
        nextletter = X10[Math.floor(Math.random() * X10.length)];
        name = name + nextletter
       }
       else if(nextletter === 'Y'){
        nextletter = Y10[Math.floor(Math.random() * Y10.length)];
        name = name + nextletter
       }
       else{
        nextletter = Z10[Math.floor(Math.random() * Z10.length)];
        name = name + nextletter
       }
       var result = name.replace(/(.)\1+/g, '$1')
       var nameLength = [5, 6, 7, 8, 9, 10, 11];
       nameLength = nameLength[Math.floor(Math.random() * nameLength.length)];
       result = result.slice(0, nameLength)

       let div = document.getElementById("Names");
       let p = document.createElement("p");
       p.textContent = result.toLowerCase();
       div.appendChild(p);
    }
    }
}