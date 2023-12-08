import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='layout'>
      <Header titulo="Adopta un perrito"></Header>
      <main className='layout__main'>
        <div className='main__cards'>
          <MyCard img="https://lirp.cdn-website.com/4fe36726/dms3rep/multi/opt/amor+3+blanco-84bc77d4-1920w.jpg"
            name="Amor"
            descr="Soy un perrito con 2 años de vida. Ya estoy vacunado, castrado y tengo chip.
          Yo era el machito más débil de mis hrnitos, pero ahora soy un peludito precioso que siempre ha convivido con perros de todas las edades.
          Ahora sólo quedamos Cariño y yo porque afortunadamente mis hrnitas se fueron adoptadas juntas
          No me gusta estar solo porque me pongo a llorar y me desespero.
          Aunque siempre comparto con perros y gatos me encantaría tener a mis propios humanos siempre conmigo que me saquen a pasear y me acaricien toooodo el día..jijiji"
          color="danger"
          texto="Amor"
          > </MyCard>
          <MyCard img="https://lirp.cdn-website.com/4fe36726/dms3rep/multi/opt/cari%C3%B1o+3+blanco-6d08b58a-1920w.jpg"
          name="Cariño"
          descr="Soy un perrito de 2 años de vida. Ya tengo chip, estoy vacunado y castrado.
          Yo soy el más grande y alto de la camada. Parece que fui el primero en salir de la guatita de mi mamá así que mi cuerpo estaba casi sin sarna con respecto al resto mi familia cuando nos rescataron
          Hoy comparto con muchos perritos junto a mi hrno Amor.
          La gente se asusta al verme porque al ser loquito siempre salto encima, pero es sólo para recibir amor.
          Mi familia ideal es una 'outdoor', que le guste salir a pasear, trotar o hacer deporte porque yo necesito gastar mi energía
          Mi raza es rottweiller chilensis..jijijiji"
          color="success"
          texto="Cariño"></MyCard>
          <MyCard img="https://lirp.cdn-website.com/4fe36726/dms3rep/multi/opt/pilla+2+blanco-1920w.jpg"
          name="Pilla"
          descr="Soy una cachorrita con un poco menos de 1 año de vida. Ya estoy vacunada, esterilizada y con chip.
          Me rescataron de la carretera de Melipilla casi a punto de atropellarme. La tía dice que estaba en shock, no reaccionaba.
          Ahora ya olvidé mi experiencia traumática, pero no tengo dónde quedarme. Necesito un hogar temporal que me cuide o un hogar definitivo que pueda quererme para siempre.
          Me gusta jugar y me llevo muy bien con perritos.
          Me encantan los cariños y estar con niñ@s"
          color="dark"
          texto="Pilla"></MyCard>
          <MyCard img="https://lirp.cdn-website.com/4fe36726/dms3rep/multi/opt/blue+blanco-1920w.jpg"
          name="Blue"
          descr="Soy una lola de aprox 1 año de vida. Ya estoy vacunada, esterilizada y con chip.Me conocieron de casualidad cuando visitaron un campamento en Cerronavia donde yo estaba con mis 8 bebitos recién nacidos. Creo que era mi primera vez como mamá así que no sabía mucho cuidarlos y justo en el mismo espacio había otra camada abandonada. Las tías me rescataron, pero me llevaron con los otros bebitos así que estuve a cargo de 16 hijitos y colapsé.
         Hoy ya estoy más tranquila, subí de peso y convivo con más perros sin problema. Me gusta jugar a la pelota y tomar sol."
          color="primary"
          texto="Blue"></MyCard>
        </div>
      </main>
      <footer className='layout__footer'>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
