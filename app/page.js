import Image from "next/image";
import Menu from "./components/Menu";
import Produto from "./components/Produto";

export default function Home() {
  return (
    <div>

     <Menu/>


      <h1>Enviando para o github</h1>
      <p>atividade em andamento...</p>
      <p>Testando uma nova versao</p>

      <hr/>

      <h2>Produtos</h2>

     <div className="flex justify-around">


      <Produto nome="Cappucino com canela" preco="19,90"  estrela="⭐⭐⭐⭐" botao="comprar" />
      <Produto nome="Café expresso" preco="10,00"  estrela="⭐⭐⭐" botao="comprar" />
      <Produto nome="Chá matte" preco="15,50"  estrela="⭐⭐⭐⭐⭐" botao="comprar" />
      <Produto nome="Café gelado" preco="18,00"  estrela="⭐⭐⭐" botao="esgotado" />


     </div>

    


    

    </div>
  );
}
