import './styles/Memory.css'
import { useState, useEffect } from 'react'
import ArrayRandom from '../../functions/Memory'
import { Button, Modal } from 'react-bootstrap'

const Memory = ()=>{


    const values =[
        {id: 1, image: './FrontCard.webp', hero: './Ant-man.webp'},
        {id: 2, image: './FrontCard.webp', hero: './BlackPanter.webp'},
        {id: 3, image: './FrontCard.webp', hero: './BlackWidow.webp'},
        {id: 4, image: './FrontCard.webp', hero: './DoctorStrange.webp'},
        {id: 5, image: './FrontCard.webp', hero: './Spiderman.webp'}
    ]

    const [CreateRandomArray, setCreateRandomArray] = useState([]);
    const [board, setBoard] = useState([])
    const [see, setSee] = useState(0)
    const [antBoard, setAntBoard] = useState(board)
    const [ant, setAnt] = useState(0)
    const [indexAnt, setIndexAnt] = useState(-1)
    const [working, setWorking] = useState(true)
    const [endgame, setEndgame] = useState(true)
    const [newGame, setNewGame] = useState(1)
    const [time, setTime] = useState(30)
    const [lost, setLost] = useState(false)
    const [show, setShow] = useState(false);
    const [start, setSart] = useState(false)
    const [isplaying, setIsplayin] = useState(false)

    const handleClose = () => setShow(false);

    
    useEffect(() => {
        if(newGame == 2){
            setNewGame(1)
            setEndgame(false)
        } 
        const randomArray = ArrayRandom(values);
        setBoard(randomArray.map(value => value.image));
        setCreateRandomArray(randomArray); // Set the CreateRandomArray state
    }, [newGame]);

    useEffect(() => {
        if (newGame === 2) {
            setTime(30); // Reiniciar el contador de tiempo
        }
        
    
        if(!endgame){
            if(time == 1 || time > 1){
                const interval = setInterval(() => {
                    setTime(prevTime => prevTime - 1)
                }, 1000)
            
                return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
            }else{
                setIsplayin(false)
                if(!show){
                    setShow(true)
                    setLost(true)
                    setEndgame(true)
                    setSart(false)
                }
                
            }
        }
    }, [newGame, time]);

    const Time = ()=>{
        return <p>Tiempo 0:{time < 10 ? 0: ''}{time}</p>
    }
    
    const StartGame = ()=>{
        setSart(true)
        setNewGame(2)
        setIsplayin(true)
 
    }
    
    const Targets = ({children, index, ...props})=>{

        const click = (index)=>{
            if(isplaying){
                if(index != indexAnt){
                    if(see == 1){
                        if(ant == CreateRandomArray[index].id){
                         
                            const NewBoard = [...board]
                            NewBoard[index] = CreateRandomArray[index].hero
                            setBoard(NewBoard)
                            setAntBoard(NewBoard)
                            setAnt(0)
                            setSee(0)
                            const Missing = [...NewBoard].filter(x => x == '/FrontCard.webp')
                            console.log('faltan' + Missing.length)
                            if(Missing.length == 0){
                                setEndgame(true)
                                setShow(true)
                                setSart(false)
                            }
                            
                        }else{
                            if (working){
                                const NewBoard = [...board]
                                NewBoard[index] = CreateRandomArray[index].hero
                                setBoard(NewBoard)
                                setWorking(false)
                                
                            }
                            setTimeout(()=>{
                                setBoard(antBoard)
                                setSee(0)
                                setIndexAnt(-1)
                                setWorking(true)
                            }, 400)
                        }
        
                    }else{
                        setSee(see + 1)
                        const NewBoard = [...board]
                        setAntBoard([...board])
                        NewBoard[index] = CreateRandomArray[index].hero
                        setBoard(NewBoard)
                        setAnt(CreateRandomArray[index].id)
                        console.log(see)
                        setIndexAnt(index)
                    }
                }else{
                    console.log('es el mismo index')
                }
            }else{
                console.log("Tiempo fuera")
            }
            
        }

        
        return <div {...props} onClick={()=>click(index)}>{children}</div>
    }

    return (
        <>
        <section className='MemoryTarjects'>
        <section className=" d-flex justify-content-center">
            
            <article className="Game">
                {board.map((value, index)=>{
                    return <Targets index={index} key={index}><img className='Backimage' src={value} alt="" /></Targets>
                })}
           </article>
        </section>
        <div className={`d-flex justify-content-center` }>
            {!isplaying && !endgame ? <span><button className="ButtonGameCardNew" onClick={()=>setNewGame(2)}>Jugar de Nuevo</button></span>: ''}
            {start ? '' 
            : <span><button className="ButtonGameCardNew" onClick={()=>StartGame()}>Empezar</button></span>}
            
            {endgame ? "" : <span className='GameMemoryTime'>{<Time />}</span>}
        </div>
        <div>

            <Modal className='Modal' show={show} onHide={handleClose}>
                <Modal.Header className='Modal_win_header' closeButton>
                    <Modal.Title clasName='letter_Montserrat'>{lost ? 'Perdiste':'Ganaste'}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='Modal_win_body' >
                   <h1 className='letter_Marvel'>{lost ? 'Intentalo de Nuevo':'Felicidades!!!'}</h1>
                </Modal.Body >
                <Modal.Footer className='Modal_win_footer' >
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

        </section>
        
        </>
        
    )
}

export default Memory
