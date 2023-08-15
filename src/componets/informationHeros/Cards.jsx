const Card =({Cardkey, name, information, img, comics})=>{

    return(
        <div className="card" style={{width: '18rem', margin: '10px'}} key={Cardkey}>
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{information}</p>
            <a href={comics} className="btn btn-primary">Ver Comics</a>
          </div>
        </div>
    )
}

export default Card


