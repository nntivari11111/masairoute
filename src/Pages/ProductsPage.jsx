import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function ProductsPage() {
  const [data, setData] = useState([]);
  const params = useParams();

  console.log(params+"as");

  useEffect(() => {
    axios({
      url: `http://localhost:8080/products/${params.id}`,
      method: "GET"
    })
      .then((res) => {
        setData(res.data);
      })
  }, [params.id]);
console.log(data)
  return (
    <div>
      <div key={data.id}>
       
        <div>ID: {data.id}</div>
        <div>Name: {data.name}</div>
        <div>Price: {data.price}</div>
      </div>
    </div>
  );
}

export default ProductsPage;
