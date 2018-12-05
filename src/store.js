import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(axios, VueAxios)

export default new Vuex.Store({
  state: {
    headers: [
      { text: 'Sl.No', align: 'left', sortable: false, value: "slno"},
      { text: 'Date', value: 'date' },
      { text: 'Supplier Name', value: 'supplier'},
      { text: 'Invoice', value: 'invoice', sortable: false},
      { text: 'Remarks', value: 'remarks', sortable: false },
      { text: 'Action', value: 'action', align: 'center',sortable: false},
      { text: 'Amount', value: 'amount', align: 'right'}
    ],
    desserts:[]
    // desserts: [
    //   {
    //     value: false,
    //     slno: 1,
    //     date: '12/10/2018',
    //     supplier:"sasi Supply",
    //     invoice: "wxmxcoiw45",
    //     remarks: "not as of 1",
    //     amount: 1243
    //   },
    //   {
    //     value: false,
    //     slno: 2,
    //     date: '13/10/2018',
    //     supplier: "sasi Supply",
    //     invoice: "wxmxcoiw525",
    //     remarks: "not as of 2",
    //     amount: 510
    //   },
    //   {
    //     value: false,
    //     slno: 3,
    //     date: '14/10/2018',
    //     supplier: "sasi Supply",
    //     invoice: "wxmxcoiw5g5",
    //     remarks: "not as of 3",
    //     amount: 150
    //   }
    // ]
  },
  mutations: {
    SET_DESSERTS(state, desserts) {
      state.desserts = desserts
    }
  },
  actions: {
    loadDesserts({ commit }) {
      axios
        .get("http://localhost:8081/desserts")
        .then(r => r.data)
        .then(desserts => {
          commit('SET_DESSERTS',desserts)
        })
    }
  }
})
