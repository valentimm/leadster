import { StyleInfoBanner } from "./style";

export default function InfoBanner (){
  return (
    <StyleInfoBanner>
      <img src="comparativo-graph.png" alt="Comparativo de gráficos" />
      <div className="container"> 
        <h1>Pronto para triplicar sua <strong>Geração de Leads?</strong></h1>
        <p>Criação e ativação em <strong>4 minutos.</strong></p>
        <div className="informationCard">
          <div className="infos">
            <button>VER DEMONSTRAÇÃO</button>
            <img src="selo_RD.png" alt="Selo top 10" /> 
          </div>
          <div className="cardRating">
            <div className="paymentInfo">
              <img src="no-card-dark.png"/>
              <p><strong>Não</strong> é necessário Cartão de Crédito |</p>
            <div className="rating">
              <img src="rating.png" alt="Rating" />
              <p><strong>4.9</strong>/5 média de satisfação</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </StyleInfoBanner>
  )
}