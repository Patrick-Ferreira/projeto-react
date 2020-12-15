import React from 'react';
import './Contatos.css';
import email from '../imagens/email.jpg';
import Whatsapp_1 from '../imagens/Whatsapp_1.png';
export default function Contatos() {
    return (
       
            <div>
                    <header>
                        <h2> Fale Conosco </h2>
                        <hr/>
                    </header>

                        <section class="completo-contatos">

                            <div className="contatos">

                                <img width='42px' src={email} alt="email" className="img"></img>
                                <p>contato@fullstackeletro.com</p>  

                            </div>
                            
                            <div className="contatos">

                                <img width='50px'src={Whatsapp_1} className="img"></img>
                                <p>(11) 99999-9999 </p>   

                            </div>
                            

                   </section>         
       </div>
       

     


    );
}

 