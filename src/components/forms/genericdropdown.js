import '../Input.css'
import React, { useState } from "react";

// React.forwardRef allows this component to provide the reference info to the parent calling it
const GenericDropdown = React.forwardRef(
  ({ label, passedValue, passedOptions, onChange, invalid }, ref) => {
    const [options, setOptions] = useState(passedOptions);
    const [value, setValue] = useState(passedValue);

    return (
      <div>
        <label className='titles'>
          {label}
        </label>
        <br /><br />
        {!invalid && (
        <select
          className='dropdown-styling'
          ref={ref}
          defaultValue={value}
          onChange={onChange}
        >
          {Object.entries(options).map(([k, v]) => (
            <option value={k} key={k}>
              {v}
            </option>
          ))}
        </select>
        )}
        {invalid && (
          <>
          {value !== ref.current.value ? setValue(ref.current.value) : null}
          <select
          className='greydropdown-styling'
          ref={ref}
        >
          <option value={ref.current.value} key={ref.current.value}>
            {""}
          </option>
        </select>
        </>
        )}
      </div>
    );
  }
);

export default GenericDropdown;