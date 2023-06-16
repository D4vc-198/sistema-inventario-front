import './../../Styles/sidebar.css'
import holbertonLogo from './../../Assets/Holberton-logo.svg'
// import holbertonLogo from './../../Assets/Holberton-logo.svg'
import userProfileImage from './../../Assets/user-profile-image.png'
import { FaUserFriends, FaBox, FaTruck } from 'react-icons/fa';


const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-logo-container'>
                <img src={holbertonLogo} alt="logo holberton" />
            </div>
            <div className='sidebar-user-info-container'>
                <div className='sidebar-user-info-image'>
                    <img src={userProfileImage} alt="foto perfil usuario" />
                </div>

                <div className='sidebar-user-info-data'>
                    <strong>Diego A. Valdez</strong>
                    <p>Gerente</p>
                </div>
            </div>
            <div className='sidebar-nav-container'>
                <ul>
                    <li>
                        <FaUserFriends size='1.4em'/>
                        <div className='sidebar-item-text'>
                            <p>Usuarios</p>
                        </div>
                    </li>
                    <li>
                        <FaBox size='1.4em'/>
                        <div className='sidebar-item-text'>
                            <p>Inventario</p>
                        </div>
                    </li>
                    <li>
                        <FaTruck size='1.4em'/>
                        <div className='sidebar-item-text'>
                            <p>Proveedores</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar