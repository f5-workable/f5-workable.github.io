import SubDisorder from "./SubDisorder";

const Disorder = ({state, setState}) => {
    return(
        <span className=" pt-2 grid grid-cols-5 gap-4">
            <SubDisorder value="간장애" state={state} setState={setState} />
            <SubDisorder value="뇌병변장애" state={state} setState={setState} />
            <SubDisorder value="뇌전증장애" state={state} setState={setState} />
            <SubDisorder value="시각장애" state={state} setState={setState} />
            <SubDisorder value="신장장애" state={state} setState={setState} />
            <SubDisorder value="심장장애" state={state} setState={setState} />
            <SubDisorder value="안면장애" state={state} setState={setState} />
            <SubDisorder value="언어장애" state={state} setState={setState} />
            <SubDisorder value="자폐성장애" state={state} setState={setState} />
            <SubDisorder value="장루요루장애" state={state} setState={setState} />
            <SubDisorder value="정신장애" state={state} setState={setState} />
            <SubDisorder value="지적장애" state={state} setState={setState} />
            <SubDisorder value="지체장애" state={state} setState={setState} />
            <SubDisorder value="호흡기장애" state={state} setState={setState} />
            <SubDisorder value="특수교육법상장애인" state={state} setState={setState} />
            <SubDisorder value="국가유공" state={state} setState={setState} />
        </span>
    );
};

export default Disorder;