const CoctailCard = ({data})=> {


    return(
        <article className="card">
            <div className="photo">
                <img src={data?.strDrinkThumb
                 } alt="" />
            </div>
            <div className="info">
                <h2> {data.strDrink}</h2>
                <h4>Recipe</h4>
                <h3>{data?.strInstructions}</h3>
            </div>
        </article>
    )
}


export default CoctailCard