interface TestCard{
    name:string,
    price:number,
    isSpecial?:boolean
}

const Card = ({name , price , isSpecial}:TestCard) => {
  return (
    <div>

        <h1>Card</h1>
        <hr />
        <h2>{name}</h2>
        <h2>{price}</h2>
        <h2>{isSpecial && <p>🌟</p>}</h2>
    </div>
  )
}

export default Card