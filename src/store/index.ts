import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
    balance: "861,78 MAD",
    iban: "0355 X 000000415",
    name: "BK MAKING",
    operations: [{
      key: 1,
      month: 'octobre 2021',
      list:[
          {
        shortMonth: "oct",
        day: "08",
        date: "O8 oct",
        title: "GAB BANK AL MAG04/10/21",
        amount: "-100,00 MAD",
        key: 1,
            state: false,
      },
        {
          shortMonth: "oct",
          day: "08",
          date: "O8 oct",
          title: "GAB C.I.H 02/10/21",
          amount: "-2 000,00 MAD",
          key: 2,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "08",
          date: "O8 oct",
          title: "GAB C.I.H 02/10/21",
          amount: "-2 000,00 MAD",
          key: 3,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "08",
          date: "O8 oct",
          title: "3 FRAIS/RETRAIT ESP GAB CONF...",
          amount: "-18,00 MAD",
          key: 4,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "08",
          date: "O8 oct",
          title: "ARRETE DU COMPTE 3E TRIM...",
          amount: "-660,97 MAD",
          key: 5,
          state: false,
        },



        {
          shortMonth: "oct",
          day: "07",
          date: "O7 oct",
          title: "FRAIS EXTRAIT DE COMPTE",
          amount: "-11,00 MAD",
          key: 12,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "06",
          date: "O6 oct",
          title: "RET GAB CONF (*)",
          amount: "-1 500,00 MAD",
          key: 13,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "05",
          date: "O5 oct",
          title: "PAY 99008923 (*)",
          amount: "-5 299,00 MAD",
          key: 14,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "05",
          date: "O5 oct",
          title: "OPER. DEBIT REF :SECCART",
          amount: "-3,03 MAD",
          key: 15,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "04",
          date: "O4 oct",
          title: "RET GAB CONF (*)",
          amount: "-100,00 MAD",
          key: 16,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "04",
          date: "O4 oct",
          title: "RET GAB CONF (*)",
          amount: "-2 000,00 MAD",
          key: 17,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "04",
          date: "O4 oct",
          title: "RET GAB CONF (*)",
          amount: "-2 000,00 MAD",
          key: 18,
          state: false,
        }
      ]
    },
      {
        key: 2,
        month: 'septembre 2021',
        list: [
          {
            shortMonth: "sep",
            day: "30",
            date: "30 sep",
            title: "RAPATRIEMENT : RPT04094708",
            amount: "13 097,64 MAD",
            key: 19,
            state: true,
          },
          {
            shortMonth: "sep",
            day: "30",
            date: "30 sep",
            title: "RETRAIT ESPECES CHQ AUM...",
            amount: "-115 000,00 MAD",
            key: 20,
            state: false,
          },
          {
            shortMonth: "sep",
            day: "30",
            date: "30 sep",
            title: "2 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-12,00 MAD",
            key: 21,
            state: false,
          },
        ],
      }

    ],
  },
  mutations: {
    showLoader(state){
      state.loading = true;
    },
    hideLoader(state){
      state.loading = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
