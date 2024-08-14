import './index.css';

const PRODUCTS_ENDPOINT = 'https://random-data-api.com/api/commerce/random_commerce?size=10';

function StoreContainer() {
  return (
    <div className="store-container">
      <div className="item-outer-container">
        <p className="items-container-title">Filter (0)</p>
        <div className="item-inner-container">
          <p>Filter by name</p>
          <input type="text" />
          <p style={{ marginTop: '15px' }}>Show each product here that matches the search term</p>
        </div>
      </div>

      <div className="item-outer-container">
        <p className="items-container-title">Products (0)</p>
        <div className="item-inner-container">Show all products from the API ({PRODUCTS_ENDPOINT})</div>
      </div>

      <div className="item-outer-container">
        <p className="items-container-title">Cart (0)</p>
        <div className="item-inner-container">
          Show all products added to the cart. Include the quantity for each item and provide a means to change the
          quantity count as well as delete the item from the cart.
        </div>
      </div>
    </div>
  );
}

export default StoreContainer;
