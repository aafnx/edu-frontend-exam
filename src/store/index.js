import Vue from 'vue';
import Vuex from 'vuex';
import articles from './modules/articles';
import projectCards from './modules/projectCards';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    articles,
    projectCards,
  },
});
