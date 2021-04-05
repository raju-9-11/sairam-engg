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
  else{
    return 'Invalid Name';
  }
}

export const checkCid = (cid) => {
  if(cid.length<4){
    return "Invalid ID";
  }
  return '';
}