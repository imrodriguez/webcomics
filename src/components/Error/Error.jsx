import React from 'react'
import { withTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Wrapper } from '../../styles/global'

const Error = (props) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <i className='bx bx-error'></i>
      <p>{t('Some error happens')}</p>
      <p className="description">{t('Maybe the file type is not supported (We only accept .rar, .zip, .cbr and .cbz)')}</p>
    </Wrapper>
  )
}

export default withTheme(Error)
