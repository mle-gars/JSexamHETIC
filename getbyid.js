const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("http://localhost:3000/products/id/2", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

