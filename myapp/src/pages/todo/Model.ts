import {Effect, Reducer} from 'umi';
import {  select } from 'redux-saga/effects'


export interface IState {
  taskList: any
}

export interface IModel {
  namespace: string,
  state: IState,
  effects: {
    create: Effect;
    delete: Effect;
  };
  reducers: {
    addTask: Reducer<IState>;
    deleteTask: Reducer<IState>;
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

    *delete(_, { call, put }) {
      yield put({type: 'deleteTask'})
    },
  },

  reducers: {
    addTask(state: any, {payload}: any) {
      const createTask = [...state.taskList]
      createTask.push({title: payload, id: Math.random()})
      console.log(state.taskList)
      return {
        ...state,
        taskList: createTask
      };
    },

    deleteTask(state: any, {payload}: any) {
      const deleteTask = state.taskList.filter(el => el.id !== payload)
      return {
        ...state,
        taskList: deleteTask
      };
    },
  },
};

export default Model;



