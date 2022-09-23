import hourglass from './assets/hourglass.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img src={hourglass} alt="loading" width={180} className="text-center mx-auto"/>
    </div>
  )
}

export default Spinner