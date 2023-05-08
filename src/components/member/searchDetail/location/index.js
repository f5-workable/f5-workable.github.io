import { useState } from "react";
import Region from "./Region";
import SubRegion from "./SubRegion";

const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState("전체");

  const handleSelectedLocation = (e) => {
    setSelectedLocation(e.target.innerText);
  };
  return (
    <div className="w-full h-96 flex bg-white rounded-md overflow-hidden border border-solid border-neutral-400">
      <div className="w-1/4 h-full bg-white border-r border-solid border-neutral-400 overflow-y-scroll">
        <ul className="grid grid-cols-2">
          <Region
            value="전체"
            selectedLocation={selectedLocation}
            onClick={handleSelectedLocation}
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
      <div className="w-3/4 h-full overflow-y-scroll">
        <ul className="grid grid-cols-3">
          {selectedLocation === "전체" && (
            <li>
              <input name="region" defaultValue="" className="hidden" />
            </li>
          )}
          {selectedLocation === "서울" && (
            <>
              <SubRegion value="서울" labelValue="전체" />
              <SubRegion value="서울 강남구" labelValue="서울 강남구" />
              <SubRegion value="서울 강동구" labelValue="서울 강동구" />
              <SubRegion value="서울 강북구" labelValue="서울 강북구" />
              <SubRegion value="서울 강서구" labelValue="서울 강서구" />
              <SubRegion value="서울 관악구" labelValue="서울 관악구" />
              <SubRegion value="서울 광진구" labelValue="서울 광진구" />
              <SubRegion value="서울 구로구" labelValue="서울 구로구" />
              <SubRegion value="서울 금천구" labelValue="서울 금천구" />
              <SubRegion value="서울 노원구" labelValue="서울 노원구" />
              <SubRegion value="서울 도봉구" labelValue="서울 도봉구" />
              <SubRegion value="서울 동대문구" labelValue="서울 동대문구" />
              <SubRegion value="서울 동작구" labelValue="서울 동작구" />
              <SubRegion value="서울 마포구" labelValue="서울 마포구" />
              <SubRegion value="서울 서대문구" labelValue="서울 서대문구" />
              <SubRegion value="서울 서초구" labelValue="서울 서초구" />
              <SubRegion value="서울 성동구" labelValue="서울 성동구" />
              <SubRegion value="서울 성북구" labelValue="서울 성북구" />
              <SubRegion value="서울 송파구" labelValue="서울 송파구" />
              <SubRegion value="서울 양천구" labelValue="서울 양천구" />
              <SubRegion value="서울 영등포구" labelValue="서울 영등포구" />
              <SubRegion value="서울 용산구" labelValue="서울 용산구" />
              <SubRegion value="서울 은평구" labelValue="서울 은평구" />
              <SubRegion value="서울 종로구" labelValue="서울 종로구" />
              <SubRegion value="서울 중구" labelValue="서울 중구" />
              <SubRegion value="서울 중랑구" labelValue="서울 중랑구" />
            </>
          )}
          {selectedLocation === "부산" && (
            <>
              <SubRegion value="부산" labelValue="전체" />
              <SubRegion value="부산 강서구" labelValue="부산 강서구" />
              <SubRegion value="부산 금정구" labelValue="부산 금정구" />
              <SubRegion value="부산 기장군" labelValue="부산 기장군" />
              <SubRegion value="부산 남구" labelValue="부산 남구" />
              <SubRegion value="부산 동구" labelValue="부산 동구" />
              <SubRegion value="부산 동래구" labelValue="부산 동래구" />
              <SubRegion value="부산 부산진구" labelValue="부산 부산진구" />
              <SubRegion value="부산 북구" labelValue="부산 북구" />
              <SubRegion value="부산 사상구" labelValue="부산 사상구" />
              <SubRegion value="부산 사하구" labelValue="부산 사하구" />
              <SubRegion value="부산 서구" labelValue="부산 서구" />
              <SubRegion value="부산 수영구" labelValue="부산 수영구" />
              <SubRegion value="부산 연제구" labelValue="부산 연제구" />
              <SubRegion value="부산 영도구" labelValue="부산 영도구" />
              <SubRegion value="부산 중구" labelValue="부산 중구" />
              <SubRegion value="부산 해운대구" labelValue="부산 해운대구" />
            </>
          )}
          {selectedLocation === "대구" && (
            <>
              <SubRegion value="대구" labelValue="전체" />
              <SubRegion value="대구 남구" labelValue="대구 남구" />
              <SubRegion value="대구 달서구" labelValue="대구 달서구" />
              <SubRegion value="대구 달성군" labelValue="대구 달성군" />
              <SubRegion value="대구 동구" labelValue="대구 동구" />
              <SubRegion value="대구 북구" labelValue="대구 북구" />
              <SubRegion value="대구 서구" labelValue="대구 서구" />
              <SubRegion value="대구 수성구" labelValue="대구 수성구" />
              <SubRegion value="대구 중구" labelValue="대구 중구" />
            </>
          )}
          {selectedLocation === "인천" && (
            <>
              <SubRegion value="인천" labelValue="전체" />
              <SubRegion value="인천 강화군" labelValue="인천 강화군" />
              <SubRegion value="인천 계양구" labelValue="인천 계양구" />
              <SubRegion value="인천 남동구" labelValue="인천 남동구" />
              <SubRegion value="인천 동구" labelValue="인천 동구" />
              <SubRegion value="인천 미추홀구" labelValue="인천 미추홀구" />
              <SubRegion value="인천 부평구" labelValue="인천 부평구" />
              <SubRegion value="인천 서구" labelValue="인천 서구" />
              <SubRegion value="인천 연수구" labelValue="인천 연수구" />
              <SubRegion value="인천 옹진군" labelValue="인천 옹진군" />
              <SubRegion value="인천 중구" labelValue="인천 중구" />
            </>
          )}
          {selectedLocation === "광주" && (
            <>
              <SubRegion value="광주" labelValue="전체" />
              <SubRegion value="광주 광산구" labelValue="광주 광산구" />
              <SubRegion value="광주 남구" labelValue="광주 남구" />
              <SubRegion value="광주 동구" labelValue="광주 동구" />
              <SubRegion value="광주 북구" labelValue="광주 북구" />
              <SubRegion value="광주 서구" labelValue="광주 서구" />
            </>
          )}
          {selectedLocation === "대전" && (
            <>
              <SubRegion value="대전" labelValue="전체" />
              <SubRegion value="대전 대덕구" labelValue="대전 대덕구" />
              <SubRegion value="대전 동구" labelValue="대전 동구" />
              <SubRegion value="대전 서구" labelValue="대전 서구" />
              <SubRegion value="대전 유성구" labelValue="대전 유성구" />
              <SubRegion value="대전 중구" labelValue="대전 중구" />
            </>
          )}
          {selectedLocation === "울산" && (
            <>
              <SubRegion value="울산" labelValue="전체" />
              <SubRegion value="울산 남구" labelValue="울산 남구" />
              <SubRegion value="울산 동구" labelValue="울산 동구" />
              <SubRegion value="울산 북구" labelValue="울산 북구" />
              <SubRegion value="울산 울주군" labelValue="울산 울주군" />
              <SubRegion value="울산 중구" labelValue="울산 중구" />
            </>
          )}
          {selectedLocation === "세종" && (
            <>
              <SubRegion value="세종" labelValue="전체" />
            </>
          )}
          {selectedLocation === "경기" && (
            <>
              <SubRegion value="경기" labelValue="전체" />
              <SubRegion value="경기 가평군" labelValue="경기 가평군" />
              <SubRegion value="경기 고양시" labelValue="경기 고양시" />
              <SubRegion value="경기 고양시 덕양구" labelValue="경기 고양시 덕양구" />
              <SubRegion value="경기 고양시 일산동구" labelValue="경기 고양시 일산동구" />
              <SubRegion value="경기 고양시 일산서구" labelValue="경기 고양시 일산서구" />
              <SubRegion value="경기 과천시" labelValue="경기 과천시" />
              <SubRegion value="경기 광명시" labelValue="경기 광명시" />
              <SubRegion value="경기 광주시" labelValue="경기 광주시" />
              <SubRegion value="경기 구리시" labelValue="경기 구리시" />
              <SubRegion value="경기 군포시" labelValue="경기 군포시" />
              <SubRegion value="경기 김포시" labelValue="경기 김포시" />
              <SubRegion value="경기 남양주시" labelValue="경기 남양주시" />
              <SubRegion value="경기 동두천시" labelValue="경기 동두천시" />
              <SubRegion value="경기 부천시" labelValue="경기 부천시" />
              <SubRegion value="경기 성남시" labelValue="경기 성남시" />
              <SubRegion value="경기 성남시 분당구" labelValue="경기 성남시 분당구" />
              <SubRegion value="경기 성남시 수정구" labelValue="경기 성남시 수정구" />
              <SubRegion value="경기 성남시 중원구" labelValue="경기 성남시 중원구" />
              <SubRegion value="경기 수원시" labelValue="경기 수원시" />
              <SubRegion value="경기 수원시 권선구" labelValue="경기 수원시 권선구" />
              <SubRegion value="경기 수원시 영통구" labelValue="경기 수원시 영통구" />
              <SubRegion value="경기 수원시 장안구" labelValue="경기 수원시 장안구" />
              <SubRegion value="경기 수원시 팔달구" labelValue="경기 수원시 팔달구" />
              <SubRegion value="경기 시흥시" labelValue="경기 시흥시" />
              <SubRegion value="경기 안산시" labelValue="경기 안산시" />
              <SubRegion value="경기 안산시 단원구" labelValue="경기 안산시 단원구" />
              <SubRegion value="경기 안산시 상록구" labelValue="경기 안산시 상록구" />
              <SubRegion value="경기 안성시" labelValue="경기 안성시" />
              <SubRegion value="경기 안양시" labelValue="경기 안양시" />
              <SubRegion value="경기 안양시 동안구" labelValue="경기 안양시 동안구" />
              <SubRegion value="경기 안양시 만안구" labelValue="경기 안양시 만안구" />
              <SubRegion value="경기 양주시" labelValue="경기 양주시" />
              <SubRegion value="경기 양평군" labelValue="경기 양평군" />
              <SubRegion value="경기 여주시" labelValue="경기 여주시" />
              <SubRegion value="경기 연천군" labelValue="경기 연천군" />
              <SubRegion value="경기 오산시" labelValue="경기 오산시" />
              <SubRegion value="경기 용인시" labelValue="경기 용인시" />
              <SubRegion value="경기 용인시 기흥구" labelValue="경기 용인시 기흥구" />
              <SubRegion value="경기 용인시 수지구" labelValue="경기 용인시 수지구" />
              <SubRegion value="경기 용인시 처인구" labelValue="경기 용인시 처인구" />
              <SubRegion value="경기 의왕시" labelValue="경기 의왕시" />
              <SubRegion value="경기 의정부시" labelValue="경기 의정부시" />
              <SubRegion value="경기 이천시" labelValue="경기 이천시" />
              <SubRegion value="경기 파주시" labelValue="경기 파주시" />
              <SubRegion value="경기 평택시" labelValue="경기 평택시" />
              <SubRegion value="경기 포천시" labelValue="경기 포천시" />
              <SubRegion value="경기 하남시" labelValue="경기 하남시" />
              <SubRegion value="경기 화성시" labelValue="경기 화성시" />
            </>
          )}
          {selectedLocation === "강원" && (
            <>
              <SubRegion value="강원" labelValue="전체" />
              <SubRegion value="강원 강릉시" labelValue="강원 강릉시" />
              <SubRegion value="강원 고성군" labelValue="강원 고성군" />
              <SubRegion value="강원 동해시" labelValue="강원 동해시" />
              <SubRegion value="강원 삼척시" labelValue="강원 삼척시" />
              <SubRegion value="강원 속초시" labelValue="강원 속초시" />
              <SubRegion value="강원 양구군" labelValue="강원 양구군" />
              <SubRegion value="강원 양양군" labelValue="강원 양양군" />
              <SubRegion value="강원 영월군" labelValue="강원 영월군" />
              <SubRegion value="강원 원주시" labelValue="강원 원주시" />
              <SubRegion value="강원 인제군" labelValue="강원 인제군" />
              <SubRegion value="강원 정선군" labelValue="강원 정선군" />
              <SubRegion value="강원 철원군" labelValue="강원 철원군" />
              <SubRegion value="강원 춘천시" labelValue="강원 춘천시" />
              <SubRegion value="강원 태백시" labelValue="강원 태백시" />
              <SubRegion value="강원 평창군" labelValue="강원 평창군" />
              <SubRegion value="강원 홍천군" labelValue="강원 홍천군" />
              <SubRegion value="강원 화천군" labelValue="강원 화천군" />
              <SubRegion value="강원 횡성군" labelValue="강원 횡성군" />
            </>
          )}
          {selectedLocation === "충북" && (
            <>
              <SubRegion value="충북" labelValue="전체" />
              <SubRegion value="충북 괴산군" labelValue="충북 괴산군" />
              <SubRegion value="충북 단양군" labelValue="충북 단양군" />
              <SubRegion value="충북 보은군" labelValue="충북 보은군" />
              <SubRegion value="충북 영동군" labelValue="충북 영동군" />
              <SubRegion value="충북 옥천군" labelValue="충북 옥천군" />
              <SubRegion value="충북 음성군" labelValue="충북 음성군" />
              <SubRegion value="충북 제천시" labelValue="충북 제천시" />
              <SubRegion value="충북 증평군" labelValue="충북 증평군" />
              <SubRegion value="충북 진천군" labelValue="충북 진천군" />
              <SubRegion value="충북 청주시" labelValue="충북 청주시" />
              <SubRegion value="충북 청주시 상당구" labelValue="충북 청주시 상당구" />
              <SubRegion value="충북 청주시 서원구" labelValue="충북 청주시 서원구" />
              <SubRegion value="충북 청주시 청원구" labelValue="충북 청주시 청원구" />
              <SubRegion value="충북 청주시 흥덕구" labelValue="충북 청주시 흥덕구" />
              <SubRegion value="충북 충주시" labelValue="충북 충주시" />
            </>
          )}
          {selectedLocation === "충남" && (
            <>
              <SubRegion value="충남" labelValue="전체" />
              <SubRegion value="충남 계룡시" labelValue="충남 계룡시" />
              <SubRegion value="충남 공주시" labelValue="충남 공주시" />
              <SubRegion value="충남 금산군" labelValue="충남 금산군" />
              <SubRegion value="충남 논산시" labelValue="충남 논산시" />
              <SubRegion value="충남 당진시" labelValue="충남 당진시" />
              <SubRegion value="충남 보령시" labelValue="충남 보령시" />
              <SubRegion value="충남 부여군" labelValue="충남 부여군" />
              <SubRegion value="충남 서산시" labelValue="충남 서산시" />
              <SubRegion value="충남 서천군" labelValue="충남 서천군" />
              <SubRegion value="충남 아산시" labelValue="충남 아산시" />
              <SubRegion value="충남 예산군" labelValue="충남 예산군" />
              <SubRegion value="충남 천안시" labelValue="충남 천안시" />
              <SubRegion value="충남 천안시 동남구" labelValue="충남 천안시 동남구" />
              <SubRegion value="충남 천안시 서북구" labelValue="충남 천안시 서북구" />
              <SubRegion value="충남 청양군" labelValue="충남 청양군" />
              <SubRegion value="충남 태안군" labelValue="충남 태안군" />
              <SubRegion value="충남 홍성군" labelValue="충남 홍성군" />
            </>
          )}
          {selectedLocation === "전북" && (
            <>
              <SubRegion value="전북" labelValue="전체" />
              <SubRegion value="전북 고창군" labelValue="전북 고창군" />
              <SubRegion value="전북 군산시" labelValue="전북 군산시" />
              <SubRegion value="전북 김제시" labelValue="전북 김제시" />
              <SubRegion value="전북 남원시" labelValue="전북 남원시" />
              <SubRegion value="전북 무주군" labelValue="전북 무주군" />
              <SubRegion value="전북 부안군" labelValue="전북 부안군" />
              <SubRegion value="전북 순창군" labelValue="전북 순창군" />
              <SubRegion value="전북 완주군" labelValue="전북 완주군" />
              <SubRegion value="전북 익산시" labelValue="전북 익산시" />
              <SubRegion value="전북 임실군" labelValue="전북 임실군" />
              <SubRegion value="전북 장수군" labelValue="전북 장수군" />
              <SubRegion value="전북 전주시" labelValue="전북 전주시" />
              <SubRegion value="전북 전주시 덕진구" labelValue="전북 전주시 덕진구" />
              <SubRegion value="전북 전주시 완산구" labelValue="전북 전주시 완산구" />
              <SubRegion value="전북 정읍시" labelValue="전북 정읍시" />
              <SubRegion value="전북 진안군" labelValue="전북 진안군" />
            </>
          )}
          {selectedLocation === "전남" && (
            <>
              <SubRegion value="전남" labelValue="전체" />
              <SubRegion value="전남 강진군" labelValue="전남 강진군" />
              <SubRegion value="전남 고흥군" labelValue="전남 고흥군" />
              <SubRegion value="전남 곡성군" labelValue="전남 곡성군" />
              <SubRegion value="전남 광양시" labelValue="전남 광양시" />
              <SubRegion value="전남 구례군" labelValue="전남 구례군" />
              <SubRegion value="전남 나주시" labelValue="전남 나주시" />
              <SubRegion value="전남 담양군" labelValue="전남 담양군" />
              <SubRegion value="전남 목포시" labelValue="전남 목포시" />
              <SubRegion value="전남 무안군" labelValue="전남 무안군" />
              <SubRegion value="전남 보성군" labelValue="전남 보성군" />
              <SubRegion value="전남 순천시" labelValue="전남 순천시" />
              <SubRegion value="전남 신안군" labelValue="전남 신안군" />
              <SubRegion value="전남 여수시" labelValue="전남 여수시" />
              <SubRegion value="전남 영광군" labelValue="전남 영광군" />
              <SubRegion value="전남 영암군" labelValue="전남 영암군" />
              <SubRegion value="전남 완도군" labelValue="전남 완도군" />
              <SubRegion value="전남 장성군" labelValue="전남 장성군" />
              <SubRegion value="전남 장흥군" labelValue="전남 장흥군" />
              <SubRegion value="전남 진도군" labelValue="전남 진도군" />
              <SubRegion value="전남 함평군" labelValue="전남 함평군" />
              <SubRegion value="전남 해남군" labelValue="전남 해남군" />
              <SubRegion value="전남 화순군" labelValue="전남 화순군" />
            </>
          )}
          {selectedLocation === "경북" && (
            <>
              <SubRegion value="경북" labelValue="전체" />
              <SubRegion value="경북 경산시" labelValue="경북 경산시" />
              <SubRegion value="경북 경주시" labelValue="경북 경주시" />
              <SubRegion value="경북 고령군" labelValue="경북 고령군" />
              <SubRegion value="경북 구미시" labelValue="경북 구미시" />
              <SubRegion value="경북 군위군" labelValue="경북 군위군" />
              <SubRegion value="경북 김천시" labelValue="경북 김천시" />
              <SubRegion value="경북 문경시" labelValue="경북 문경시" />
              <SubRegion value="경북 봉화군" labelValue="경북 봉화군" />
              <SubRegion value="경북 상주시" labelValue="경북 상주시" />
              <SubRegion value="경북 성주군" labelValue="경북 성주군" />
              <SubRegion value="경북 안동시" labelValue="경북 안동시" />
              <SubRegion value="경북 영덕군" labelValue="경북 영덕군" />
              <SubRegion value="경북 영양군" labelValue="경북 영양군" />
              <SubRegion value="경북 영주시" labelValue="경북 영주시" />
              <SubRegion value="경북 영천시" labelValue="경북 영천시" />
              <SubRegion value="경북 예천군" labelValue="경북 예천군" />
              <SubRegion value="경북 울릉군" labelValue="경북 울릉군" />
              <SubRegion value="경북 울진군" labelValue="경북 울진군" />
              <SubRegion value="경북 의성군" labelValue="경북 의성군" />
              <SubRegion value="경북 청도군" labelValue="경북 청도군" />
              <SubRegion value="경북 청송군" labelValue="경북 청송군" />
              <SubRegion value="경북 칠곡군" labelValue="경북 칠곡군" />
              <SubRegion value="경북 포항시" labelValue="경북 포항시" />
              <SubRegion value="경북 포항시 남구" labelValue="경북 포항시 남구" />
              <SubRegion value="경북 포항시 북구" labelValue="경북 포항시 북구" />
            </>
          )}
          {selectedLocation === "경남" && (
            <>
              <SubRegion value="경남" labelValue="전체" />
              <SubRegion value="경남 거제시" labelValue="경남 거제시" />
              <SubRegion value="경남 거창군" labelValue="경남 거창군" />
              <SubRegion value="경남 고성군" labelValue="경남 고성군" />
              <SubRegion value="경남 김해시" labelValue="경남 김해시" />
              <SubRegion value="경남 남해군" labelValue="경남 남해군" />
              <SubRegion value="경남 밀양시" labelValue="경남 밀양시" />
              <SubRegion value="경남 사천시" labelValue="경남 사천시" />
              <SubRegion value="경남 산청군" labelValue="경남 산청군" />
              <SubRegion value="경남 양산시" labelValue="경남 양산시" />
              <SubRegion value="경남 의령군" labelValue="경남 의령ㅜ군" />
              <SubRegion value="경남 진주시" labelValue="경남 진주시" />
              <SubRegion value="경남 창녕군" labelValue="경남 창녕군" />
              <SubRegion value="경남 창원시" labelValue="경남 창원시" />
              <SubRegion value="경남 창원시 마산합포구" labelValue="경남 창원시 마산합포구" />
              <SubRegion value="경남 창원시 마산회원구" labelValue="경남 창원시 마산회원구" />
              <SubRegion value="경남 창원시 성산구" labelValue="경남 창원시 성산구" />
              <SubRegion value="경남 창원시 의창구" labelValue="경남 창원시 의창구" />
              <SubRegion value="경남 창원시 진해구" labelValue="경남 창원시 진해구" />
              <SubRegion value="경남 통영시" labelValue="경남 통영시" />
              <SubRegion value="경남 하동군" labelValue="경남 하동군" />
              <SubRegion value="경남 함안군" labelValue="경남 함안군" />
              <SubRegion value="경남 함양군" labelValue="경남 함양군" />
              <SubRegion value="경남 합천군" labelValue="경남 합천군" />
            </>
          )}
          {selectedLocation === "제주" && (
            <>
              <SubRegion value="제주" labelValue="전체" />
              <SubRegion value="제주 서귀포시" labelValue="제주 서귀포시" />
              <SubRegion value="제주 제주시" labelValue="제주 제주시" />
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Location;
