import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { answering, isiKunci } from '../features/answer/answerSlice'

import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';

function Soal(props) {
  const { soal } = props;

  const answer = useSelector(state => state.answer);
  const dispatch = useDispatch();

  const handleChange = (event, idxSoal, kunci) => {
    dispatch(answering({idx : idxSoal, jawaban : event.target.value}))
    dispatch(isiKunci({idx : idxSoal, kunci : kunci}))
  };

  return (
    <>
      <Typography variant="h5" component="p">
        {soal.isisoal.q}
      </Typography>
      <Typography variant="p">
        {answer.answer.map((isi,i) => (<div key={i}>{isi}&nbsp; </div>))}
      </Typography>
      <RadioGroup onChange={event => handleChange(event, soal.idx, soal.isisoal.a) }>
        {
          soal.isisoal.opsi.map((opt, i) => (
            <FormControlLabel key={i} value={opt} control={<Radio />} label={opt} />
          ))
        }
      </RadioGroup>
      <Divider />
    </>
  );
}

export default Soal;