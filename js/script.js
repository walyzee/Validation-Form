/* Validaton Form Script */

let form = document.getElementById("validform")
const nameRegex = RegExp('[0-9]');
const mailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#:;\$%\^&\*])(?=.{8,})");


/* First name control */

function fnamecontrol() {
   let fname = document.getElementById('fname')
   if(fname.value.length ===0 )
      alert('Veuillez renseigner le champ : '+fname.name)
   else
      if ((nameRegex.test(fname.value))===true)
      alert (fname.name+' : Les caractères numériques ne sont pas acceptés')
}

/* Last name control */

function lnamecontrol() {
   let lname = document.getElementById('lname')
   if(lname.value.length===0)
      alert('Veuillez renseigner le champ : '+lname.name)
   else
      if ((nameRegex.test(lname.value))===true)
      alert (lname.name+' : Les caractères numériques ne sont pas acceptés')
}

/* Adress control */

function adresscontrol() {
   let adress = document.getElementById('adress')
   if (adress.value.length===0)
      alert('Veuillez renseigner le champ : '+adress.name)
}

/* mail control */

function mailcontrol() {
   let mail = document.getElementById('mail')
   if (mail.value.length===0)
      alert('Veuillez renseigner le champ : '+mail.name)
   else
      if ((mailRegex.test(mail.value))===false)
      alert ('Veuillez saisir une adresse mail valide')
}

/* password control */

function passwordcontrol() {
   let mail = document.getElementById('password')
   if (password.value.length===0)
      alert('Veuillez renseigner le champ : '+password.name)
   else
      if ((passwordRegex.test(password.value))===false)
      alert ("Le mot de passe doit contenir au minimum Une majuscule, un chiffre et doit contenir au moins 8 caractères")
}

/* Reset */

function resetform() {
   form.reset();
}

/* Submit */

function submitform() {
   fnamecontrol()
   lnamecontrol()
   adresscontrol()
   mailcontrol()
   passwordcontrol()
}