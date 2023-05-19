import Item from "./Item";

const CompanyBoardAside = ({ boards, state, setState, count }) => {
  return (
    <>
      {boards?.map((board) => (
        <Item
          key={board.j_id}
          board={board}
          id={board.j_id}
          state={state}
          setState={setState}
        />
      ))}
    </>
  );
};

export default CompanyBoardAside;
