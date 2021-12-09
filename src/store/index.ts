import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
    balance: "561,78 EUR",
    iban: "0355 X 000000415",
    name: "ALONSO TABOADA",
    yesterdayBalance: "861,78 EUR",
    currentOperation: null,
    operations: [
      {
        key: 1,
        month: 'decembre 2021',
        list:[
          {
            shortMonth: "dec",
            day: "09",
            date: "09 dec",
            title: "ACH LEBONCOIN09/12/21",
            amount: "-1798,00 EUR",
            key: 59,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "08",
            date: "O8 dec",
            title: "GAB BANK AL MAG08/12/21",
            amount: "-100,00 EUR",
            key: 1,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "02",
            date: "O2 dec",
            title: "GAB C.I.H 02/12/21",
            amount: "-1 000,00 EUR",
            key: 2,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "02",
            date: "O2 dec",
            title: "GAB C.I.H 02/12/21",
            amount: "-1 000,00 EUR",
            key: 3,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "02",
            date: "O2 dec",
            title: "3 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-18,00 EUR",
            key: 4,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "08",
            date: "O8 dec",
            title: "ARRETE DU COMPTE 3E TRIM...",
            amount: "-660,97 EUR",
            key: 5,
            state: false,
          },



          {
            shortMonth: "dec",
            day: "07",
            date: "O7 dec",
            title: "FRAIS EXTRAIT DE COMPTE",
            amount: "-11,00 EUR",
            key: 12,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "06",
            date: "O6 dec",
            title: "RET GAB CONF (*)",
            amount: "-1 500,00 EUR",
            key: 13,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "05",
            date: "O5 dec",
            title: "PAY 99008923 (*)",
            amount: "-5 299,00 EUR",
            key: 14,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "05",
            date: "O5 dec",
            title: "OPER. DEBIT REF :SECCART",
            amount: "-3,03 EUR",
            key: 15,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "04",
            date: "O4 dec",
            title: "RET GAB CONF (*)",
            amount: "-100,00 EUR",
            key: 16,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "04",
            date: "O4 dec",
            title: "RET GAB CONF (*)",
            amount: "-2 000,00 EUR",
            key: 17,
            state: false,
          },
          {
            shortMonth: "dec",
            day: "04",
            date: "O4 dec",
            title: "RET GAB CONF (*)",
            amount: "-2 000,00 EUR",
            key: 18,
            state: false,
          }
        ]
      },
        {
      key: 1,
      month: 'octobre 2021',
      list:[
        {
          shortMonth: "oct",
          day: "13",
          date: "13 oct",
          title: "GAB BANK ADGAL13/10/21",
          amount: "-300,00 EUR",
          key: 59,
          state: false,
        },
          {
        shortMonth: "oct",
        day: "08",
        date: "O8 oct",
        title: "GAB BANK AL MAG04/10/21",
        amount: "-100,00 EUR",
        key: 1,
            state: false,
      },
        {
          shortMonth: "oct",
          day: "08",
          date: "O8 oct",
          title: "GAB C.I.H 02/10/21",
          amount: "-2 000,00 EUR",
          key: 2,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "08",
          date: "O8 oct",
          title: "GAB C.I.H 02/10/21",
          amount: "-2 000,00 EUR",
          key: 3,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "08",
          date: "O8 oct",
          title: "3 FRAIS/RETRAIT ESP GAB CONF...",
          amount: "-18,00 EUR",
          key: 4,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "08",
          date: "O8 oct",
          title: "ARRETE DU COMPTE 3E TRIM...",
          amount: "-660,97 EUR",
          key: 5,
          state: false,
        },



        {
          shortMonth: "oct",
          day: "07",
          date: "O7 oct",
          title: "FRAIS EXTRAIT DE COMPTE",
          amount: "-11,00 EUR",
          key: 12,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "06",
          date: "O6 oct",
          title: "RET GAB CONF (*)",
          amount: "-1 500,00 EUR",
          key: 13,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "05",
          date: "O5 oct",
          title: "PAY 99008923 (*)",
          amount: "-5 299,00 EUR",
          key: 14,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "05",
          date: "O5 oct",
          title: "OPER. DEBIT REF :SECCART",
          amount: "-3,03 EUR",
          key: 15,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "04",
          date: "O4 oct",
          title: "RET GAB CONF (*)",
          amount: "-100,00 EUR",
          key: 16,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "04",
          date: "O4 oct",
          title: "RET GAB CONF (*)",
          amount: "-2 000,00 EUR",
          key: 17,
          state: false,
        },
        {
          shortMonth: "oct",
          day: "04",
          date: "O4 oct",
          title: "RET GAB CONF (*)",
          amount: "-2 000,00 EUR",
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
            shortMonth: "sept",
            day: "30",
            date: "30 sept",
            title: "RAPATRIEMENT : RPT04094708",
            amount: "13 097,64 EUR",
            key: 19,
            state: true,
          },
          {
            shortMonth: "sept",
            day: "30",
            date: "30 sept",
            title: "RETRAIT ESPECES CHQ AUM...",
            amount: "-115 000,00 EUR",
            key: 20,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "29",
            date: "29 sept",
            title: "2 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-12,00 EUR",
            key: 21,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "29",
            date: "29 sept",
            title: "RAPATRIEMENT RPT04091159",
            amount: "115 405,20 EUR",
            key: 22,
            state: true,
          },
          {
            shortMonth: "sept",
            day: "29",
            date: "29 sept",
            title: "GAB BANK AL MAG18/08/21",
            amount: "-500,00 EUR",
            key: 23,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "29",
            date: "29 sept",
            title: "PAIEMENT/CB 27/09/21 ORANGE...",
            amount: "-25,00 EUR",
            key: 24,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "29",
            date: "29 sept",
            title: "GAB BANK AL MAG18/08/21",
            amount: "-500,00 EUR",
            key: 25,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "24",
            date: "24 sept",
            title: "GAB BANK AL MAG22/09/21",
            amount: "-500,00 EUR",
            key: 26,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "24",
            date: "24 sept",
            title: "1 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 27,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "22",
            date: "22 sept",
            title: "PAIEMENT/CB 19/09/21 SIN...",
            amount: "-1 000,00 EUR",
            key: 28,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "22",
            date: "22 sept",
            title: "1 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 29,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "22",
            date: "22 sept",
            title: "GAB 17/09/21",
            amount: "-2 000,00 EUR",
            key: 30,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "15",
            date: "15 sept",
            title: "1 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 31,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "15",
            date: "15 sept",
            title: "PAIEMENT/CB 14/09/21 ZARA M M",
            amount: "-999,00 EUR",
            key: 32,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "15",
            date: "15 sept",
            title: "GAB BANK AL MAG14/09/21",
            amount: "-2 000,00 EUR",
            key: 33,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "15",
            date: "15 sept",
            title: "PAIEMENT/CB 14/09/21 H ET M M...",
            amount: "-699,00 EUR",
            key: 34,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "15",
            date: "15 sept",
            title: "PAIEMENT/CB 14/09/21 KFC MAA...",
            amount: "-999,00 EUR",
            key: 35,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "14",
            date: "14 sept",
            title: "GAB BANK AL MAG11/09/21",
            amount: "-2 000,00 EUR",
            key: 36,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "14",
            date: "14 sept",
            title: "GAB BANK AL MAG11/09/21",
            amount: "-2 000,00 EUR",
            key: 37,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "14",
            date: "14 sept",
            title: "4 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-24,00 EUR",
            key: 38,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "14",
            date: "14 sept",
            title: "PAIEMENT/CB 11/09/21 ORANGE..",
            amount: "-199,00 EUR",
            key: 39,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "14",
            date: "14 sept",
            title: "GAB BANK AL MAG11/09/21",
            amount: "-400,00 EUR",
            key: 40,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "14",
            date: "14 sept",
            title: "GAB BANK AL MAG11/09/21",
            amount: "-2 000,00 EUR",
            key: 41,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "14",
            date: "14 sept",
            title: "OPER. DEBIT REF :H.RASMA",
            amount: "-83,61 EUR",
            key: 42,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "13",
            date: "13 sept",
            title: "RETRAIT ESPECES CHQ AUM...",
            amount: "-202 000,00 EUR",
            key: 43,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "13",
            date: "13 sept",
            title: "RETRAIT ESPECES CHQ AUM...",
            amount: "-35 000,00 EUR",
            key: 44,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "10",
            date: "10 sept",
            title: "GAB C.N.C.A 09/09/21",
            amount: "-2 000,00 EUR",
            key: 45,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "10",
            date: "10 sept",
            title: "PDL SUR VIR RECU DE ETRANGER",
            amount: "-11,00 EUR",
            key: 46,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "10",
            date: "10 sept",
            title: "1 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 47,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "10",
            date: "10 sept",
            title: "VIREMENT RECU DE ETRANGER",
            amount: "201 549,78 EUR",
            key: 48,
            state: true,
          },
          {
            shortMonth: "sept",
            day: "09",
            date: "09 sept",
            title: "1 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 49,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "09",
            date: "09 sept",
            title: "GAB BANK AL MAG07/09/21",
            amount: "-200,00 EUR",
            key: 50,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "09",
            date: "09 sept",
            title: "PAIEMENT/CB 08/09/21 ALDO",
            amount: "-799,00 EUR",
            key: 51,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "09",
            date: "09 sept",
            title: "VIR AG EMIS VERS SQUALI KA...",
            amount: "-300 000,00 EUR",
            key: 52,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "08",
            date: "08 sept",
            title: "VIREMENT RECU DE ETRANGER",
            amount: "353 006,69 EUR",
            key: 53,
            state: true,
          },
          {
            shortMonth: "sept",
            day: "08",
            date: "08 sept",
            title: "PDL SUR VIR RECU DE ETRANGER",
            amount: "-11,00 EUR",
            key: 54,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "08",
            date: "08 sept",
            title: "1 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 55,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "08",
            date: "08 sept",
            title: "GAB BANK AL MAG06/09/21",
            amount: "-1 000,00 EUR",
            key: 56,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "07",
            date: "07 sept",
            title: "OPER. DEBIT REF :SECCART",
            amount: "-3,03 EUR",
            key: 57,
            state: false,
          },
          {
            shortMonth: "sept",
            day: "02",
            date: "02 sept",
            title: "AWBGAB CASA RYAD HAY 01/...",
            amount: "-1 000,00 EUR",
            key: 58,
            state: false,
          },
        ],
      },
      {
        key: 3,
        month: 'août 2021',
        list:[
          {
            shortMonth: "août",
            day: "25",
            date: "25 août",
            title: "GAB BANK AL MAG23/08/21",
            amount: "-300,00 EUR",
            key: 59,
            state: false,
          },
          {
            shortMonth: "août",
            day: "25",
            date: "25 août",
            title: "1 FRAIS/RETRAIT ESP GAB CONF...",
            amount: "-12,00 EUR",
            key: 60,
            state: false,
          },
        ],
      }

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
