const modal = document.querySelector('.modal');
const btnsOpenModal = document.querySelector('.button-modal')
 const openmodal = function() {
     modal.classList.remove('hidden');
     console.log("test")
 }



 btnsOpenModal.addEventListener('click',function() {
    modal.classList.remove('hidden');
    modal .style.transitionDuration = '1s';
    console.log("test");

 })


 const openModal = function () {
    modal.classList.remove('hidden');
    
  }









//   for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', overlay);
// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });








