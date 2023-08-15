import './styles/Carrousel.css'
import icons from '../Icons'


const Carrusel = ({img, name, description, Comincs, handleClickLeft, handleClickRight, position, end, max})=>{


    const LeftArrow = icons[2]
    const RightArrow = icons[3]
    

   return(
    <article >
      <div className="container">
        <div className="d-flex justify-content-center" style={{paddingBlockStart: '5px', paddingBlockEnd: '10px'}}>
          <div>
            <div className='d-flex justify-content-space-between align-items-center'>
                {position == 0
                ? ''
                : <span onClick={handleClickLeft}><LeftArrow fill='#9f0013' height='100px' width='100px' className='elemnt'/></span>}
                <div className="d-lg-flex  imgCarrousel" style={{width: 'auto'}} >
                    <img  className="card-img-top img-fluid d-block  animation" src={img} alt="hero" />
                    <div>
                        <span ><h3 className='lettre_information'>{name}</h3> <p className='descriptionText letter_Montserrat'>{description}</p></span>
                        <a href={Comincs}><button className='button_carrousel_comics letter_Marvel'>Comics</button></a>
                    </div>
                </div>
                {end == max
                    ? ''
                    : <span onClick={handleClickRight}><RightArrow fill='#9f0013' height='100px' width='100px' className='elemnt'/></span>} 
            </div>  
          </div>
        </div>
      </div>
    </article>

   )
}

//http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790.jpg

export default Carrusel