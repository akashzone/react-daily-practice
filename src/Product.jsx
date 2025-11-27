import "./Product.css";

export default function Product({title, description, price}) {
    return (
        <>
        <div className="container">
                <h2 className="product-name">{title}</h2>
                <p>{description}.</p>
                <span>Price: ${price}</span>
        </div>
        </>
    );
}