import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Reducers/CounterSlice'


function BirthCounter(){
  const x1 = useSelector((state) => state.counter?.count)
  console.log(x1)
  const dispatch1 = useDispatch()
  const addYear =()=>{
    dispatch1(increment())
  }

  const delYear =()=>{
    dispatch1(decrement())
  }

  return(
    <div>
    <h2>{x1}</h2>
       {/* <h2>{x1 !== undefined ? x1 : 'Loading...'}</h2> */}
        <button onClick={addYear}>add Year</button>
        <button onClick={delYear}>delete Year</button>
        <button onClick={delYear}>delete Year</button>
    </div>
  )
}

export default BirthCounter;