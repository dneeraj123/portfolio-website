var f = () => {
    let res = [];
    d(res);
    console.log(res)
}

var d = (res) => {

    let x = [1,1,1];
    let i = 0;
    while(x[i] == x[i+1]) {
        i+=1;
        console.log(x[i+1])
    }

    res.push(1)
}

f()