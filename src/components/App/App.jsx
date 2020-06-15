import React, { useState, useCallback, useEffect} from 'react'
import comicBookHandler from '../../helpers/comicBook'
import { useDropzone } from 'react-dropzone'

import Upload from '../Upload'
import Viewer from '../Viewer'
import Loading from '../Loading'
import Error from '../Error'

const App = (props) => {
  const [comic, setComic] = useState()
  const [image, setImage] = useState()
  const [err, setError] = useState()
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback(acceptedFiles => {
    setLoading(true)

    comicBookHandler.readFile(acceptedFiles[0])
    .then((comic) => {
      comicBookHandler.getImages(comic)
      .then((images) => {
        setComic(images)
        setLoading(false)
      })
    })
    .catch(setError)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const loadImage = (index) => {
    setLoading(true)

    comicBookHandler.getImage(comic[index])
    .then((image) => {
      setImage(image)
      setLoading(false)
    })
  }

  useEffect(() => {
    if (comic) loadImage(0)
  }, [comic])

  if (err) return <Error/>

  return (
    <>
    
    { loading && <Loading/>}

    { comic
    ? <Viewer image={image} totalPages={comic.length} loadImage={loadImage}/>
    : <Upload getRootProps={getRootProps} getInputProps={getInputProps} isDragActive={isDragActive}/>
    }

    </>
  )
}

export default App
