import SubDisorder from "./SubDisorder";

const Disorder = () => {
    return(
        <span className=" pt-2 grid grid-cols-5 gap-4">
            <SubDisorder value="간장애" />
            <SubDisorder value="뇌병변장애" />
            <SubDisorder value="뇌전증장애" />
            <SubDisorder value="시각장애" />
            <SubDisorder value="신장장애" />
            <SubDisorder value="심장장애" />
            <SubDisorder value="안면장애" />
            <SubDisorder value="언어장애" />
            <SubDisorder value="자폐성장애" />
            <SubDisorder value="장루요루장애" />
            <SubDisorder value="정신장애" />
            <SubDisorder value="지적장애" />
            <SubDisorder value="지체장애" />
            <SubDisorder value="호흡기장애" />
            <SubDisorder value="특수교육법상장애인" />
            <SubDisorder value="국가유공" />
        </span>
    );
};

export default Disorder;