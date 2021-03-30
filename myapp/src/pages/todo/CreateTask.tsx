import styles from '../todo/todoList.less'
import {connect} from 'umi'
import React,{useState} from "react";


function CreateTask(props: any) {
  const [form, setForm] = useState<any>('')

  const addTask = (form : any) => {
    props.createTask(form)
    setForm('')
  }

  return (
    <div className={styles.formTask}>
      <input type="text" value={form} onChange={event => setForm(event.target.value)}/>
      <button onClick={() => addTask(form)}>Create</button>
    </div>
  );
}



const mapDispatchToProps = (dispatch: any) => ({
  createTask: (payload: {form: any}) => dispatch({type: 'List/addTask', payload}), //addTask это не эффект!это функция в редусере
})




export default connect(null, mapDispatchToProps)(CreateTask);
