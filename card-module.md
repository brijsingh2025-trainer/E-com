
# What We Will Build

```text
Product List
      ↓
Product Details
      ↓
Add To Cart
      ↓
Cart Page
```

Cart Features:

✅ Add Product
✅ Remove Product
✅ Increase Quantity
✅ Decrease Quantity
✅ Clear Cart
✅ Calculate Total Price
✅ Display Cart Count in Navbar

---

# Step 1: Create Cart Slice

Folder Structure:

```text
src
│
├── features
│   ├── products
│   │
│   └── cart
│       └── cartSlice.jsx
```

---

# Step 2: Create cartSlice.jsx

```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {

    addToCart: (state, action) => {

      const existingItem =
        state.cartItems.find(
          item => item.id === action.payload.id
        );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {

        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });

      }
    },

    removeFromCart: (state, action) => {

      state.cartItems =
        state.cartItems.filter(
          item => item.id !== action.payload
        );

    },

  },
});

export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
```

---

# Step 3: Register Cart Reducer

### app/store.jsx

```jsx
import { configureStore } from "@reduxjs/toolkit";

import productReducer
from "../features/products/productSlice";

import cartReducer
from "../features/cart/cartSlice";

export const store =
  configureStore({
    reducer: {
      products: productReducer,
      cart: cartReducer,
    },
  });
```

---

# Redux State Structure

After adding cart:

```javascript
{
  products: {
    products: [],
    selectedProduct: null
  },

  cart: {
    cartItems: []
  }
}
```

---

# Step 4: Add Button in Product Details

### ProductDetails.jsx

Import:

```jsx
import { addToCart }
from "../features/cart/cartSlice";
```

---

Create dispatch:

```jsx
const dispatch = useDispatch();
```

---

Add button:

```jsx
<button
  className="btn btn-success"

  onClick={() =>
    dispatch(
      addToCart(selectedProduct)
    )
  }
>
  Add To Cart
</button>
```

---

# What Happens?

User clicks:

```text
Add To Cart
```

Dispatch:

```jsx
dispatch(
  addToCart(product)
);
```

Reducer:

```jsx
cartItems.push(product);
```

Redux Store:

```javascript
{
  cart: {
    cartItems: [
      {
        id: 1,
        title: "Laptop",
        quantity: 1
      }
    ]
  }
}
```

---

# Step 5: Create Cart Page

```text
src
│
├── pages
│   └── Cart.jsx
```

---

### pages/Cart.jsx

```jsx
import { useSelector } from "react-redux";

const Cart = () => {

  const cartItems =
    useSelector(
      state => state.cart.cartItems
    );

  return (
    <div className="container mt-5">

      <h2>Shopping Cart</h2>

      {
        cartItems.map(item => (

          <div
            key={item.id}
            className="card mb-3"
          >

            <div className="card-body">

              <h5>
                {item.title}
              </h5>

              <h6>
                Qty:
                {item.quantity}
              </h6>

              <h6>
                Price:
                ${item.price}
              </h6>

            </div>

          </div>

        ))
      }

    </div>
  );
};

export default Cart;
```

---

# Step 6: Add Route

### App.jsx

```jsx
<Route
  path="/cart"
  element={<Cart />}
/>
```

---

# Step 7: Display Cart Count

### Navbar.jsx

```jsx
import { useSelector }
from "react-redux";

const Navbar = () => {

  const cartItems =
    useSelector(
      state => state.cart.cartItems
    );

  return (
    <nav
      className="navbar navbar-dark bg-dark"
    >

      <div className="container">

        <Link
          to="/"
          className="navbar-brand"
        >
          My Store
        </Link>

        <Link
          to="/cart"
          className="btn btn-warning"
        >
          Cart (
          {cartItems.length}
          )
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;
```

---

# Step 8: Add Quantity Controls

Inside `cartSlice.jsx`

```jsx
increaseQuantity:
(state, action) => {

  const item =
    state.cartItems.find(
      item => item.id === action.payload
    );

  if (item) {
    item.quantity += 1;
  }
},

decreaseQuantity:
(state, action) => {

  const item =
    state.cartItems.find(
      item => item.id === action.payload
    );

  if (
    item &&
    item.quantity > 1
  ) {
    item.quantity -= 1;
  }
},
```

Export:

```jsx
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
```

---

# Step 9: Calculate Cart Total

Inside Cart Page:

```jsx
const totalPrice =
  cartItems.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );
```

Display:

```jsx
<h3>
  Total:
  ${totalPrice.toFixed(2)}
</h3>
```

---

# Redux Toolkit Concepts Learned

### Product Module

```text
fetchProducts
fetchProductById
```

### Cart Module

```text
addToCart
removeFromCart
increaseQuantity
decreaseQuantity
```

### Hooks

```text
useDispatch()
useSelector()
```

### Redux Concepts

```text
Store
Slice
Action
Reducer
State
Payload
```

---
