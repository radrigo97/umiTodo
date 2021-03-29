import styles from '../todo/todoList.less'
import {connect} from 'umi'
import CreateTask from './CreateTask'

function todoList(props: any) {


  return (
    <div className={styles}>
      <CreateTask/>
      {
        props.task.map((el: any) => <li key={el.id}>{el.title}
        </li>)
      }
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  task: state.List.taskList
})



export default connect(mapStateToProps, null)(todoList);
