import throttle from 'lodash.throttle'

const FEADBACK_KEY = 'feedback-form-state';

const formData = {};

const refs = { 
    form: document.querySelector(".feedback-form"),
    textarea: document.querySelector(".feedback-form textarea"),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener("input", throttle(formDataInput, 500))


// створює обєкт input та textarea і переробляє в JSON
function formDataInput(evt) { 

    formData[evt.target.name] = evt.target.value;

    const formDataJSON = JSON.stringify(formData);
    console.log(formDataJSON);

    localStorage.setItem(FEADBACK_KEY , formDataJSON)
}
    

populateTextarea() 

populateInput ()

// Відправлення форми (Безперезагрузки + очищення)
function onFormSubmit(evt) { 
    evt.preventDefault();
    const readLocalStorage = localStorage.getItem(FEADBACK_KEY);
    const showLocalStorage = JSON.parse(readLocalStorage);
    console.log(showLocalStorage);

    evt.currentTarget.reset()
    localStorage.removeItem(FEADBACK_KEY)
}
// Виводить у локальне сховище текст , що вводиться
function onTextareaInput(evt) {
    const message = evt.target.value
    
    localStorage.setItem(FEADBACK_KEY, message);
    
}

// після перезагрузки сторінки , залишає текст введений у поле textarea
function populateTextarea() {
    const savedMessage = localStorage.getItem(FEADBACK_KEY);
    const savedMessageParce = JSON.parse(savedMessage);

    if (savedMessageParce) { 
        console.log(savedMessageParce);
        refs.textarea.value = savedMessageParce.message;
        // console.log(refs.textarea.value);
    }

}
// після перезагрузки сторінки , залишає текст введений у поле email
function populateInput() {
    const savedEmailMessage = localStorage.getItem(FEADBACK_KEY);
    const savedEmailParce = JSON.parse(savedEmailMessage);

    if (savedEmailParce) { 
        console.log(savedEmailParce);
        refs.form.email.value = savedEmailParce.email;
        // console.log(refs.form.email.value);
    }

}

