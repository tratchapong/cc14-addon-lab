/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios, { all } from "axios";
import ProductCard from "../components/ProductCard";

export default function Product() {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:8080/products").then((rs) => {
      setAllProduct(rs.data);
    }).finally( _=> setLoading(false))
  }, []);

  if(loading) 
    return <div className="text-2xl p-5 border text-center">Loading...</div>

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

          <p className="max-w-md mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {allProduct.slice(11,20).map((el) => (
            <ProductCard key={el.id} item={el} />
          ))}
        </ul>
      </div>
    </section>
  );
}
