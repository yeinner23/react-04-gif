import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import Gifgrid from './components/Gifgrid'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])




  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(c => (<Gifgrid key={c} category={c} />))
        }
      </ol>
    </>
  )
}


export default GifExpertApp
