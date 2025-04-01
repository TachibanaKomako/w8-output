//ID
const EMAIL_ID = 'email';
const PASSWORD_ID='password';
//element
const email = document.getElementById(EMAIL_ID);
const password = document.getElementById(PASSWORD_ID);
//load event
window.onload = ()=>{
    //emailを取得&設定する
    const email_value = localStorage.getItem(EMAIL_ID);
    email.value=email_value;
    //passwordを取得＆設定する
    const password_value = localStorage.getItem(PASSWORD_ID);
    password.value = password_value;
}

function signInSubmit(){
    //localStorageにemailを保存する
    const email_value = email.value;
    localStorage.setItem(EMAIL_ID,email_value);
    //localStorageにpasswordを保存する
    const password_value = password.value;
    localStorage.setItem(PASSWORD_ID,password_value);
}