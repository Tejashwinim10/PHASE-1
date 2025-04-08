export const submitUserData = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('User Data Submitted:', data);
        resolve('Success');
      }, 1500);
    });
  };
  