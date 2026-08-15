import ProductCard from './ProductCard';

function ProductList({ watches}) {
    if (watches.length === 0) {
        return <p className="no-results">No watches Found</p>
    }
    return(
        <div className="product-grid">
             {watches.map(watch => (
                <ProductCard key={watch.id} watch={watch} />
            ))}
        </div>
    );
}

export default ProductList;