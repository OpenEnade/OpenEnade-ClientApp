/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.withCredentials = false;

export default {
  getGradesByName(courseName) {
    return axios.get('/notas')
      .then(res => res.data)
      .then((res) => {
        const notas = res.filter(element => element.info.curso.nome == courseName);

        return notas;
      });
  },
  getGrades() {
    return axios.get('/notas').then(response => response.data);
  },
  getCourses() {
    return axios.get('/cursos')
      .then(response => response.data);
  },
  getUniversitiesByCourse(courseName) {
    return axios.get(`/universidades/cursos?nomeCurso=${courseName}`)
      .then(response => response.data);
  },

  getGradesByCourse(areaCode) {
    return axios.get(`/notas/filterby?codigoArea=${areaCode}`)
    .then( response => response.data);
  },

  getUniversityGradesByYear(universityCode, year) {
    return axios.get(`/notas/filterby?universidade=${universityCode}&beginAno=${year}&endAno=${year}`)
      .then(response => response.data);
  },
  getModalities() {
    return axios.get('/modalidades');
  },
  
  getCourseNotes(areaCode, universityCode, countyCode) {
    return axios.get(`/notas/filterby?codigoArea=${areaCode}&universidade=${universityCode}&municipio=${countyCode}`)
      .then(response => response.data);
  },
};
