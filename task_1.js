function simpleNumbers(n) {
    let arr = [];
    let j = 2;
    let flag = true;
    while (arr.length <= n-1) {
        for (i=2; i<j; i++) {
            if (j % i === 0) {
                flag = false;
            }
        }
        if (flag == true) {
            arr.push(i);
        }
        flag = true;
        j++;
    }
    return arr;
}
    


console.log(simpleNumbers(process.argv[2]));
