function fetchData() {
  fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/10?formato=json")
    .then((response) => console.log(response) response.json())
}

function takeData(val) {
  return val.slice(1, 11);
}

fetchData();
