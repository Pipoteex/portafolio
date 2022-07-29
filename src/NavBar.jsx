import React from 'react'
import "./estilo.scss"
export const NavBar = () => {



    return (
        <div className='navBar'>
            <div className='icono'>PEPO</div>
            <div className='botones'>
                <div className="but"> Inicio </div>
                <div className="but"> Menu </div>
                <div className="but"> Sobre Nosotros </div>
            </div>
            <div className="final_icono"> ICONO </div>
        </div>
    )
}
