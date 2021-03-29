import {Effect, Reducer} from 'umi';


export interface IState {
  taskList: any
}

export interface IModel {
  namespace: string,
  state: IState,
  effects: {
    create: Effect;
  };
  reducers: {
    addTask: Reducer<IState>;
  };
}

const Model : IModel = {
  namespace: 'List',
  state: {
    taskList: [
      {title: 'One step by step', id: Math.random()},
      {title: 'Just do it', id: Math.random()},
      {title: 'Chicken popkorn', id: Math.random()},
    ],
  },

  effects: {
    *create(_, { call, put }) {
      yield put({type: 'addTask'})
    },
  },

  reducers: {
    addTask(state: any, {payload}: any) {
      const createTask = [...state.taskList]
      createTask.push({title: payload, id: Math.random()})
      return {
        ...state,
        taskList: createTask
      };
    },
  },
};

export default Model;
