let myPromise = new Promise(function (myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open("GET", "https://reqres.in/api/users?page=2");
  req.onload = function () {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("error");
    }
  };
  req.send();
});

myPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
