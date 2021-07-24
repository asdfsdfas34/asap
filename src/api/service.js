import { instance } from "./index.js";

//리스트 출력
function fetchServiceList(data) {
	return instance.post("/api/ServicesListAll", data);
}

//개별 리스트 상세
function fetchService(serviceid) {
	return instance.get(`/api/service/${serviceid}`);
}

//서비스 추가
function addService(data) {
	return instance.post("/api/service", data);
}

//서비스 수정
function editService(serviceid, data) {
	return instance.put(`/api/service/${serviceid}`, data);
}

export { fetchServiceList, fetchService, addService, editService };
