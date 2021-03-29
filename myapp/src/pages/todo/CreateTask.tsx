import styles from '../todo/todoList.less'
import {connect} from 'umi'
import React,{useState} from "react";


function CreateTask(props: any) {
  const [form, setForm] = useState<any>('')

  const addTask = () => {
    props.createTask(form)
    setForm('')
  }

  return (
    <div className={styles}>
      <input type="text" value={form} onChange={event => setForm(event.target.value)}/>
      <button onClick={addTask}>Create</button>
    </div>
  );
}



const mapDispatchToProps = (dispatch: any) => ({
  createTask: (form: any) => dispatch({type: 'List/create', payload: form})
})


export default connect(null, mapDispatchToProps)(CreateTask);
