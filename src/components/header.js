import React from "react"
import Nav from "../components/Nav"
import logo from "../assets/images/LCS-HORIZONTAL-COLOR.png"

function Header() {
    return (
        <header className="stck styl2 abs-ps">
            {/* <div className="container"> */}
            <div className="tpbr1">
                <div className="container">
                    <div className="lgo1">
                        <a href="index.html" title="Home" itemProp="url">
                            <img src={logo} width="250" height="84" alt="logo1" itemProp="image" />
                        </a>
                    </div>
                    <div className="scl1">
                        <a href="#" title="twitter" itemProp="url" target="_blank">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" title="facebook" itemProp="url" target="_blank">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                    </div>
                    <div class="cnt-inf-lst2">
                        <div class="cnt-inf1">
                            <i class="fa fa-map-marker blu-clr"></i>
                            <p itemprop="description">#126/21 Reindolf Road Abelemkpe, Accra-Ghana.</p>
                        </div>
                        <div class="cnt-inf1">
                            <i class="fa fa-clock-o blu-clr"></i>
                            <p itemprop="description">Mon - Fri 8.00 - 17.00 Saturday, Sunday Closed</p>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
        </header>
    )

}
export default Header 