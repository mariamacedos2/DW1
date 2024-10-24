function menor(a, b, c){
    if(a < b && a < c){
        return a
    }else if (b < c && b < a){
        return b
    }else {
        return c
    }
    return 0 
}

console.log(menor(-1, 1, 1))