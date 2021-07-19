function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            const i = i;
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste javascript");
}
x();