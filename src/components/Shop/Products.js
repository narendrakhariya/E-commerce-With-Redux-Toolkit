import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: 2,
    price: 2,
    title: "My second Book",
    description: "The second book I ever wrote",
  },
  {
    id: 3,
    price: 4,
    title: "My Third Book",
    description: "The third book I ever wrote",
  },
  {
    id: 4,
    price: 5,
    title: "My forth Book",
    description: "The forth book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
