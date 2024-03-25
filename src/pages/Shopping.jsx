import { useState } from "react"
import Categories from "../components/Categories"
import ListProducts from "../components/ListProducts"


const Shopping = () => {
  const [category, setCategory] = useState(null)
  
  console.log(category);
  return (
    <section className="container grid sm:grid-cols-3 md:grid-cols-4 my-5 ">
      <Categories setCategory={setCategory}/>
      <ListProducts className="grid grid-cols-3" category={category}/>
    </section>
  )
}

export default Shopping
