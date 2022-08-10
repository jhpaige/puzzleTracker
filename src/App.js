import { CardHeader, Container, Grid } from "@mui/material";
import React, { useState } from "react";

const App = () => {

  const [isRow, setIsRow] = useState('row');

  // Stores content from backend in array of photos and content
  const dataArray = [];

  // Loops through photos then content
  const gridBoxes = dataArray.map((row, index) => {
    return <Grid 
      item
      key={`gridBox${index}`}
      xs={ isRow==='row' ? 5 : 10 }
    >
      {row}
    </Grid>
  });

  return (
    <Container
      justify="center"
      alignItems="center"
    >
      <h1 style={{height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>puzzleTracker</h1>
      <Grid
        container
        direction={isRow}
        justify="space-evenly"
        alignItems="center"
      >
        {gridBoxes}
      </Grid>
    </Container>
  );
}

export default App;