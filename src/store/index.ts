import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
    balance: "1€",
    iban: "FR76 2183 3000 0100 0156 4907 354",
    name: "LAURENCE VISSANT",
    yesterdayBalance: "301€",
    currentOperation: null,
    operations: [
      {
        key: 1,
        month: 'juillet 2023',
        list:[
          {
            shortMonth: "aou",
            day: "14",
            date: "14 aou",
            title: "Virement SEPA",
            amount: "- 3000.00€",
            key: 61,
            state: false,
          },
          {
            shortMonth: "aou",
            day: "14",
            date: "14 aou",
            title: "Virement SEPA",
            amount: "+ 3000.00€",
            key: 61,
            state: true,
          },
          {
            shortMonth: "aou",
            day: "09",
            date: "09 aou",
            title: "Virement SEPA",
            amount: "- 300.00€",
            key: 62,
            state: false,
          },
          {
            shortMonth: "aou",
            day: "04",
            date: "04 aou",
            title: "Virement SEPA",
            amount: "+ 300.00€",
            key: 61,
            state: true,
          },
          {
            shortMonth: "jui",
            day: "28",
            date: "28 jui",
            title: "Virement SEPA",
            amount: "- 4000.00€",
            key: 60,
            state: false,
          },
          {
            shortMonth: "jui",
            day: "28",
            date: "28 jui",
            title: "Virement SEPA",
            amount: "+ 4100.00€",
            key: 59,
            state: true,
          },
          {
            shortMonth: "jui",
            day: "24",
            date: "24 jui",
            title: "Virement SEPA",
            amount: "- 0.50€",
            key: 58,
            state: false,
          },
          {
            shortMonth: "jui",
            day: "24",
            date: "24 jui",
            title: "Virement SEPA",
            amount: "- 399.00€",
            key: 57,
            state: false,
          },
          {
            shortMonth: "jui",
            day: "22",
            date: "22 jui",
            title: "Virement SEPA",
            amount: "+ 400.00€",
            key: 56,
            state: true,
          },
          {
            shortMonth: "jui",
            day: "22",
            date: "22 jui",
            title: "Virement SEPA",
            amount: "- 0.50€",
            key: 55,
            state: false,
          },
          {
            shortMonth: "jui",
            day: "22",
            date: "22 jui",
            title: "Virement SEPA",
            amount: "- 1150.00€",
            key: 54,
            state: false,
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
