function checkRequired(input) {
    if (input.value.trim() ==="") {
      input.setCustomValidity('To pole jest wymagane.');
    } else {
      input.setCustomValidity('');
    }
}
    
    function checkLength(input, minLen) {
      if (input.value.trim().length < minLen) {
        input.setCustomValidity(`To pole musi zawierać  ${minLen} znaków.`);
      } else {
        input.setCustomValidity('');
      }
    }
    function checkLength(input, minLen) {
        if (input.value.trim().length < minLen) {
          input.setCustomValidity(`To pole musi zawierać  ${minLen} znaków.`);
        } else {
          input.setCustomValidity('');
        }
      }
    function checkAge(input){
        const dateOfBirth = new Date(input.value);
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - dateOfBirth;
        const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
        
        if(ageInYears < 18){
          input.setCustomValidity('Nie możesz mieć mniej niż 18 lat.');
        }
        else{
          input.setCustomValidity('');
        }
      }
    function checkEmail(input) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(input.value.trim())) {
        input.setCustomValidity('To nie jest poprawny adres email.');
      } else {
        input.setCustomValidity('');
      }
    }
    
    function checkPassword(input,powt){
      if(!(input.value.trim()===powt.value.trim())){
        input.setCustomValidity('Hasła nie są jednakowi')
  
      }
      else{
        input.setCustomValidity('');
      }
  
    }
    
    function checkPasswordStrength(input) {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (!regex.test(input.value.trim())) {
        input.setCustomValidity('To hasło jest zbyt łatwe. Musi zawierać co najmniej 8 znaków, w tym co najmniej jedną małą literę, jedną dużą literę i jedną cyfrę.');
      } else {
        input.setCustomValidity('');
      }
    }
    
const form = document.querySelector('#form');
const Nname = document.querySelector('#login');
const phone = document.querySelector('#phone');
const birthDate = document.querySelector('#birthDate');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const p_1_assword = document.querySelector('#password1');
const sameAddressCheckbox = document.getElementById("area");
const correspondenceAddress = document.getElementById("correspondenceAddress");
sameAddressCheckbox.addEventListener("change", function() {
    if (sameAddressCheckbox.checked) {
      correspondenceAddress.style.display = "none";
      birthDate.disabled = true;
      phone.disabled = true;
      phone.value = "";
      birthDate.value = "";
    } else {
      correspondenceAddress.style.display = "block";
      phone.disabled = false;
      birthDate.disabled = false;
    }
  });




Nname.addEventListener('input', () => checkRequired(Nname));
Nname.addEventListener('input', () => checkLength(Nname,3));
email.addEventListener('input', () => checkEmail(email));
p_1_assword.addEventListener('input',()=>checkPassword(password,p_1_assword));
password.addEventListener('input', () => checkPasswordStrength(password));
phone.addEventListener('input',()=>checkLength(phone,9))
birthDate.addEventListener('input',()=>checkAge(birthDate));
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      alert('Formularz został poprawnie wypełniony.');
    }
  });