import icons from "./Icons"
import caracters from "../functions/caracters"
import { useEffect } from "react"


const Header = ()=>{
    const Marvel = icons[0]

    return (
        <>
        <header>
            <section className="d-flex justify-content-center" style={{backgroundColor: 'var(--secondary-color)'}}>
                <h1 style={{color: 'var(--primary-color)', marginBlockStart: '18px'}} className="text-center container-fuid letter_Marvel">Marvel Verse</h1>
                <Marvel fill='#ec1d24' width='80px'/>
                <span style={{color: 'white', fontSize: '1rem'}} className='letter_Montserrat' >By GIUC</span>
            </section>
        </header>
        </>
    )
}

export default Header