import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function LanguajeButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color='primary'
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      size='small'
      variant='container'
      sx = {{border:0.2, borderRadius:50, color:'#5a5936'}}
    >
      <ToggleButton value="ESP" onClick={() => {
        alert('ESP');
        }}> ESP </ToggleButton>
      <ToggleButton value="ENG"onClick={() => {
        alert('ENG');
        }}>ENG</ToggleButton>
    </ToggleButtonGroup>
  );
}
