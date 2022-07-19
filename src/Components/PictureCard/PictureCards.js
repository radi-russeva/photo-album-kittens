import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import './PictureCards.css';

export const PictureCards = (props) => {
  const [editing, setEditing] = useState(false);
  return (
    props.cards.map((card) => <div className='pictureCardsContainer'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={card.photoURl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.photoName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.photoDescription}
          </Typography>
        </CardContent>
        <CardActionArea>
          <Button size="small" onClick={() => 
            {props.getPhotoId(card.photoId);
            console.log(card.photoId)}
          }
            >
            Edit
          </Button>
          <Button size="small" onClick={() => props.deletePhoto(card.photoId)} color="error">
            Delete
          </Button>
        </CardActionArea>
      </Card>
    </div>)

  );
}