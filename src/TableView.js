import React, { useState } from "react";
import { getPuzzles, addPuzzle } from './DataController';
import { Container, Button, TextField } from "@mui/material";
import RowView from './RowView';

const TableView = () => {

  const [newName, setNewName] = useState('');
  const [newFastestTime, setNewFastestTime] = useState(0);
  const [newImageURL, setNewImageURL] = useState('');
  const [dataArray, setDataArray] = useState([]);
  
  // Stores content from backend in array of photos and content
  getPuzzles(setDataArray);

  // Adds new puzzle to database if new one created
  const handleNewPuzzle = () => addPuzzle(newName, setNewName, newFastestTime, setNewFastestTime, newImageURL, setNewImageURL);

  // Loops through photos then content
  const gridBoxes = dataArray.map((row, index) => {
    return <RowView key={`${row.name}->${index}`} row={row} index={index} />
  });

  return (
    <Container
      justify="center"
      align="center"
    >
      <h1 style={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>puzzleTracker</h1>
      <Container
        justify="center"
        align="center"
        display="flex"
        style={{borderBottom: "5px solid #999", paddingBottom: 10}}
      >
        <div style={{marginTop: -10}}><strong>New Puzzle</strong></div>
        <br />
        <TextField required label="Name" style={{margin: 10}} value={newName} onChange={e => setNewName(e.target.value)}/>
        <TextField required label="Fastest Time (s)" style={{margin: 10}} type="number" value={newFastestTime} onChange={e => setNewFastestTime(e.target.value)}/>
        <TextField required label="Image URL" style={{margin: 10}} value={newImageURL} onChange={e => setNewImageURL(e.target.value)}/>
        <br />
        <Button disabled={!newName || !newFastestTime || !newImageURL} variant="contained" style={{margin: 10}} sx={{ backgroundColor: 'green' }} onClick={handleNewPuzzle}>Add Puzzle</Button>
        <br />
        Field Required *
      </Container>
      {gridBoxes}
    </Container>
  );

}

export default TableView;