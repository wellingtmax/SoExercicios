const api_url = "https://brasilapi.com.br/api/registrobr/v1/";

const domain = "uol.com.br";

fetch(`${api_url}${domain}`)
  .then(response => {
    if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`)}
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
