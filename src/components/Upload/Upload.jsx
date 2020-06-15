import React from 'react'
import { withTheme } from 'styled-components'
import { Wrapper } from '../../styles/global'
import { useTranslation } from 'react-i18next'

const Upload = (props) => {
  const { t } = useTranslation()

  return (
    <Wrapper {...props.getRootProps()}>
      <i className='bx bx-upload'></i>
      <input {...props.getInputProps()} />
      {
        props.isDragActive ?
          <p className="text" >{t(`Drop the files here ...`)}</p> :
          <p className="text">{t(`Drag 'n' drop some files here, or click to select files`)}</p>
      }
      <p className="description">{t('(We only accept .rar, .zip, .cbr and .cbz)')}</p>
    </Wrapper>
  )
}

export default withTheme(Upload)
