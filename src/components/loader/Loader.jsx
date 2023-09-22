import './loader.css'
import spinner from "../../../src/img/spinner.gif"

export default function Loader() {
  return (
    <div className='loader'>
      <img className='spinner' src={spinner} alt="" />
    </div>
  )
}
