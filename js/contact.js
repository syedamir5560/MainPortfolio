// const contactForm  = document.getElementById('contact-form')
// const contactMessage = document.getElementById('contact-message')

// const sendEmail=(e)=>{
//     e.preventDefault() 

//     // serviceid - templateid - #form - public key

//         emailjs.sendForm('service_qd3cpr3','template_i4b82bn','#contact-form','Yd8fLaFEk6rXBv_-J')
//         .then(()=>{
//             // show send message
//             contactMessage.textContent = 'Message Send Successfully!!!'
//             // console.log("submit")

//             // remove meassage

//             setTimeout(()=>{
//                 contactMessage.textContent=''
//             },5000)

//             //clear input field

//             contactForm.reset()

//         },()=>{
//             contactMessage.textContent = "Message not sent service error"
//         })
 
// }

// contactForm.addEventListener('submit' , sendEmail)