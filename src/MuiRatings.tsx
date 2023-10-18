import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MuiRatings() {
  const [value, setValue] = useState<number | null>(3);

  console.log(value);

  // handle changing the value of rating, internally the rating value is also passed to the onChange function.
  const handleChange = (_event: React.ChangeEvent<{}>, value: number | null) => {
    setValue(value);
  }

  return (
    <Stack spacing={4}>

      {/* Creating ratings */}
      <Stack spacing={2}>
        <Rating 
          value={value} 
          onChange={handleChange} 
          precision={0.5} 
        />
      </Stack>

      {/* Ratings with the help of icons */}
      <Stack spacing={2}>
        <Rating 
          value={value} 
          onChange={handleChange} 
          precision={0.5} 
          icon={<FavoriteIcon fontSize='inherit' color='error' />}
          emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
          readOnly
        />
      </Stack>

      {/* Higlighting/selecting a specific rating */}
      <Stack spacing={2}>
        <Rating 
          value={value} 
          onChange={handleChange} 
          precision={0.5} 
          icon={<FavoriteIcon fontSize='inherit' color='error' />}
          emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
          highlightSelectedOnly
        />
      </Stack>
    </Stack>
  )
}

export default MuiRatings;