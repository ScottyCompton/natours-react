
const Header = () => {

    return (
        <header className="header">
        <div className="header__logo-box"><img src="../dist/img/logo-white.png" alt="Logo" className="header__logo" /></div>
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">OUTDOORS</span>
                <span className="heading-primary--sub">IS WHERE LIFE HAPPENS</span>
            </h1>
            <a href={'#tours'} className="btn btn--white btn--animated">Discover Our Tours</a>
            
        </div>
    </header>
    )
}

export default Header;