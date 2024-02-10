const likeButtons = document.querySelectorAll(".card__btn");

likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__btn--like");
  });
});


var atBar = document.querySelector('.att-stic');
document.querySelector('.att-clo').addEventListener('click',(e)=>{
    atBar.style.display = 'none';
})
document.querySelector(".att-btn").addEventListener('click',()=>{
    atBar.style.display = 'block';
    console.log('sksk')
})