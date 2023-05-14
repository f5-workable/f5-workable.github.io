import { useEffect, useState } from "react";
import Region from "./Region";
import SubRegion from "./SubRegion";
import LocationList from "./LocationList";

const Location = ({ state, setState }) => {
  const [selectedLocation, setSelectedLocation] = useState("전체");

  const handleSelectedLocation = (e) => {
    setSelectedLocation(e.target.innerText);
  };

  const changeLocation = (e) => {
    const checkboxes = document.getElementsByName("location");
    const targetId = e.target.id;
    const targetValue = e.target.value;
    const targetChecked = e.target.checked;

    if (targetId === "전체") {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      targetChecked
        ? setState(() => [
            ...state.filter((value) => value.split(" ")[0] !== targetValue),
            targetValue,
          ])
        : setState(() => [...state.filter((value) => value !== targetValue)]);
    } else {
      if (state.length < 10 && targetChecked) {
        checkboxes[0].checked = false;
        setState(() =>
          [...state, targetValue].filter((value) => value !== checkboxes[0].value)
        );
      } else if (state.length <= 10 && !targetChecked) {
        checkboxes[0].checked = false;
        setState(() => state.filter((value) => value !== targetValue));
      } else {
        e.target.checked = false;
        alert("지역 선택은 10개까지만 가능합니다.");
      }
    }
  };

  useEffect(() => {
    const checkboxes = document.getElementsByName("location");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
      if (state.includes(checkbox.value)) {
        checkbox.checked = true;
      }
    });
  }, [selectedLocation, state]);

  return (
    <div className="w-full h-auto flex flex-col overflow-hidden bg-white rounded-md border border-solid border-neutral-400">
      <div className="w-full h-[25.1rem] flex border-b border-solid border-neutral-400">
        <div className="w-1/4 h-full bg-white border-r border-solid border-neutral-400 overflow-y-scroll scrollbar-hide">
          <ul className="grid grid-cols-2">
            <Region
              value="전체"
              selectedLocation={selectedLocation}
              onClick={(e) => {
                handleSelectedLocation(e);
                setState([]);
              }}
            />
            <Region
              value="서울"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="부산"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="대구"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="인천"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="광주"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="대전"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="울산"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="세종"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="경기"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="강원"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="충북"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="충남"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="전북"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="전남"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="경북"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="경남"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
            <Region
              value="제주"
              selectedLocation={selectedLocation}
              onClick={handleSelectedLocation}
            />
          </ul>
        </div>
        <div className="w-3/4 h-full overflow-y-scroll scrollbar-hide">
          <ul className="grid grid-cols-3">
            {selectedLocation === "전체" && (
              <li>
                <input name="region" defaultValue="" className="hidden" />
              </li>
            )}
            {selectedLocation === "서울" && (
              <>
                <SubRegion value="서울특별시" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="서울특별시 강남구"
                  labelValue="서울 강남구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 강동구"
                  labelValue="서울 강동구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 강북구"
                  labelValue="서울 강북구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 강서구"
                  labelValue="서울 강서구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 관악구"
                  labelValue="서울 관악구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 광진구"
                  labelValue="서울 광진구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 구로구"
                  labelValue="서울 구로구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 금천구"
                  labelValue="서울 금천구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 노원구"
                  labelValue="서울 노원구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 도봉구"
                  labelValue="서울 도봉구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 동대문구"
                  labelValue="서울 동대문구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 동작구"
                  labelValue="서울 동작구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 마포구"
                  labelValue="서울 마포구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 서대문구"
                  labelValue="서울 서대문구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 서초구"
                  labelValue="서울 서초구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 성동구"
                  labelValue="서울 성동구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 성북구"
                  labelValue="서울 성북구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 송파구"
                  labelValue="서울 송파구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 양천구"
                  labelValue="서울 양천구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 영등포구"
                  labelValue="서울 영등포구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 용산구"
                  labelValue="서울 용산구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 은평구"
                  labelValue="서울 은평구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 종로구"
                  labelValue="서울 종로구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 중구"
                  labelValue="서울 중구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="서울특별시 중랑구"
                  labelValue="서울 중랑구"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "부산" && (
              <>
                <SubRegion value="부산광역시" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="부산광역시 강서구"
                  labelValue="부산 강서구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 금정구"
                  labelValue="부산 금정구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 기장군"
                  labelValue="부산 기장군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 남구"
                  labelValue="부산 남구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 동구"
                  labelValue="부산 동구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 동래구"
                  labelValue="부산 동래구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 부산진구"
                  labelValue="부산 부산진구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 북구"
                  labelValue="부산 북구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 사상구"
                  labelValue="부산 사상구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 사하구"
                  labelValue="부산 사하구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 서구"
                  labelValue="부산 서구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 수영구"
                  labelValue="부산 수영구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 연제구"
                  labelValue="부산 연제구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 영도구"
                  labelValue="부산 영도구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 중구"
                  labelValue="부산 중구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="부산광역시 해운대구"
                  labelValue="부산 해운대구"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "대구" && (
              <>
                <SubRegion value="대구광역시" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="대구광역시 남구"
                  labelValue="대구 남구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대구광역시 달서구"
                  labelValue="대구 달서구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대구광역시 달성군"
                  labelValue="대구 달성군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대구광역시 동구"
                  labelValue="대구 동구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대구광역시 북구"
                  labelValue="대구 북구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대구광역시 서구"
                  labelValue="대구 서구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대구광역시 수성구"
                  labelValue="대구 수성구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대구광역시 중구"
                  labelValue="대구 중구"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "인천" && (
              <>
                <SubRegion value="인천광역시" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="인천광역시 강화군"
                  labelValue="인천 강화군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="인천광역시 계양구"
                  labelValue="인천 계양구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="인천광역시 남동구"
                  labelValue="인천 남동구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="인천광역시 동구"
                  labelValue="인천 동구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="인천광역시 미추홀구"
                  labelValue="인천 미추홀구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="인천광역시 부평구"
                  labelValue="인천 부평구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="인천광역시 서구"
                  labelValue="인천 서구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="인천광역시 연수구"
                  labelValue="인천 연수구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="인천광역시 옹진군"
                  labelValue="인천 옹진군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="인천광역시 중구"
                  labelValue="인천 중구"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "광주" && (
              <>
                <SubRegion value="광주광역시" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="광주광역시 광산구"
                  labelValue="광주 광산구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="광주광역시 남구"
                  labelValue="광주 남구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="광주광역시 동구"
                  labelValue="광주 동구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="광주광역시 북구"
                  labelValue="광주 북구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="광주광역시 서구"
                  labelValue="광주 서구"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "대전" && (
              <>
                <SubRegion value="대전광역시" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="대전광역시 대덕구"
                  labelValue="대전 대덕구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대전광역시 동구"
                  labelValue="대전 동구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대전광역시 서구"
                  labelValue="대전 서구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대전광역시 유성구"
                  labelValue="대전 유성구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="대전광역시 중구"
                  labelValue="대전 중구"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "울산" && (
              <>
                <SubRegion value="울산광역시" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="울산광역시 남구"
                  labelValue="울산 남구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="울산광역시 동구"
                  labelValue="울산 동구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="울산광역시 북구"
                  labelValue="울산 북구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="울산광역시 울주군"
                  labelValue="울산 울주군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="울산광역시 중구"
                  labelValue="울산 중구"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "세종" && (
              <>
                <SubRegion
                  value="세종특별자치시"
                  labelValue="전체"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "경기" && (
              <>
                <SubRegion value="경기도" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="경기도 가평군"
                  labelValue="경기 가평군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 고양시"
                  labelValue="경기 고양시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 고양시 덕양구"
                  labelValue="경기 고양시 덕양구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 고양시 일산동구"
                  labelValue="경기 고양시 일산동구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 고양시 일산서구"
                  labelValue="경기 고양시 일산서구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 과천시"
                  labelValue="경기 과천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 광명시"
                  labelValue="경기 광명시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 광주시"
                  labelValue="경기 광주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 구리시"
                  labelValue="경기 구리시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 군포시"
                  labelValue="경기 군포시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 김포시"
                  labelValue="경기 김포시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 남양주시"
                  labelValue="경기 남양주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 동두천시"
                  labelValue="경기 동두천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 부천시"
                  labelValue="경기 부천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 성남시"
                  labelValue="경기 성남시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 성남시 분당구"
                  labelValue="경기 성남시 분당구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 성남시 수정구"
                  labelValue="경기 성남시 수정구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 성남시 중원구"
                  labelValue="경기 성남시 중원구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 수원시"
                  labelValue="경기 수원시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 수원시 권선구"
                  labelValue="경기 수원시 권선구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 수원시 영통구"
                  labelValue="경기 수원시 영통구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 수원시 장안구"
                  labelValue="경기 수원시 장안구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 수원시 팔달구"
                  labelValue="경기 수원시 팔달구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 시흥시"
                  labelValue="경기 시흥시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 안산시"
                  labelValue="경기 안산시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 안산시 단원구"
                  labelValue="경기 안산시 단원구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 안산시 상록구"
                  labelValue="경기 안산시 상록구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 안성시"
                  labelValue="경기 안성시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 안양시"
                  labelValue="경기 안양시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 안양시 동안구"
                  labelValue="경기 안양시 동안구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 안양시 만안구"
                  labelValue="경기 안양시 만안구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 양주시"
                  labelValue="경기 양주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 양평군"
                  labelValue="경기 양평군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 여주시"
                  labelValue="경기 여주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 연천군"
                  labelValue="경기 연천군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 오산시"
                  labelValue="경기 오산시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 용인시"
                  labelValue="경기 용인시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 용인시 기흥구"
                  labelValue="경기 용인시 기흥구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 용인시 수지구"
                  labelValue="경기 용인시 수지구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 용인시 처인구"
                  labelValue="경기 용인시 처인구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 의왕시"
                  labelValue="경기 의왕시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 의정부시"
                  labelValue="경기 의정부시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 이천시"
                  labelValue="경기 이천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 파주시"
                  labelValue="경기 파주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 평택시"
                  labelValue="경기 평택시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 포천시"
                  labelValue="경기 포천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 하남시"
                  labelValue="경기 하남시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경기도 화성시"
                  labelValue="경기 화성시"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "강원" && (
              <>
                <SubRegion value="강원도" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="강원도 강릉시"
                  labelValue="강원 강릉시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 고성군"
                  labelValue="강원 고성군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 동해시"
                  labelValue="강원 동해시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 삼척시"
                  labelValue="강원 삼척시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 속초시"
                  labelValue="강원 속초시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 양구군"
                  labelValue="강원 양구군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 양양군"
                  labelValue="강원 양양군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 영월군"
                  labelValue="강원 영월군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 원주시"
                  labelValue="강원 원주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 인제군"
                  labelValue="강원 인제군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 정선군"
                  labelValue="강원 정선군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 철원군"
                  labelValue="강원 철원군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 춘천시"
                  labelValue="강원 춘천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 태백시"
                  labelValue="강원 태백시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 평창군"
                  labelValue="강원 평창군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 홍천군"
                  labelValue="강원 홍천군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 화천군"
                  labelValue="강원 화천군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="강원도 횡성군"
                  labelValue="강원 횡성군"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "충북" && (
              <>
                <SubRegion value="충청북도" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="충청북도 괴산군"
                  labelValue="충북 괴산군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 단양군"
                  labelValue="충북 단양군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 보은군"
                  labelValue="충북 보은군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 영동군"
                  labelValue="충북 영동군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 옥천군"
                  labelValue="충북 옥천군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 음성군"
                  labelValue="충북 음성군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 제천시"
                  labelValue="충북 제천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 증평군"
                  labelValue="충북 증평군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 진천군"
                  labelValue="충북 진천군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 청주시"
                  labelValue="충북 청주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 청주시 상당구"
                  labelValue="충북 청주시 상당구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 청주시 서원구"
                  labelValue="충북 청주시 서원구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 청주시 청원구"
                  labelValue="충북 청주시 청원구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 청주시 흥덕구"
                  labelValue="충북 청주시 흥덕구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청북도 충주시"
                  labelValue="충북 충주시"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "충남" && (
              <>
                <SubRegion value="충청남도" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="충청남도 계룡시"
                  labelValue="충남 계룡시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 공주시"
                  labelValue="충남 공주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 금산군"
                  labelValue="충남 금산군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 논산시"
                  labelValue="충남 논산시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 당진시"
                  labelValue="충남 당진시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 보령시"
                  labelValue="충남 보령시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 부여군"
                  labelValue="충남 부여군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 서산시"
                  labelValue="충남 서산시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 서천군"
                  labelValue="충남 서천군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 아산시"
                  labelValue="충남 아산시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 예산군"
                  labelValue="충남 예산군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 천안시"
                  labelValue="충남 천안시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 천안시 동남구"
                  labelValue="충남 천안시 동남구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 천안시 서북구"
                  labelValue="충남 천안시 서북구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 청양군"
                  labelValue="충남 청양군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 태안군"
                  labelValue="충남 태안군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="충청남도 홍성군"
                  labelValue="충남 홍성군"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "전북" && (
              <>
                <SubRegion value="전라북도" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="전라북도 고창군"
                  labelValue="전북 고창군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 군산시"
                  labelValue="전북 군산시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 김제시"
                  labelValue="전북 김제시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 남원시"
                  labelValue="전북 남원시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 무주군"
                  labelValue="전북 무주군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 부안군"
                  labelValue="전북 부안군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 순창군"
                  labelValue="전북 순창군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 완주군"
                  labelValue="전북 완주군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 익산시"
                  labelValue="전북 익산시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 임실군"
                  labelValue="전북 임실군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 장수군"
                  labelValue="전북 장수군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 전주시"
                  labelValue="전북 전주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 전주시 덕진구"
                  labelValue="전북 전주시 덕진구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 전주시 완산구"
                  labelValue="전북 전주시 완산구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 정읍시"
                  labelValue="전북 정읍시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라북도 진안군"
                  labelValue="전북 진안군"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "전남" && (
              <>
                <SubRegion value="전라남도" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="전라남도 강진군"
                  labelValue="전남 강진군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 고흥군"
                  labelValue="전남 고흥군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 곡성군"
                  labelValue="전남 곡성군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 광양시"
                  labelValue="전남 광양시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 구례군"
                  labelValue="전남 구례군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 나주시"
                  labelValue="전남 나주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 담양군"
                  labelValue="전남 담양군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 목포시"
                  labelValue="전남 목포시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 무안군"
                  labelValue="전남 무안군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 보성군"
                  labelValue="전남 보성군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 순천시"
                  labelValue="전남 순천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 신안군"
                  labelValue="전남 신안군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 여수시"
                  labelValue="전남 여수시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 영광군"
                  labelValue="전남 영광군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 영암군"
                  labelValue="전남 영암군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 완도군"
                  labelValue="전남 완도군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 장성군"
                  labelValue="전남 장성군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 장흥군"
                  labelValue="전남 장흥군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 진도군"
                  labelValue="전남 진도군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 함평군"
                  labelValue="전남 함평군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 해남군"
                  labelValue="전남 해남군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="전라남도 화순군"
                  labelValue="전남 화순군"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "경북" && (
              <>
                <SubRegion value="경상북도" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="경상북도 경산시"
                  labelValue="경북 경산시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 경주시"
                  labelValue="경북 경주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 고령군"
                  labelValue="경북 고령군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 구미시"
                  labelValue="경북 구미시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 군위군"
                  labelValue="경북 군위군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 김천시"
                  labelValue="경북 김천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 문경시"
                  labelValue="경북 문경시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 봉화군"
                  labelValue="경북 봉화군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 상주시"
                  labelValue="경북 상주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 성주군"
                  labelValue="경북 성주군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 안동시"
                  labelValue="경북 안동시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 영덕군"
                  labelValue="경북 영덕군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 영양군"
                  labelValue="경북 영양군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 영주시"
                  labelValue="경북 영주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 영천시"
                  labelValue="경북 영천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 예천군"
                  labelValue="경북 예천군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 울릉군"
                  labelValue="경북 울릉군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 울진군"
                  labelValue="경북 울진군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 의성군"
                  labelValue="경북 의성군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 청도군"
                  labelValue="경북 청도군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 청송군"
                  labelValue="경북 청송군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 칠곡군"
                  labelValue="경북 칠곡군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 포항시"
                  labelValue="경북 포항시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 포항시 남구"
                  labelValue="경북 포항시 남구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상북도 포항시 북구"
                  labelValue="경북 포항시 북구"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "경남" && (
              <>
                <SubRegion value="경상남도" labelValue="전체" onChange={changeLocation} />
                <SubRegion
                  value="경상남도 거제시"
                  labelValue="경남 거제시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 거창군"
                  labelValue="경남 거창군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 고성군"
                  labelValue="경남 고성군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 김해시"
                  labelValue="경남 김해시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 남해군"
                  labelValue="경남 남해군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 밀양시"
                  labelValue="경남 밀양시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 사천시"
                  labelValue="경남 사천시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 산청군"
                  labelValue="경남 산청군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 양산시"
                  labelValue="경남 양산시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 의령군"
                  labelValue="경남 의령군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 진주시"
                  labelValue="경남 진주시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 창녕군"
                  labelValue="경남 창녕군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 창원시"
                  labelValue="경남 창원시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 창원시 마산합포구"
                  labelValue="경남 창원시 마산합포구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 창원시 마산회원구"
                  labelValue="경남 창원시 마산회원구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 창원시 성산구"
                  labelValue="경남 창원시 성산구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 창원시 의창구"
                  labelValue="경남 창원시 의창구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 창원시 진해구"
                  labelValue="경남 창원시 진해구"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 통영시"
                  labelValue="경남 통영시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 하동군"
                  labelValue="경남 하동군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 함안군"
                  labelValue="경남 함안군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 함양군"
                  labelValue="경남 함양군"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="경상남도 합천군"
                  labelValue="경남 합천군"
                  onChange={changeLocation}
                />
              </>
            )}
            {selectedLocation === "제주" && (
              <>
                <SubRegion
                  value="제주특별자치도"
                  labelValue="전체"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="제주특별자치도 서귀포시"
                  labelValue="제주 서귀포시"
                  onChange={changeLocation}
                />
                <SubRegion
                  value="제주특별자치도 제주시"
                  labelValue="제주 제주시"
                  onChange={changeLocation}
                />
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="w-full h-auto p-5">
        <LocationList state={state} />
      </div>
    </div>
  );
};

export default Location;
