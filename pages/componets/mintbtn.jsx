import { useState } from "react";

const Mintbtn = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    return setValue(e.target.value);
  };

  return (
    <>
      <div className="mint">
        <input
          className="mintinput"
          type="text"
          placeholder="Token"
          value={value}
          onChange={handleChange}
        />

        <button className="container-btn">
          <img src="/images/mint.svg" alt="" />
        </button>
      </div>
    </>
  );
};

export default Mintbtn;
