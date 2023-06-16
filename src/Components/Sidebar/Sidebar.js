import './../../Styles/sidebar.css'
import holbertonLogo from './../../Assets/Holberton-logo.svg'
// import holbertonLogo from './../../Assets/Holberton-logo.svg'
import userProfileImage from './../../Assets/user-profile-image.png'

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
                    <p>Diego A. Valdez</p>
                    <p>Gerente</p>
                </div>
            </div>
            <div>
                <ul>
                    <li>Menu 1</li>
                    <li>Menu 2</li>
                    <li>Menu 3</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar