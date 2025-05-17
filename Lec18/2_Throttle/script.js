function throttle(cb) {
    let isCalled = false;
    return function() {
        if (!isCalled) {
            isCalled = true;
            cb()
            setTimeout(() => {
                isCalled = false;
            }, 4000)
        }
    }
}

const inputBox = document.querySelector('#input-box')
const btn = document.querySelector('#btn')

btn.addEventListener('click', throttle(fun))

function fun() {
    console.log(document.querySelector('#input-box').value)
}