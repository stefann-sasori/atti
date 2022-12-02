import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
    balance: "1 683 815 000 CFA",
    iban: "MA067 01514 514100000245 69",
    name: "MATTEO CAPRA",
    yesterdayBalance: "1 683 815 000 CFA",
    currentOperation: null,
    operations: [
      {
        key: 1,
        month: 'novembre 2022',
        list:[
          {
            shortMonth: "nov",
            day: "29",
            date: "29 nov",
            title: "DEPOT INITIAL",
            amount: "1 683 815 000 CFA",
            key: 1,
            state: true,
          },
        ]
      },


    ],
    menuDisplayed: false,
  },
  mutations: {
    showLoader(state){
      state.loading = true;
    },
    displayMenu(state){
      state.menuDisplayed = true;
    },
    hideMenu(state){
      state.menuDisplayed = false;
    },
    hideLoader(state){
      state.loading = false;
    },
    setCurrentOperation(state, operation) {
      state.currentOperation = operation;
    },
  },
  getters: {
    getOperation: (state) => (payload: any) => {
      const month = state.operations.find((month) => {
        return month.key + '' == payload.monthKey;
      });
      console.log(payload);
      if(!month){
        return null;
      }
      console.log(month);
      const operation = month.list.find((operation) => {
        return operation.key  + '' == payload.operationKey;
      });
      console.log(operation);
      return operation || null;
    }
  },
  actions: {
  },
  modules: {
  }
})
