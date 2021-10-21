let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let ourFormData = new FormData(event.target);
  let userFirstName = ourFormData.get("firstName");
  let updatedHtmlContent = `
<h2>Congratulations, ${userFirstName}!</h2>

                    <p>You made the right Choice!</p>
                    
                    <p class="fine-print">We'll never share your information without your permission</p>

`;

  let message = document.getElementById("main-content");
  message.innerHTML = updatedHtmlContent;
});
