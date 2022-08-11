import React, { useState } from 'react';
import { Grid, Button, TextField } from "@mui/material";
import { deletePuzzle, updatePuzzle } from './DataController';

const RowView = (props) => {

  const row = props.row;
  const index = props.index;

  const [puzzleName, setPuzzleName] = useState(row.name);
  const [puzzleFastestTime, setPuzzleFastestTime] = useState(row.fastestTime);
  const [puzzleImageURL, setPuzzleImageURL] = useState(row.imageURL);

  const handleDeletePuzzle = () => deletePuzzle(row.name);
  const handleSavePuzzle = () => updatePuzzle(row.name, puzzleName, puzzleFastestTime, puzzleImageURL);

  return (
    <Grid 
      container
      key={`row${index}`}
      direction='row'
      justify="space-evenly"
      alignItems="center"
      style={{padding: '20px', borderBottom: '1px solid #999'}}
    >
      <Grid
        item
        key={`puzzlePic${index}`}
        xs={6}
      >
        <img src={row.imageURL} style={{width: '300px'}} />
      </Grid>
      <Grid
        item
        key={`puzzleData${index}`}
        xs={6}
      >
        <TextField required label="Name" style={{margin: 10, padding: 0}} variant='standard' value={puzzleName} onChange={e => setPuzzleName(e.target.value)}/>
        <br />
        <TextField required label="Fastest Time (s)" type="number" style={{margin: 10, padding: 0}} variant='standard' value={puzzleFastestTime} onChange={e => setPuzzleFastestTime(e.target.value)}/>
        <br />
        <TextField required label="Image URL" style={{margin: 10, padding: 0}} variant='standard' value={puzzleImageURL} onChange={e => setPuzzleImageURL(e.target.value)}/>
        <br />
        <Button disabled={row.name == puzzleName && row.fastestTime == puzzleFastestTime && row.imageURL == puzzleImageURL || !puzzleName || !puzzleFastestTime || !puzzleImageURL} variant="contained" style={{margin: 10}} onClick={handleSavePuzzle}>Save</Button>
        <Button variant="contained" style={{margin: 10, backgroundColor: 'red'}} onClick={handleDeletePuzzle}>Delete</Button>
      </Grid>
    </Grid>
  )
}

export default RowView;