function passWordChecker(password){
  let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{9,}/;
   
      if(regex.test(password) === false){
        return  "Password invalid please enter a valid password!!"
      } 
      return regex.test(password);
  
};


function passwordIsOk(password){
  let regex1 = /[a-zA-Z0-9]{9,}/;
  let regex2 = /(?=.*[a-z])[a-z]+/;
  let regex3 = /(?=.*[A-Z])[A-Z]+/;
  let regex4 = /(?=.*[0-9])[0-9]+/;

   if(password != null && regex1.test(password) === true && regex2.test(password) === true){
          return true
      }
          
  if(password != null &&  regex1.test(password)  === true &&  regex3.test(password) === true){
          return true
      }
  if(password != null &&  regex1.test(password) === true &&  regex4.test(password) === true){
          return true
      }
  else
  {
          return false
   
  }
  
};
 