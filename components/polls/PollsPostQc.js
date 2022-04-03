import React from 'react'
import styles from './PollsPostQc.module.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function PollsPostQc() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <p>Quebec - Skin - Poll</p>
      </div>
      <div className={styles.body}>
          <div className={styles.title}>
              <p>Hello World</p>
          </div>
          <div className={styles.question}>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className={styles.answer}>
                    <div>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Answer</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="one" control={<Radio />} label="One" />
                                    <FormControlLabel value="two" control={<Radio />} label="Two" />
                                    <FormControlLabel value="three" control={<Radio />} label="Three" />
                                </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default PollsPostQc