function multiply(num, callback) {
    return callback(num * 2, false);
}

function sub(num, callback) {
    return callback(num - 3, false);
}

function add(num, callback) {
    return callback(num + 10, false);
}

multiply(20, (mulres, err) => {
    if (!err) {
        sub(mulres, (subres, suberr) => {
            if (!suberr) {
                add(subres, (addres,adderr) => {
                    if (!adderr) {
                        console.log(addres);
                    } else {
                        console.error(adderr);
                    }
                });
            } else {
                console.error(suberr);
            }
        });
    } else {
        console.error(adderr);
    }
});