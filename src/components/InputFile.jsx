import classNames from "classnames";
import { useField } from "formik";
import React, { useState } from "react";
import { FaCloudArrowDown } from "react-icons/fa6";

const InputFile = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [ image, setImage ] = useState(null)

  const dropHandle = e => {
    e.preventDefault()
    setImage(URL.createObjectURL(e.dataTransfer.files[0]))
    helpers.setValue(e.dataTransfer.files[0])
  }

  const changeHandle = e => {
    setImage(URL.createObjectURL(e.target.files[0]))
    helpers.setValue(e.target.files[0])
  }

  return (
    <div className="w-full max-w-[500px]">
      <label
        onDragOver={(e) => e.preventDefault()}
        onDrop={dropHandle}
        className={classNames("flex items-center justify-center flex-col text-zinc-500  w-full h-72 max-w-[500px] rounded-md border-2 border-dashed border-zinc-500", { '!border-black outline outline-1': image })}
      >
        { !image && <>
            <FaCloudArrowDown size={100} />
        <span className="text-3xl text-center font-medium">
          Drag and Drop or Click here <br /> to Upload Image
        </span>
        </> }

            { image && <img className="w-full h-full object-cover rounded-md" src={image} alt="" /> }

        <input type="file" onChange={changeHandle} hidden accept="image/*" />
      </label>
    </div>
  );
};

export default InputFile;
