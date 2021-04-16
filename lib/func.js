export const checkPassword = (password, final) => {
    if(password!=final){
      return ('Passwords do not match');
    }
    if (password.length<8){
      return ("Passwords should be atleast 8 characters");
    }
    return ('');
  }
  
export function ValidateEmail(mail) 
    {
    return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail) && mail.length>1);
    
    }

export const  checkEmail = (email) => {

    if(ValidateEmail(email)){
        return '';
    }
    return 'You have entered an invalid email address!';

}

export const checkname = (name) =>{
  if(name.length>0 && /^[a-zA-Z]/.test(name) ){
    return '';
  }
    return 'Invalid Name';
}

export const checkCid = (cid) => {
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if((cid.length>=4 && /^[a-zA-Z0-9]/.test(cid)) && !format.test(cid)){
    return "";
  }
  return 'Invalid ID';
}

export const checkExp = (years) =>{
  if(years>-1){
    return '';
  }
  return 'Invaild number'
}

export const checkSkill = (skill) => {
  if(skill==='---Select---'){
    return 'Select a item';
  }
  return ''
}