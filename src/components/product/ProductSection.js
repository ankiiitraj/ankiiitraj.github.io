import Product from "./Product";
import { products } from "./productsDesc";

const ProductSection = () => {
  return (
    <>
      <div
        id="products"
        style={{
          textAlign: "center",
          color: "white",
          padding: "10px",
          fontSize: "xx-large",
        }}
      >
        Open Sourced Products and Projects
      </div>
      <hr
        style={{
          width: "50%",
        }}
      ></hr>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "1200px",
          }}
        >
          <Product prod={products[0]} />
          <Product prod={products[1]} />
          <Product prod={products[2]} />
          <Product prod={products[3]} />
          <Product prod={products[4]} />
        </div>
      </div>
    </>
  );
};

export default ProductSection;
