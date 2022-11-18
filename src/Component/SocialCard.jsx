import React from "react";

const SocialCard = ({
  Icon,
  IconClass = "",
  cardData = {
    Good: [
      { title: "Like", value: 1000 },
      { title: "Comment", value: 1000 },
      { title: "Follow", value: 1000 },
    ],
    Best: [
      { title: "Like", value: 2000 },
      { title: "Comment", value: 2000 },
      { title: "Follow", value: 2000 },
    ],
    Better: [
      { title: "Like", value: 3000 },
      { title: "Comment", value: 3000 },
      { title: "Follow", value: 3000 },
    ],
  },
}) => {
  const keys = Object.keys(cardData);
  console.log;
  return (
    <div className="relative w-64 px-6 py-6 my-4 bg-white shadow-xl rounded-xl">
      {Icon && (
        <div
          className={`absolute flex items-center px-4 py-4 text-white rounded-full shadow-xl  left-4 -top-6 ${IconClass}`}
        >
          <Icon className="text-2xl" />
        </div>
      )}
      <div className={`${!Icon ? "-mt-2" : "mt-5"}`}>
        <p className="my-2 text-xl font-semibold">Good</p>{" "}
        <div className="border-t-2" />
        <ul className="text-gray-500 ">
          {cardData?.Good?.map((item) => (
            <li> {`${item.title} - ${item.value}`} </li>
          ))}
        </ul>
        <p className="my-2 mt-5 text-xl font-semibold">Best</p>{" "}
        <div className="border-t-2" />
        <ul className="text-gray-500 ">
          {cardData?.Best?.map((item) => (
            <li> {`${item.title} - ${item.value}`} </li>
          ))}
        </ul>
        <p className="my-2 mt-5 text-xl font-semibold">Better</p>{" "}
        <div className="border-t-2" />
        <ul className="text-gray-500 ">
          {cardData?.Better?.map((item) => (
            <li> {`${item.title} - ${item.value}`} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialCard;
