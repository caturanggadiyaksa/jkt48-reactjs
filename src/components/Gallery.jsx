import React from 'react'
import '../assets/css/galery.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'


const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        // {
        //     id: ,
        //     imgSrc: '',
        // },
        
    ]

  return (
    <>
        <div className='pt-28'>
        
            <h1 className="text-center text-2xl">Galery</h1>
            
            <div className='gallery mt-4'>
                {data.map((item, index)=> {
                    return(
                        <div className='image' key={index}>
                            <img style={{ width: '100%' }} src={item.imgSrc} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>

    </>
    
  )
}

export default Gallery