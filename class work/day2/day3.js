function all(n) {
    let a = n;
    for (a; a >= 0;) {
        console.log(a);
        if (a % 2 == 0) {
            a = Math.floor(a * 2)
        } else if(a % 2 != 0){
            a = Math.ceil (a * 3)
        }
    }
    return a;

}
console.log(all(6));