import React from 'react';


const ImgList = (props) => {
    console.log("hi props",props.images)
  const image = props.images.map((img) => {
      return <img alt={img.description} key={img.id} src={img.urls.regular}/>
  });
  return <div>{image}</div>
  
} 

export default ImgList;
