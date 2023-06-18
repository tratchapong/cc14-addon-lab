/* eslint-disable no-unused-vars */
import { useRef } from "react";
import Modal from "../components/Modal";
import ProductCard from "../components/ProductCard";

import { useGetProductsQuery, useAddProductMutation } from "../features/api/apiSlice";
import FormProduct from "../components/FormProduct";

export default function Product() {
  const ref = useRef();
  const { data: allProduct, isLoading, isError, error } = useGetProductsQuery();
  const [addProduct] = useAddProductMutation()

  const onSubmit = (input) => {
    let newProduct = {
      images: ['https://www.svgrepo.com/show/513701/food.svg'],
      creationAt: new Date(),
      updatedAt: new Date(),
      category: {
        id : 5,
        name: 'Others',
        images: 'https://www.svgrepo.com/show/513701/food.svg',
        creationAt: new Date(),
        updatedAt: new Date(),       
      },
      ...input
    }
    addProduct(newProduct)
    ref.current.click()
  }

  if (isLoading) return <div className="text-2xl p-5 border text-center">Loading...</div>;
  if (isError) return <div className="text-2xl p-5 border text-red-500">Error : {error} </div>;

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <label className="btn" htmlFor={"AddProduct"}>Add Product</label>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

          <p className="max-w-md mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
            dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>
        <Modal modal_name={"AddProduct"}>
          <label className="modal-action relative top-[-1.5rem]" htmlFor={"AddProduct"} ref={ref}>
            X
          </label>
          <FormProduct onSubmit={onSubmit} />
        </Modal>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {allProduct.map((el) => (
          // {allProduct.slice(21, 30).map((el) => (
            <ProductCard key={el.id} item={el} />
          ))}
        </ul>
      </div>
    </section>
  );
}
