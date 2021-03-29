import {Effect, Reducer} from 'umi';


export interface IState {
  digit: number,
}

export interface IModel {
  namespace: string,
  state: IState,
  effects: {
    plus: Effect;
    minus: Effect;
  };
  reducers: {
    plusOne:Reducer<IState>;
    minusOne:Reducer<IState>;
  };
}

const Model : IModel = {
  namespace: 'Count',
  state: {
    digit: 0
  },

  effects: {
    * plus(_, {call, put}) {
      yield put({
        type: 'plusOne',
      });
    },
    * minus(_, {call, put}) {
      yield put({
        type: 'minusOne',
      });
    },
  },

  reducers: {
    plusOne(state: any, {payload}: any) {
      return {
        ...state,
        digit: state.digit + 1,
      };
    },
    minusOne(state: any, {payload}: any) {
      return {
        ...state,
        digit: state.digit - 1,
      };
    },
  },
};

export default Model;
