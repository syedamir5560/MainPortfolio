const modal = document.querySelectorAll('.services__model'),
 modalButton = document.querySelectorAll('.services__button'),
 modalClose = document.querySelectorAll('.services__model-close')

 let activeModal = (modalClick) =>{
    modal[modalClick].classList.add('active-modal')
 }

 modalButton.forEach((modalButton,i)=>{
    modalButton.addEventListener('click',()=>{
            activeModal(i)
    })
 })

 modalClose.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modal.forEach((modalRemove)=>{
            modalRemove.classList.remove('active-modal')
        })

    })
 })


//  scroll up

const scrollUp=()=>{
   const scrollUp = document.getElementById('scroll-up')
   // when scrol is higher then 350 viw port hight 
   this.scrollY >=   350 ? scrollUp.classList.add('show-scroll')
   : scrollUp.classList.remove('show-scroll') 
}

window.addEventListener('scroll' , scrollUp)
