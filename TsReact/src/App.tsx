import CardList from "./components/CardList";
import Counter from './components/Counter';
import FormComponent from "./components/FormComponent";
import PropsComponents from "./components/PropsComponents";
import type { Chai } from "./types";

const App = () => {
  const menu: Chai[] = [
    { name: "rice", price: 3000 },
    { name: "banana", price: 30 },
    { name: "apple", price: 100, isSpecial: true },
  ]
  return (
    <div>
      App
      <PropsComponents children="Test children" title="Rupesh" footer={<footer>Hello footer</footer>} />
      <FormComponent />
      <Counter />
      <CardList items={menu} />
    </div>
  )
}

export default App
