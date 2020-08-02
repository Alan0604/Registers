import http from '../../http-common';

const create = (data) => {
  return http.post('/broker', data);
};

const findByNameBroker = (name) => {
  return http.get(`/broker/${name}`);
};

const update = (id, data) => {
  return http.put(`/broker/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/broker/${id}`);
};

export default {
  create,
  findByNameBroker,
  update,
  remove,
};
