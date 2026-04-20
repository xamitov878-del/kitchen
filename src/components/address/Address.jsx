import "./Address.css"

const Address = () => {
  return (
    <section className='address'>
        <div className='container'>
            <div className='address__wrapper'>
                <div className='address__inner'>
                    <h2 className='address__title'>Your nearest restaurants</h2>
                    <p className='address__text'>Each kitchen works with its own delivery area to deliver food to you as soon as possible</p>
                </div>
                <div>
                    <input className='address__inp' type="text" placeholder='Enter delivery address'/>
                    <button className='address__btn' type='submit'>send</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Address