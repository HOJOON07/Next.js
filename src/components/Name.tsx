import React from "react";

const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div style={{ padding: "16px", backgroundColor: "grey" }}>
      <label htmlFor="name">이름</label>
      <input
        id="name"
        className="input-name"
        type="next"
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Name;
