import { Boxprincipal } from "./styles"

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <Boxprincipal className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </Boxprincipal>
  );
}

export default CardVideo;
