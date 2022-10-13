import * as React from 'react';

import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function Soal(props) {
  const { soal } = props;

  return (
    <FormControl sx={{ pt: 8 }}>
      <Typography variant="h5" component="p">
        {soal[0].q}
      </Typography>
      <RadioGroup>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

export default Soal;