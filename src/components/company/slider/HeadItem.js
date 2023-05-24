const HeadItem = ({ src }) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <img className="w-full h-80 object-contain" src={src} alt="slider img" />
    </div>
  );
};

export default HeadItem;
