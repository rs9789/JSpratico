$(".botao").click(() => {
    const dec = $(".dec");
    const bin = $(".bin");
    let sep = bin.val().split("");
    let validador = 0;
    sep.forEach(element => {
        console.log(element);
        if (element == 0 || element == 1) {
            validador = 1;
        } else {
            validador = 0;
        }
    });
    console.log(validador);

    if (validador === 0) {
        alert("Use somente 0 e 1");
        bin.val("");
    } else {
        let i = sep.length - 1;
        let total = 0;
        for (let element of sep) {
            calc = element * Math.pow(2, i);
            console.log(calc);
            total += calc;
            i--;
        }

        dec.val(total);

    }

})