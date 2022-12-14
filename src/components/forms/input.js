import '../Input.css'
import React, { useState } from "react";

// React.forwardRef allows this component to provide the reference info to the parent calling it
const InputForm = React.forwardRef(({ label, passedValue, onChange }, ref) => {
  return (
    <div>
      <label className='titles'>
        {label}
      </label>
      <br /><br />
      <input
        className='input-styling'
        ref={ref}
        defaultValue={passedValue}
        onChange = {onChange}
      ></input>
    </div>
  );
});

export default InputForm;