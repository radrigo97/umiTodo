import styles from '../todo/todoList.less'
import {connect} from 'umi'
import CreateTask from './CreateTask'

function todoList(props: any) {


  return (
    <div className={styles}>
      <CreateTask/>
      <div className={styles}>
        {
          props.task.map((el: any) => <ul className={styles.listTask}> <li key={el.id}>{el.title}
          <button onClick={() => props.deleteTask(el.id)}>Delete</button>
          </li> </ul>)
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  task: state.List.taskList
})

const mapDispatchToProps = (dispatch: any) => ({
  deleteTask: (payload: {id: number}) => dispatch({type: 'List/deleteTask', payload}), //addTask это не эффект!это функция в редусере
})



export default connect(mapStateToProps, mapDispatchToProps)(todoList);
