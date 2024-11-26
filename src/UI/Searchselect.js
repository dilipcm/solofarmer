import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [category, setCategory] = React.useState('All Products'); // Set default value

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth >
        {/* Optional InputLabel */}
        <InputLabel id="demo-simple-select-label" sx={{ display: 'none' }}>
          Select Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
          sx = {{height:'30px'}}
        >
          <MenuItem value='All Products'>All Categories</MenuItem>
          <MenuItem value='fruit-veg'>Fruits and Vegetables</MenuItem>
          <MenuItem value='grain-cereal'>Grains and Cereals</MenuItem>
          <MenuItem value='legumes'>Legumes</MenuItem>
          <MenuItem value='nuts'>Nuts and Seeds</MenuItem>
          <MenuItem value='dairy'>Dairy Products</MenuItem>
          <MenuItem value='oils'>Oils and Fats</MenuItem>
          <MenuItem value='herbs'>Herbs and Spices</MenuItem>
          <MenuItem value='seafood'>Fish and Seafood</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
