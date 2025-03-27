const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");
    const userInput = input.value.trim();

    if (!userInput) {
      alert("Please enter a movie ID");
      return;
    }

    fetch(`http://localhost:3000/movies/${userInput}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.textContent = data.title;
        summary.textContent = data.summary;

        // Clear the input field
        input.value = "";
      })
      .catch((error) => {
        console.error("Error:", error);
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.textContent = "Movie not found";
        summary.textContent = "";
      });
  });
};

document.addEventListener("DOMContentLoaded", init);

document.addEventListener("DOMContentLoaded", init);
