import { useState } from 'react';

const ContactSection = () => {
  const [dados, setDados] = useState({ nome: '', email: '', pedido: '' });

  const enviar = (e) => {
    e.preventDefault();
    alert(`Pedido de ${dados.nome} enviado com sucesso!`);
    console.log("Dados:", dados);
  };

  return (
    <section id="section4">
      <form id="div1_section4" onSubmit={enviar}>
        <label>Entre com o seu nome:</label>
        <input type="text" value={dados.nome} onChange={e => setDados({...dados, nome: e.target.value})} />
        
        <label>Entre com o seu email:</label>
        <input type="email" value={dados.email} onChange={e => setDados({...dados, email: e.target.value})} />

        <input id="pedido" type="text" placeholder="faça seu pedido por aqui" 
               value={dados.pedido} onChange={e => setDados({...dados, pedido: e.target.value})} />
        <button type="submit">Enviar</button>
      </form>

      <div id="div2_section4">
        <p>Acesse também nossas redes sociais</p>
        <div className="container_img">
          <img src="/images/whats.png" alt="WhatsApp" />
          <img src="/images/face.png" alt="Facebook" />
          <img src="/images/insta.png" alt="Instagram" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;