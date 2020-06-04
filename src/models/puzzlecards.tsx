import {getdata as request} from '@/services/req';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise
//import request from "../utils/request";
const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};
/*const getRandomPuzzle=() =>{
  return request('http://localhost:8080/test/joke');
};*/
export default {
  namespace: 'puzzlecards',
  state:{
   data: [],
    counter:0,
  },
  effects: {
    *queryInitCards(_, {call, put}) {
      //const  = sagaEffects;
      //const endPointURI = 'http://localhost:8080/test/joke';

      const puzzle = yield call(request);
      yield put({ type: 'addNewCard', payload: puzzle });

      yield call(delay, 3000);

      const puzzle2 = yield call(request);
      yield put({ type: 'addNewCard', payload: puzzle2 });
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      //newCard={newCard};
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard[state.counter], id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};
