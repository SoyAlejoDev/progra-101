namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length ? true : false;
  };

  export const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText("alejo"));
