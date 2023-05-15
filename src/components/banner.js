import React, { useEffect, useState} from 'react'
import bgImg from '../assets/images/bgImg2.png'

function Banner() { /**Accept the headline from page title and fill that option */
    //console.log(window.location.pathname)
    //const [ title , setTitle ] = useState("")
    useEffect(() => {
        console.log(window.location.pathname)
    })
    return (
        <section>
            <div class="blk-lyr opc2">
                <div class=""
                    style={{
                        backgroundImage: `url(${bgImg})`,
                        height: "90vh",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}>  <div class="container">
                        <div class="pg-tp text-center">
                            <h1 itemprop="headline">Application</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner