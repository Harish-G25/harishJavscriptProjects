const heading = document.querySelectorAll('.container-body__section');
let selectedRating =" ";

const btn = document.querySelector('.container-body__btn')

const container = document.querySelector('.container')


heading.forEach((heading) => {
    heading.addEventListener('click', (event) => {
       removeActive();
       selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add('active')
        event.target.parentNode.classList.add('active')
    });
});

btn.addEventListener('click', ()=>{
    if(selectedRating !== ""){
        container.innerHTML = `<Strong style='font-size:20px'>Thank you!</Strong>
        <br>
        <br>
        <Strong>FeedBack:${selectedRating}</Strong>
        <p style='margin:10px'>we'll use your feedback to improve our customer support.</p>`;
    }
})

function removeActive() {
    heading.forEach((heading) => {
        heading.classList.remove("active");
    });
}

