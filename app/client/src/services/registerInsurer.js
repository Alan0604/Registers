import http from '../http-common';

const create = (data) => {
  return http.post('/insurer', data);
};

const findAllInsurer = () => {
  return http.get('/insurer');
};

const findByNameInsurer = (name) => {
  return http.get(`/insurer/${name}`);
};

const update = (id, data) => {
  return http.put(`/insurer/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/insurer/${id}`);
};

export default {
  create,
  findAllInsurer,
  findByNameInsurer,
  update,
  remove,
};
