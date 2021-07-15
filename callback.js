const a = 10;
function test(successCallback, errorCallback) {
    if (a < 0) {
        errorCallback('oops');
    }
    else {
        successCallback('yay')
    }
}

function successFunction(data) {
    console.log('success function', data)
}

function errorFunction(error) {
    console.log('error function', error)
}

test(successFunction, errorFunction)