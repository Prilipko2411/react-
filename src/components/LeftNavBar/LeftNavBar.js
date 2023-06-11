import '../LeftNavBar/LeftNavBar.css'
import TShirt from '../../Assets/Images/T-Shirt.png'
import Poliver from '../../Assets/Images/Poliver.png'
import Hoodie from '../../Assets/Images/Hoodie.png'
import Jacket from '../../Assets/Images/Jacket.png'
import Socks from '../../Assets/Images/Socks.png'

const LeftNavBar = () => {

    function Square({value}) {
        return <button className="square">{value}</button>;
      }

    return <div className='columnLeftNavBar'>
        <Square value={<a href='/'><img className='columnLeftNavBarImg' src={TShirt} alt="T-Shirt" /></a>}/>
        <Square value={<a href='/'><img className='columnLeftNavBarImg' src={Poliver} alt="Poliver" /></a> }/>
        <Square value={<a href='/'><img className='columnLeftNavBarImg' src={Hoodie} alt="Hoodie" /></a> }/>
        <Square value={<a href='/'><img className='columnLeftNavBarImg' src={Jacket} alt="Jacket" /></a> }/>
        <Square value={<a href='/'><img className='columnLeftNavBarImg' src={Socks} alt="Socks" /></a> }/>
    </div>

}

export default LeftNavBar;


