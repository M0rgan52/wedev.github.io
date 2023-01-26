import "../styles/Footer.css";
import Logo from "../assets/WeDev_v1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <a href="#home">
        <img src={Logo} alt="Logo WeDev" className="footer_img" />
      </a>
      <div className="footer_name">
        <p>
          <FontAwesomeIcon
            icon={faCopyright}
            className="footer_copyright"></FontAwesomeIcon>
          <span> </span> 2023 - Morgan Strohl <br />
          <a href=""><Link to={`legalnotice`}> Mentions légales </Link></a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
