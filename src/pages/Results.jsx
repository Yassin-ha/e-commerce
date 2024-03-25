import { useLocation } from "react-router-dom"
import Card from "../components/Card"


const Results = () => {
  const location = useLocation()
  const data = location.state.data;
  console.log(data);
  return (
    <section className="container mt-5">
      <h1 className="font-semibold pb-4">Results: </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map(product => {
          return <Card key={product.id} product={product} />
        })}
      </div>
      
    </section>
  )
}

export default Results
