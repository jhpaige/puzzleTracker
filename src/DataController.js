const getPuzzles = (setDataArray) => {
  fetch('http://localhost:3000/api')
    .then((response) => response.json())
    .then((data) => setDataArray(data))
    .catch((e) => console.log(e));
}

const addPuzzle = (newName, setNewName, newFastestTime, setNewFastestTime, newImageURL, setNewImageURL) => {
  fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newName,
      fastestTime: newFastestTime,
      imageURL: newImageURL
    })
  })
    .then((response) => response.json())
    .then((data) => {
      setNewName('');
      setNewFastestTime(0);
      setNewImageURL('');
    })
    .catch((e) => console.log(e));
}

const updatePuzzle = (oldName, puzzleName, puzzleFastestTime, puzzleImageURL) => {
  fetch('http://localhost:3000/api', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      oldName: oldName,
      newName: puzzleName,
      fastestTime: puzzleFastestTime,
      imageURL: puzzleImageURL
    })
  })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
}

const deletePuzzle = (name) => {
  fetch('http://localhost:3000/api', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name})
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
}

module.exports = { getPuzzles, addPuzzle, deletePuzzle, updatePuzzle };