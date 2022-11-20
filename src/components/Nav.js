function Nav() {
    return (
        <section>
            <div className="mnu-br2">
                <div className="container">
                    <nav className="rd4">
                        <ul>
                            <li><a href="index.html"><div>Home</div></a></li>
                            <li class="menu-item-has-children"><a href="link.html"><div>Mega Menu</div></a>
                                <div class="mgamnu rd6">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6 col-lg-4">
                                            <div class="mega-lnks">
                                                Home
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6 col-lg-4">
                                            <div class="mega-lnks">
                                                Meet the Staff
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-sm-6 col-lg-4">
                                            <div class="mega-lnks">
                                                Pages
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Nav