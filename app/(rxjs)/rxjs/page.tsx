'use client';

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TextInputCount from "./textInputCount";
import { Subscribe } from '@react-rxjs/core';

const Rxjs = () => {

  return(
      <Box >
        <Typography 
          sx={{
            fontSize: 100,
            textAlign: 'center',
            mb: '10px'
          }}
        >RxJS Playground</Typography>
        <Subscribe>
          <TextInputCount/> 
        </Subscribe>
      </Box>
  )
}



export default Rxjs;
