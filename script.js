const ratingMsg = document.getElementById('rating');
const numbtn = document.querySelectorAll('.numbtn');
const submitbtn = document.getElementById('submitbtn');
const thankYouMsg = document.getElementById('thank-you');
const numselect = document.getElementById('numselect');

 
numbtn.forEach(button =>{
    button.addEventListener('click',(e)=>{
       numselect.innerHTML = e.target.textContent;
    })
})
 
submitbtn.addEventListener('click', ()=>{
    ratingMsg.style.display = 'none';
    thankYouMsg.style.display = 'block';
})