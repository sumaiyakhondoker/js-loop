/* ---------(1)----------------
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

/*
for(let i = 1; i <= 40; i++){
    if(i%2 ===1){
        continue;
    }
    console.log(i);
}

*/


/*------------------(2)----------------------
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for(let i = 55; i <= 85; i++){
    if(i%2 !==0){
        if(i%5==0){
            continue;
        }
        console.log(i);
    }
    
}
