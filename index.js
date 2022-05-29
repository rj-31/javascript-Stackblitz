const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let flag = Math.random();
    if (flag < 0.5) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
});

myPromise
  .then(() => {
    console.log('YAY!! Resolved');
  })
  .catch(() => {
    console.log('Sorry :(');
  });
