import throttle from 'lodash.throttle'

const FEADBACK_KEY = 'feedback-form-state';


const refs = { 
    form: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
    emailRef: document.querySelector('input'),
    
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener("input", throttle(formDataInput, 500))



// Відправлення форми (Безперезагрузки + очищення)
function onFormSubmit(evt) { 
    evt.preventDefault();
    console.log({email: refs.emailRef.value, message: refs.textarea.value});

  evt.currentTarget.reset()
  
    localStorage.clear()
}

// створює обєкт input та textarea і переробляє в JSON
function formDataInput(evt) {
  
  const formData = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value,
  };
  
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
    

// Виводить у локальне сховище текст , що вводиться
function onTextareaInput(evt) {
    const message = evt.target.value
    
    localStorage.setItem(FEADBACK_KEY, message);
    
}

// після перезагрузки сторінки , залишає текст введений у поле textarea
function getCurrentValuesOnForm() {
  const localStorageData = localStorage.getItem('feedback-form-state');
  if (localStorageData) {
    const currentData = JSON.parse(localStorageData);
    emailRef.value = currentData.email;
    messageRef.value = currentData.message;
}
};
getCurrentValuesOnForm();


// ======================================================================

// const formRef = document.querySelector('.feedback-form');
// const emailRef = document.querySelector('input');
// const messageRef = document.querySelector('textarea');


// formRef.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.log({email: emailRef.value, message: messageRef.value});
//   event.currentTarget.reset();
//   localStorage.clear();
// })
// formRef.addEventListener('input', throttle(onForm, 500));

// function onForm(event) {

//   // const emailValue = event.target.value;
//   // const messageValue = event.target.value;
  
//   const formData = {
//     email: formRef.elements.email.value,
//     message: formRef.elements.message.value,
//   };
//     // formData.email = emailValue;
//     // formData.message = messageValue;
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  
// }


