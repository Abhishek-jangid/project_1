const a = 10;
function test(number, successCallback, errorCallback) {
    if (a > number) {
        errorCallback('a is greater');
    }
    else {
        successCallback('your number is greater')
    }
}

function successFunction(data) {
    console.log('success function', data)
}

function errorFunction(error) {
    console.log('error function', error)
}

test(13, successFunction, errorFunction)

test(
    3,
    (successData) => { console.log('successData', successData) },
    (errorData) => { console.log('errorData', errorData) }
)