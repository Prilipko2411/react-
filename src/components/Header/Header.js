import Logo from '../../Assets/Images/Logo.png'
import '../Header/Header.css'

const Header = () => {
    return <div>
        <div className="headerBox">
            <div className="headerLogo">
            <img className='logo-img' src={Logo} alt="Дим лого" /> 
            </div>
            <div className="headerNav">
                <a href='/'><h3>Головна</h3></a>
                <a href='/'><h3>Новинки</h3></a>
                <a href='/'><h3>Колекції</h3></a>
                <a href='/'><h3>Про нас</h3></a>
                <a href='/'><h3>Контакти</h3></a>
                <div className="headerNavLogin">
                <a href='/'><h3 className='h3White'>Увійти</h3></a>
                    </div>
            </div>
        </div>
    </div>
}

export default Header;