import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialColor = {
  color: "",
  code: {
    hex: "",
  },
};

function AddColor(props) {
  const [color, setColor] = useState(initialColor);
  const history = useHistory()
  const {updateColors} = props

  const addColor = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('/colors',color)
    .then((res)=>{
        updateColors(res.data)
    })
    .catch((err)=>console.log(err))
    history.push('/bubblepage')
};

  return (
    <form onSubmit={addColor}>
    <legend>Add color</legend>
    <label>
      color name:
      <input
        onChange={(e) => setColor({ ...color, color: e.target.value })}
        value={color.color}
      />
    </label>
    <label>
      hex code:
      <input
        onChange={(e) =>
          setColor({
            ...color,
            code: { hex: e.target.value },
          })
        }
        value={color.code.hex}
      />
    </label>
    <button>Submit</button>
  </form>
    
  );
}

export default AddColor;
