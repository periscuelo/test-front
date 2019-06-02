import { CHANGE_CART_PRODUCTS, CHANGE_CART_RESUME } from '../mutations-types';
import MockService from '@/services/mock';

const actions = {
  async getData({ commit }) {
    const response = await MockService.getData({ data: '5b15c4923100004a006f3c07' });
    commit(CHANGE_CART_PRODUCTS, response.data.items);
    delete response.data.id;
    delete response.data.items;
    commit(CHANGE_CART_RESUME, response.data);
  },
};

const mutations = {
  [CHANGE_CART_PRODUCTS](state, value) {
    state.products = value;
  },
  [CHANGE_CART_RESUME](state, value) {
    state.resume = value;
  },
};

const state = {
  products: [],
  resume: {},
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
};
