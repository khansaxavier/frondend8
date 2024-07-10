import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",

});

const apis = {
    getMahasiswa : () => api.get('/mahasiswa'),
    getMahasiswaByNim : (nim) => api.get(`/mahasiswa/${nim}`),
    CreatMahasiswa : (data) => api.post('/mahasiswa', data),
    updateMahasiswa : (nim,data) => api.put(`/mahasiswa/${nim}`, data),
    deletMahasiswa : (nim) => api.delete(`/mahasiswa/${nim}`)
}
export default apis;