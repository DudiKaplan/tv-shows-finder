import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { fontSize } from '@mui/system';

const Movie = ({score , show}) => {

   const  [isClick, setIsClick]  = useState(false)
   const [cast , setCast] = useState([])

   useEffect(() => {
    const fetchData  = async() => {
      if(isClick){
        const res = await fetch(`https://api.tvmaze.com/shows/${show.id}?embed=cast`);
        const {_embedded} = await res.json();
        setCast(_embedded.cast.filter(m => m.character.image !== null));
        console.log(_embedded.cast.filter(m => m.character.image !== null))
      }else{
        setCast([])
      } 
    }

    fetchData();

  },[isClick])

   const onClick = () => {
       setIsClick(!isClick)
   }

   const imgStyle = {
    height: 'auto',
    width: '30%',
    float: 'left',
    marginRight : '15px'
  };

  const divStyle = {
      padding : '20px'
  }

  const castStyle = {
    display: 'inline-block',
    width: '100%',
    marginLeft: '25px',
    marginTop: '25px',
    fontSize : '20px'

  }

  
  return (
    <>
    {isClick ? 
        <div className='movie-item-full'>
            <div className='header' >
                <div>{show.name}</div>
                <CloseIcon  onClick={onClick} />
            </div>
            
            <div style={divStyle} >
                <a href={show.url} >Go to website</a>
                <img src={show.image.original} style={imgStyle}/>
                <div dangerouslySetInnerHTML={{__html : show.summary}}></div>
            </div>


            <div style={castStyle}>Cast</div>
         
            <div className='cast'>
                {cast.map((c , i) => (
                    <div key={i} className='cast-item'>
                        <div>{c.person.name}</div>
                        <hr></hr>
                        <div>{c.character.name}</div>
                        <img src={c.character.image.medium} />
                    </div>
                ))}
            </div>
        </div> 
        : 
        <div onClick={onClick} className='movie-item'>
            <p>{show.name}</p>
            <img src={show.image.medium} />
            <p>score : {score.toFixed(1)}</p>
        </div>
    }
    </>
  )
}

export default Movie
