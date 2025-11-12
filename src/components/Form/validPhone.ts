export const validPhone = () => {
    let newPhone = "";
    let oldPhone = "";

    return function (value: string) {
      if (!value) {
        return value;
      }
      const num = value.replace(/\D/g, "");
      newPhone = value;
      if (newPhone.length < oldPhone.length) {
        oldPhone = newPhone;
        return value;
      }
      if (num === "8" || num === "9") {
        newPhone = "+7 ";
        if (num === "9") newPhone += num;
      }
      if (num.length === 2) {
        newPhone = newPhone.slice(0, 3) + "(" + num.slice(1);
      }
      if (num.length === 4) {
        newPhone = newPhone.slice(0, 6) + num[num.length - 1] + ") ";
      }
      if (num.length === 7 || num.length === 9) {
        newPhone = newPhone + " - ";
      }
      if(num.length > 11){    
        return oldPhone;
      }

      oldPhone = newPhone;
      return newPhone;
    };
  };