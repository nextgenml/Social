const HeaderCard = ({ title = "", value = "", Icon }) => {
  return (
    <div className="flex items-center justify-between p-3 font-medium text-white bg-blue-500 border-b-4 border-blue-600 rounded-md shadow-lg group">
      <div className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 group-hover:rotate-12">
        <Icon className="text-2xl text-blue-600" />
      </div>
      <div className="text-right">
        <p className="text-2xl">{value}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default HeaderCard;
