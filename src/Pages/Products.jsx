import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Products() {
  // effects
  // lifecycle ->
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  
  useEffect(() => {
    setSearchParams({
      page
    });
    axios({
      url: "http://localhost:8080/products",
      method: "GET",
      params: {
        page
      }
    })
      .then((res) => {
      
        setData(res.data);
      })
      .catch((err) => {});
  }, [page]);
  // empty dependency
  // it means it depends on nothing
  // it will only get called, after the component
  // mounts

  return (
    <div>
      <div>
        <button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </button>
        <button disabled={page === 2} onClick={() => setPage(2)}>
          2
        </button>
      </div>
      {data.map((item) => (
        <div key={item.id}>
          <div>ID: {item.id}</div>
          <div>Name: {item.name}</div>
          <div>Price: {item.price}</div>
          <Link to={`/Products/${item.id}`}>See More</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
