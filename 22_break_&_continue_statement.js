// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

// break
for(let i = 1; i <= 10; i+=1) {
    if(i == 8){
        break;
    }
    console.log(i);
}

// continue
for(let i = 1; i <= 10; i+=1) {
    if(i == 8){
        continue;
    }
    console.log(i);
}