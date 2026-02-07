(() => {
  //?fetch api con asyn/await
  const url: string = "https://jsonplaceholder.typicode.com/comments/";
  //   fetch(url)
  //     .then((response) => {
  //       //   console.log(response);
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("hubo un error...");
  //     })
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error.message));

  const consularAPI = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("hubo un error...");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //   consularAPI();
})();
