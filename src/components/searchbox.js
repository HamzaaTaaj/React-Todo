import React from "react";

const searchbox = () => {
  return (
    <div>
      <div className="SearchBox">
        <div className="searchbox">
          <input type="text" placeholder="Add a new task" />
        </div>
        <div>
          <button className="custom-button">
            Clear <span className="plus-icon"> &#8853;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default searchbox;
