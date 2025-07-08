import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './style.scss'

const Navigation = () => {
  return <div className="navigation">
    <div className="logo">ERPHIE</div>
    <div className="menu">
      <li><FontAwesomeIcon icon={faBars} /></li>
    </div>
  </div>;
};

export default Navigation;
