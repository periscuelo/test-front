import Api from './api';

export default {
  getData: params => Api().get(`/${params.data}`),
};
