import React, { Fragment } from "react";
import { BsCheck2Circle } from "react-icons/bs";

const BadgeButton = ({ name, className = "", val, ...props }) => {
  return (
    <div className={` flex flex-col items-center gap-y-1 `} {...props}>
      <div
        className={`bg-white rounded-sm text-blue-600 p-1 px-3 shadow-md text-sm ${className}`}
      >
        {name}{" "}
      </div>
      {val && (
        <Fragment>
          <BsCheck2Circle className="text-2xl" />
          <p className="text-xs">{val}</p>{" "}
        </Fragment>
      )}
    </div>
  );
};

export default BadgeButton;
