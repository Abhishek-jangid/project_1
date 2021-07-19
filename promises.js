function watchMemes(number) {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve({'yay!': 'heah'})
        }else{
            reject('yuck')
        }
    })
}

// let a = watchMemes(13);
// console.log(a, typeof a)

watchMemes(13).then(
    (data) => {console.log(data)}
).catch((error) => {console.log(error)})