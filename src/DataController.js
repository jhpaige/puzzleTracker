const getPuzzles = (setDataArray) => {
  fetch('http://localhost:3000/api')
    .then((response) => response.json())
    .then((data) => setDataArray(data))
    .catch((e) => console.log(e));
}

module.exports = { getPuzzles };