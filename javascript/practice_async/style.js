const getTodos = (src) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", function () {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });
    request.open("GET", src);
    request.send();
  });
};

getTodos("./random11.json")
  .then((data) => {
    console.log("promise 1 resolve: ", data);
    return getTodos("./random2.json");
})
.catch((err) => {
    console.log("promise 1 reject: ", err);
    return getTodos("./random2.json");
  })
  .then((data) => {
    console.log("promise 2 resolve: ", data);
    return getTodos("./random3.json");
})
.catch((err) => {
    console.log("promise 2 reject: ", err);
    return getTodos("./random3.json");
  })
  .then((data) => {
    console.log("promise 3 resolve: ", data);
  })
  .catch((err) => {
    console.log("promise 3 reject: ", err);
  });
