import { createStore } from 'vuex'
import axios, {AxiosResponse} from "axios";
import {DateTime} from "luxon";

export default createStore({
  state: {
    loading: false,
    balance: "1 762 000 Euros",
    iban: "IT067 01514 514100000245 69",
    name: "PATRICK ROULET",
    yesterdayBalance: "2 112 000 EURO",
    currentDate: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_FULL),
    currentOperation: null,
    logged: true,
    apiKey: "638a7f5dc890f30a8fd1f6d9",
    beneficiaries: [] as any[],
    operations: [
      {
        key: 1,
        month: 'Febbraio 2023',
        list:[
          {
            shortMonth: "feb",
            day: "06",
            date: "O6 feb",
            title: "GAB BANK AL MAG06/02/23",
            amount: "-400,00 EUR",
            key: 1,
            state: false,
          },
          {
            shortMonth: "feb",
            day: "02",
            date: "O2 feb",
            title: "GAB C.I.H 02/02/23",
            amount: "-2 000,00 EUR",
            key: 2,
            state: false,
          },
        ]
      },
      {
        key: 1,
        month: 'Gennaio 2023',
        list:[
          {
            shortMonth: "gen",
            day: "20",
            date: "20 gen",
            title: "TRASF /SEPA CH79 0076...",
            amount: "-32 000,00 EUR",
            key: 2,
            state: false,
          },
          {
            shortMonth: "gen",
            day: "25",
            date: "25 gen",
            title: "TRASF /SEPA FR76 0932...",
            amount: "49 000,00 EUR",
            key: 2,
            state: true,
          }
        ]
      },
      {
        key: 1,
        month: 'dicembre 2022',
        list:[
          {
            shortMonth: "dic",
            day: "09",
            date: "09 dic",
            title: "TRASF /SEPA CH79 0076...",
            amount: "-250 000 EUR",
            key: 59,
            state: false,
          },
          {
            shortMonth: "dic",
            day: "08",
            date: "O8 dic",
            title: "GAB BANK AL MAG08/12/22",
            amount: "-100,00 EUR",
            key: 1,
            state: false,
          },
          {
            shortMonth: "dic",
            day: "02",
            date: "O2 dic",
            title: "GAB C.I.H 02/12/22",
            amount: "-1 000,00 EUR",
            key: 2,
            state: false,
          },
          {
            shortMonth: "dic",
            day: "02",
            date: "O2 dic",
            title: "GAB C.I.H 02/12/22",
            amount: "-1 000,00 EUR",
            key: 3,
            state: false,
          },
          {
            shortMonth: "dic",
            day: "02",
            date: "O2 dic",
            title: "3 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-18,00 EUR",
            key: 4,
            state: false,
          },
          {
            shortMonth: "dic",
            day: "02",
            date: "O2 dic",
            title: "CHIUSURA DEL CONTO 3° TRIM...",
            amount: "-660,97 EUR",
            key: 5,
            state: false,
          },

          {
            shortMonth: "dic",
            day: "01",
            date: "O1 dic",
            title: "SPESE PER L'ESTRATTO CONTO",
            amount: "-11,00 EUR",
            key: 12,
            state: false,
          },
          {
            shortMonth: "dic",
            day: "01",
            date: "O1 dic",
            title: "RET GAB CONF (*)",
            amount: "-1 500,00 EUR",
            key: 13,
            state: false,
          },
          {
            shortMonth: "dic",
            day: "01",
            date: "O1 dic",
            title: "PAY 99008923 (*)",
            amount: "-5 299,00 EUR",
            key: 14,
            state: false,
          },
        ]
      },
      {
        key: 1,
        month: 'octobre 2022',
        list:[
          {
            shortMonth: "oct",
            day: "13",
            date: "13 oct",
            title: "GAB BANK ADGAL13/10/22",
            amount: "-300,00 EUR",
            key: 59,
            state: false,
          },
          {
            shortMonth: "oct",
            day: "08",
            date: "O8 oct",
            title: "GAB BANK AL MAG04/10/22",
            amount: "-100,00 EUR",
            key: 1,
            state: false,
          },
          {
            shortMonth: "oct",
            day: "08",
            date: "O8 oct",
            title: "GAB C.I.H 02/10/22",
            amount: "-2 000,00 EUR",
            key: 2,
            state: false,
          },
          {
            shortMonth: "oct",
            day: "08",
            date: "O8 oct",
            title: "GAB C.I.H 02/10/22",
            amount: "-2 000,00 EUR",
            key: 3,
            state: false,
          },
          {
            shortMonth: "oct",
            day: "08",
            date: "O8 oct",
            title: "3 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-18,00 EUR",
            key: 4,
            state: false,
          },
          {
            shortMonth: "oct",
            day: "08",
            date: "O8 oct",
            title: "CHIUSURA DEL CONTO 3° TRIM...",
            amount: "-660,97 EUR",
            key: 5,
            state: false,
          },



          {
            shortMonth: "oct",
            day: "07",
            date: "O7 oct",
            title: "SPESE PER L'ESTRATTO CONTO",
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
        month: 'settembre 2022',
        list: [
          {
            shortMonth: "sett",
            day: "30",
            date: "30 sett",
            title: "RIPARAZIONI : RPT04094708",
            amount: "13 097,64 EUR",
            key: 19,
            state: true,
          },
          {
            shortMonth: "sett",
            day: "30",
            date: "30 sett",
            title: "PRELIEVO DI CONTANTI CHQ AUM...",
            amount: "-115 000,00 EUR",
            key: 20,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "29",
            date: "29 sett",
            title: "2 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-12,00 EUR",
            key: 21,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "29",
            date: "29 sett",
            title: "RIPARAZIONI RPT04091159",
            amount: "115 405,20 EUR",
            key: 22,
            state: true,
          },
          {
            shortMonth: "sett",
            day: "29",
            date: "29 sett",
            title: "GAB BANK AL MAG18/08/22",
            amount: "-500,00 EUR",
            key: 23,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "29",
            date: "29 sett",
            title: "PAGAMENTO/CB 27/09/22 ORANGE...",
            amount: "-25,00 EUR",
            key: 24,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "29",
            date: "29 sett",
            title: "GAB BANK AL MAG18/08/22",
            amount: "-500,00 EUR",
            key: 25,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "24",
            date: "24 sett",
            title: "GAB BANK AL MAG22/09/22",
            amount: "-500,00 EUR",
            key: 26,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "24",
            date: "24 sett",
            title: "1 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 27,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "22",
            date: "22 sett",
            title: "PAGAMENTO/CB 19/09/22 SIN...",
            amount: "-1 000,00 EUR",
            key: 28,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "22",
            date: "22 sett",
            title: "1 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 29,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "22",
            date: "22 sett",
            title: "GAB 17/09/22",
            amount: "-2 000,00 EUR",
            key: 30,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "15",
            date: "15 sett",
            title: "1 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 31,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "15",
            date: "15 sett",
            title: "PAGAMENTO/CB 14/09/22 ZARA M M",
            amount: "-999,00 EUR",
            key: 32,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "15",
            date: "15 sett",
            title: "GAB BANK AL MAG14/09/22",
            amount: "-2 000,00 EUR",
            key: 33,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "15",
            date: "15 sett",
            title: "PAGAMENTO/CB 14/09/22 H ET M M...",
            amount: "-699,00 EUR",
            key: 34,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "15",
            date: "15 sett",
            title: "PAGAMENTO/CB 14/09/22 KFC MAA...",
            amount: "-999,00 EUR",
            key: 35,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "14",
            date: "14 sett",
            title: "GAB BANK AL MAG11/09/22",
            amount: "-2 000,00 EUR",
            key: 36,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "14",
            date: "14 sett",
            title: "GAB BANK AL MAG11/09/22",
            amount: "-2 000,00 EUR",
            key: 37,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "14",
            date: "14 sett",
            title: "4 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-24,00 EUR",
            key: 38,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "14",
            date: "14 sett",
            title: "PAGAMENTO/CB 11/09/22 ORANGE..",
            amount: "-199,00 EUR",
            key: 39,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "14",
            date: "14 sett",
            title: "GAB BANK AL MAG11/09/22",
            amount: "-400,00 EUR",
            key: 40,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "14",
            date: "14 sett",
            title: "GAB BANK AL MAG11/09/22",
            amount: "-2 000,00 EUR",
            key: 41,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "14",
            date: "14 sett",
            title: "OPER. DEBIT REF :H.RASMA",
            amount: "-83,61 EUR",
            key: 42,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "13",
            date: "13 sett",
            title: "PRELIEVO DI CONTANTI CHQ AUM...",
            amount: "-202 000,00 EUR",
            key: 43,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "13",
            date: "13 sett",
            title: "PRELIEVO DI CONTANTI CHQ AUM...",
            amount: "-35 000,00 EUR",
            key: 44,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "10",
            date: "10 sett",
            title: "GAB C.N.C.A 09/09/22",
            amount: "-2 000,00 EUR",
            key: 45,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "10",
            date: "10 sett",
            title: "PDL SUR VIR RECU DE ETRANGER",
            amount: "-11,00 EUR",
            key: 46,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "10",
            date: "10 sett",
            title: "1 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 47,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "10",
            date: "10 sett",
            title: "TRASFERIMENTO RICEVUTO DAL...",
            amount: "201 549,78 EUR",
            key: 48,
            state: true,
          },
          {
            shortMonth: "sett",
            day: "09",
            date: "09 sett",
            title: "1 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 49,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "09",
            date: "09 sett",
            title: "GAB BANK AL MAG07/09/22",
            amount: "-200,00 EUR",
            key: 50,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "09",
            date: "09 sett",
            title: "PAGAMENTO/CB 08/09/22 ALDO",
            amount: "-799,00 EUR",
            key: 51,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "09",
            date: "09 sett",
            title: "VIR AG EMIS VERS SQUALI KA...",
            amount: "-300 000,00 EUR",
            key: 52,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "08",
            date: "08 sett",
            title: "TRASFERIMENTO RICEVUTO DAL...",
            amount: "353 006,69 EUR",
            key: 53,
            state: true,
          },
          {
            shortMonth: "sett",
            day: "08",
            date: "08 sett",
            title: "PDL SUR TRAS RIC DAL...",
            amount: "-11,00 EUR",
            key: 54,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "08",
            date: "08 sett",
            title: "1 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-6,00 EUR",
            key: 55,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "08",
            date: "08 sett",
            title: "GAB BANK AL MAG06/09/22",
            amount: "-1 000,00 EUR",
            key: 56,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "07",
            date: "07 sett",
            title: "OPER. DEBIT REF :SECCART",
            amount: "-3,03 EUR",
            key: 57,
            state: false,
          },
          {
            shortMonth: "sett",
            day: "02",
            date: "02 sett",
            title: "AWBGAB CASA RYAD HAY 01/...",
            amount: "-1 000,00 EUR",
            key: 58,
            state: false,
          },
        ],
      },
      {
        key: 3,
        month: 'agosto 2022',
        list:[
          {
            shortMonth: "agosto",
            day: "25",
            date: "25 agosto",
            title: "GAB BANK AL MAG23/08/22",
            amount: "-300,00 EUR",
            key: 59,
            state: false,
          },
          {
            shortMonth: "agosto",
            day: "25",
            date: "25 agosto",
            title: "1 COSTI/PRELIEVO ESP GAB CONF...",
            amount: "-12,00 EUR",
            key: 60,
            state: false,
          },
        ],
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

      if(!month){
        return null;
      }

      const operation = month.list.find((operation) => {
        return operation.key  + '' == payload.operationKey;
      });

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
