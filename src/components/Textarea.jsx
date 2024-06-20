import { useField } from 'formik'
import React from 'react'

const Textarea = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props)
  return (
    <div className='w-full max-w-[500px] flex flex-col gap-5'>
        <label className="label">{ label }</label>
        <textarea { ...props } { ...field } className='w-full h-72 bg-zinc-900 text-xl font-medium capitalize rounded-md px-4 py-3 outline-0 resize-none'></textarea>
    </div>
  )
}

export default Textarea