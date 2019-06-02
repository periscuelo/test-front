import { getField, updateField } from 'vuex-map-fields';
import { CHANGE_PAY_DISABLE } from '../mutations-types';

const mutations = {
  [CHANGE_PAY_DISABLE](state, value) {
    state.disable = value;
  },
  updateField,
};

const getters = {
  getField,
};

const state = {
  ccNumber: '',
  name: '',
  dtValid: '',
  cvv: '',
  disable: true,
};

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};
