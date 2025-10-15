import './index.css'

import Frei from '../../assets/images/Frei.png'

export default function index({ Assunto, Link }) {
    return (
        <div className='Header'>
            <div className="LadoEsquerdo">
                <img src={Frei} alt="" />
                <h1>{Assunto}</h1>
            </div>
            <div className="LadoDireito">
                <h3>{Link}</h3>
            </div>
        </div>
    )
}
