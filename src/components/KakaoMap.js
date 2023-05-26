import { useCallback, useEffect } from "react";

const KakaoMap = ({ address, companyName }) => {
  const { kakao } = window;

  const configMap = useCallback(
    async (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const container = document.getElementById("map"); // 지도를 표시할 div
        const targetPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
        const options = {
          center: targetPosition, // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new kakao.maps.Map(container, options); // 지도를 생성

        // 마커를 생성
        const marker = new kakao.maps.Marker({
          position: targetPosition,
          clickable: true,
        });

        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(map);

        // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        const iwContent = `
        <div class="p-4 w-52">
          <p class="mb-4 text-neutral-800">${companyName}</p>
          <p class="flex justify-between">
            <a href="https://map.kakao.com/link/map/${companyName},${result[0].y},${result[0].x}" class="text-blue-500 px-3.5 py-1.5 border border-solid rounded-2xl text-sm" target="_blank">큰 지도보기</a>
            <a href="https://map.kakao.com/link/to/${companyName},${result[0].y},${result[0].x}" class="text-white px-3.5 py-1.5 bg-blue-500 rounded-2xl text-sm" target="_blank">길 찾기</a>
          </p>
        </div>`;
        const iwPosition = targetPosition; //인포윈도우 표시 위치

        // 인포윈도우를 생성
        const infoWindow = new kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent,
          removable: true,
        });

        infoWindow.open(map, marker);

        // 마커에 클릭이벤트 등록
        kakao.maps.event.addListener(marker, "click", () => {
          infoWindow.open(map, marker);
        });

        // resize 이벤트 발생 시, 기업 좌표로 뷰 이동.
        let delay = 300;
        let timer = null;

        window.addEventListener("resize", function () {
          clearTimeout(timer);
          timer = setTimeout(function () {
            map.panTo(targetPosition);
          }, delay);
        });
      }
    },
    [kakao, companyName]
  );

  useEffect(() => {
    const gc = new kakao.maps.services.Geocoder();
    gc.addressSearch(address, configMap);
  }, [kakao.maps.services.Geocoder, configMap, address]);

  return <div id="map" className="w-full h-96"></div>;
};

export default KakaoMap;
