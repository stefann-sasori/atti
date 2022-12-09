import { createStore } from 'vuex'
import axios, {AxiosResponse} from "axios";

export default createStore({
  state: {
    loading: false,
    balance: "1 671 499 042 CFA",
    iban: "MA067 01514 514100000245 69",
    name: "MATTEO CAPRA",
    yesterdayBalance: "1 683 815 000 CFA",
    currentOperation: null,
    logged: true,
    apiKey: "638a7f5dc890f30a8fd1f6d9",
    beneficiaries: [] as any[],
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
      {
        key: 2,
        month: 'decembre 2022',
        list:[
          {
            shortMonth: "dec",
            day: "09",
            date: "09 dec",
            title: "DEUTSCHEBANK ATM IT",
            amount: "-67 458 CFA",
            key: 2,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "09",
            date: "09 dec",
            title: "VIR SEPA /DEUTSCHE BANK S.P.A",
            amount: "-12 248 500 CFA",
            key: 3,
            state: false,
          },
        ]
      },


    ],
    menuDisplayed: false,
  },
  mutations: {
    addBenef(state, benef){
      state.beneficiaries.push(benef);
    },
    login(state){
      state.logged = true;
    },
    logout(state){
      state.logged = false;
    },
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
    loadBeneficiaries(context) {
      axios.get("https://ubadb-09f5.restdb.io/rest/beneficiaires", {
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "x-apikey": context.state.apiKey
        }
      }).then((response: AxiosResponse) => {
        context.state.beneficiaries = [];
        response.data.forEach((obj: any) => {
          context.commit("addBenef", obj);
        } );
      });
    }
  },
  modules: {
  }
})
