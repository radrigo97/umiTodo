import styles from '../count/user.less'
import {connect} from 'umi'

function user(props: any) {
  return (
    <div>
      <h1 className={styles.title}>{props.count}</h1>
        <button onClick={props.plusOne}>+</button>
      <button onClick={props.minusOne}>-</button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.Count.digit
})

const mapDispatchToProps = (dispatch: any) => ({
 plusOne: () => dispatch({type: 'Count/plus'}),
 minusOne: () => dispatch({type: 'Count/minus'}),
})


export default connect(mapStateToProps, mapDispatchToProps)(user);
