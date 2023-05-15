import React from "react"
import charlesImg from "../assets/images/charles.jpg"
import danielImg from "../assets/images/daniel.jpg"
import kwaminaImg from "../assets/images/kwamina.jpg"
import peterImg from "../assets/images/peter.jpg"

function staff() {
    return (
        <div className="gp">
            <div className="container">
                <div className="rmv-ext5">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-lg-4">
                            <div className="tm-bx text-center">
                                <a href="#" title="" itemProp="url">
                                    <img src={peterImg} alt="tm1-1.jpg" itemProp="image" />
                                </a>
                                <div className="tb-bx-inf">
                                    <h4 itemProp="headlind">
                                        <a href="#" title="" itemProp="url">Peter Ken Bediako</a>
                                    </h4>
                                    <i>IT Manager</i>
                                </div>
                            </div>
                        </div>

                        {/*<div class="col-md-4 col-sm-4 col-lg-4">
                        <div class="tm-bx text-center">
                            <a href="team-detail.html" title="" itemprop="url"><img src="assets/images/resources/tm1-2.jpg" alt="tm1-2.jpg" itemprop="image"></a>
                            <div class="tb-bx-inf">
                                <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Amanda Seyfried</a></h4>
                                <i>Divisional manager</i>
                                <div class="scl-btns">
                                    <a href="#" title="Facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i></a>
                                    <a href="#" title="Google Plus" itemprop="url" target="_blank"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" title="Linkedin" itemprop="url" target="_blank"><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                        <div class="col-md-4 col-sm-4 col-lg-4">
                            <div class="tm-bx text-center">
                                <a href="team-detail.html" title="" itemprop="url"><img src={danielImg} alt="tm1-3.jpg" itemprop="image" /></a>
                                <div class="tb-bx-inf">
                                    <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Daniel Aryee Ayeetey</a></h4>
                                    <i>AV Technician </i>
                                    {/*<div class="scl-btns">
                                    <a href="#" title="Facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i></a>
                                    <a href="#" title="Google Plus" itemprop="url" target="_blank"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" title="Linkedin" itemprop="url" target="_blank"><i class="fa fa-linkedin"></i></a>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4">
                            <div class="tm-bx text-center">
                                <a href="team-detail.html" title="" itemprop="url"><img src="" alt="tm1-4.jpg" itemprop="image" /></a>
                                <div class="tb-bx-inf">
                                    <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Kofi Adomako</a></h4>
                                    <i>IT Hardware Technician</i>
                                    {/*<div class="scl-btns">
                                    <a href="#" title="Facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i></a>
                                    <a href="#" title="Google Plus" itemprop="url" target="_blank"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" title="Linkedin" itemprop="url" target="_blank"><i class="fa fa-linkedin"></i></a>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4">
                            <div class="tm-bx text-center">
                                <a href="team-detail.html" title="" itemprop="url"><img src={charlesImg} alt="tm1-5.jpg" itemprop="image" /></a>
                                <div class="tb-bx-inf">
                                    <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url"> Charles Bentil</a></h4>
                                    <i> System Administrator </i>
                                    {/*<div class="scl-btns">
                                    <a href="#" title="Facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i></a>
                                    <a href="#" title="Google Plus" itemprop="url" target="_blank"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" title="Linkedin" itemprop="url" target="_blank"><i class="fa fa-linkedin"></i></a>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4">
                            <div class="tm-bx text-center">
                                <a href="team-detail.html" title="" itemprop="url"><img src="" alt="tm1-6.jpg" itemprop="image" /></a>
                                <div class="tb-bx-inf">
                                    <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Jonathan Appiah-Aberde</a></h4>
                                    <i>Database Analyst/ Programmer</i>
                                    {/*<div class="scl-btns">
                                    <a href="#" title="Facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i></a>
                                    <a href="#" title="Google Plus" itemprop="url" target="_blank"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" title="Linkedin" itemprop="url" target="_blank"><i class="fa fa-linkedin"></i></a>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 col-lg-4">
                            <div class="tm-bx text-center">
                                <a href="team-detail.html" title="" itemprop="url"><img src={kwaminaImg} alt="tm1-6.jpg" itemprop="image" /></a>
                                <div class="tb-bx-inf">
                                    <h4 itemprop="headline"><a href="team-detail.html" title="" itemprop="url">Kwamina Mensah-Arthur</a></h4>
                                    <i>IT Hardware Technician</i>
                                    {/*<div class="scl-btns">
                                    <a href="#" title="Facebook" itemprop="url" target="_blank"><i class="fa fa-facebook"></i></a>
                                    <a href="#" title="Google Plus" itemprop="url" target="_blank"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" title="Linkedin" itemprop="url" target="_blank"><i class="fa fa-linkedin"></i></a>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default staff