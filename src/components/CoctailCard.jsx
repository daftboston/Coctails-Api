const CoctailCard = ({data})=> {


    return(
        <article className="card">
            <div className="photo">
                <img src={data.strDrinkThumb
                 } alt="" />
            </div>
            <div className="info">
                <h3>Name {data.strDrink}</h3>
                <h3>Recipe{data.strInstructions}</h3>
            </div>
        </article>
    )
}


export default CoctailCard