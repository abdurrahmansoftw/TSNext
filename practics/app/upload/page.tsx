'use client'
import { Button } from '@mui/material'
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import { useState } from 'react'

interface UploadPageProps {
  public_id: string
}

const UploadPage = () => {
  const [publicId, setPublicid] = useState('')

  return (
    <>
      {publicId && <CldImage width='270' height='180' src={publicId} sizes='100vw' alt='Description of my image' />}
      <CldUploadWidget
        uploadPreset='nvmtnryr'
        onUpload={(result, widget) => {
          if (result.event !== 'success') return
          const info = result.info as UploadPageProps
          setPublicid(info.public_id)
        }}>
        {({ open }) => (
          <Button
            variant='outlined'
            color='primary'
            onClick={() => {
              open()
            }}>
            Upload files
          </Button>
        )}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage
