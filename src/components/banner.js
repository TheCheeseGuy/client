import bgImg from '../assets/images/bgImg2.png'

function Banner() { /**Accept the headline from page title and fill that option */
    return (
        <section>
            <div class="gp blk-lyr opc2">
                <div class="fxd-bg" style={{backgroundImage: `url(${bgImg})`, height: "90vh", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
                <div class="container">
                    <div class="pg-tp text-center">
                        <h1 itemprop="headline">Applications</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner