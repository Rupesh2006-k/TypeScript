import type { Chai } from '../types';
import Card from './Card';

interface ChaiListingProps {
    items: Chai[]
}
const CardList = ({ items }: ChaiListingProps) => {
    return (
        <div>
            <h1>CardList</h1>
            <div>
                {
                    items.map((val,idx) => (
                        <Card key={idx} name={val.name} price={val.price} isSpecial={val.isSpecial} />
                    ))
                }

            </div>
        </div>
    )
}
export default CardList