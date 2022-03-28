const btn_plus = document.querySelectorAll(".plus");
const btn_minus = document.querySelectorAll(".minus");
const content = document.querySelectorAll(".content");

btn_plus.forEach( function (btn) {
    btn.addEventListener('click',function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.remove('.content')
      
    })
})



