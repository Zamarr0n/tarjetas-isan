import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

function Header(){



    return(
        <>
        <section className="header-section">
        <div className="images-div">
        <div className="div-bk-image">
        <img className="background-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxC_cScOk4wx7TVNYbGL0DnMBmIJCRZMOGUw&s" alt="" />
        <div className="profile-div">
        <img className="profile-image" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        </div>
        <div className='name'>
        <h1>Juan Ramirez González</h1>
        </div>
        </div>
        </section>

        <section className="section-sc">
        <div className="btn-sc">
            <div className="">
                <button className=" fb btn-rd">
                <FaFacebookSquare/> facebook
                </button>
            </div>
            <div>
                <button className=" Gm btn-rd">
                 < SiGmail/> Gmail
                </button>
            </div>
            <div>
                <button className="Wh btn-rd">
                   <IoLogoWhatsapp /> whatsapp
                </button>
            </div>
        </div>
        </section>
        </>
    );

} 

export default Header;