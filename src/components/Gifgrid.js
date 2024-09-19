import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
//import { getGifs } from '../helpers/getGifs'

const Gifgrid = ({ category }) => {
    const { data: Images, loading } = useFetchGifs(category)
    return (<>
        <h3>{category}</h3>
        <div className='card-grid animate__animated animate__bounce'>
            {loading && <p className='animate__animated animate__bounceInUp'>Cargado...</p>}
            {
                Images.map(img => (<GifGridItem key={img.id}{...img} />))
            }
        </div>
    </>
    )
}
export default Gifgrid
