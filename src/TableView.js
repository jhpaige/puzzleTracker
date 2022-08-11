import React, { useState } from "react";
import { getPuzzles } from './DataController';
import { Container, Grid } from "@mui/material";

const TableView = () => {

  const [isRow, setIsRow] = useState('row');
  const [dataArray, setDataArray] = useState([]);
  
  // Stores content from backend in array of photos and content
  getPuzzles(setDataArray);

  // Loops through photos then content
  const gridBoxes = dataArray.map((row, index) => {
    return <Grid 
      container
      key={`${row.name}->${index}`}
      direction={isRow}
      justify="space-evenly"
      alignItems="center"
    >
      <Grid
        item
        key={`puzzlePic${index}`}
        xs={ isRow==='row' ? 2 : 12 }
      >
        <img src={row.image} style={{width: '300px'}} />
      </Grid>
      <Grid
        item
        key={`puzzleData${index}`}
        xs={ isRow==='row' ? 10 : 12 }
      >
        {row.name}
        {row.times}
      </Grid>
    </Grid>
  });

  return (
    <Container
      justify="center"
      align="center"
    >
      <h1 style={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>puzzleTracker</h1>
      {gridBoxes}
    </Container>
  );

}

export default TableView;