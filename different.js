// 1 theke 30 er modde j j number 5 dara bhag korle bhagsesh 0 hoy oi number gula ber koro------
// for(let i = 1; i <= 30; i++){
//     if(i%3===0 || i % 5===0 ){
//         console.log(i);
//     }
// }


//=======================================================================
// for(let i = 1; i <= 100; i++){
//     if(i%3===0 && i % 5===0 ){
//         console.log(i);
//     }
// }


// ======================================================================
// give me the sum of numbers from 1 to 20 that are divisible by 3
let sum = 0;
for(let i = 1; i<= 20; i++){
    if(i%3 ===0){
        console.log(i);
        sum = sum + i;
    }
    
} 
console.log("sum = ", sum);