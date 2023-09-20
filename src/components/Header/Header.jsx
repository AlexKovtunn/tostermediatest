import './Header.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="container">
          <p className="header__top-text">SPECIAL OFFER + FREE DELIVERY 2-4 DAYS IN SA</p>
        </div>
      </div>

      <div className="header__bottom">
        <div className="container">
          <div className="flexCol">
            <div className="header__bottom-logo">
              <img src={logo} alt="" />
            </div>

            <p className="header__bottom-text">orthopedic slippers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
