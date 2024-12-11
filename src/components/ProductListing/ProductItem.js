import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductItem({name,description,price}) {
  return (
    <Card sx={{ maxWidth: 600, mx:2,my:1}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://m.media-amazon.com/images/I/31ZY9Ls0TnL.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
        </Typography>
        <Typography>
            &#8377;{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
}

