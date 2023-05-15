import Item from "./Item";

const CompanyBoardAside = ({ state, setState }) => {
  return (
    <>
      {[1, 2, 3].map((idx) => (
        <Item state={state} setState={setState} idx={idx} />
      ))}
    </>
  );
};

export default CompanyBoardAside;
