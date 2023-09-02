document.addEventListener('DOMContentLoaded', function () {
    const menuList = document.getElementById('menu-list');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Sample menu data
    const menuData = [
        { name: 'Pizza'  , price:   1200.00 },
        { name: 'Burger' , price:   350.00  },
        { name: 'Salad'  , price:   100.00  },
        { name: 'Roll'   , price:   120.00  },
        { name: 'Tikka'  , price:   280.00  },
        { name: 'Biryani', price:   200.00  },
        { name: 'Karahi' , price:   800.00  },
        { name: 'Handi'  , price:   700.00  },
        { name: 'Pulao'  , price:   150.00  },
        { name: 'Daal'   , price:   120.00  },
    ];

    // Initialize menu
    menuData.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} -  PKR ${item.price} `;
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.addEventListener('click', () => addToCart(item));
        li.appendChild(addButton);
        menuList.appendChild(li);
    });

    const cart = [];
    let total = 0;

    // Add item to cart
    function addToCart(item) {
        cart.push(item);
        updateCart();
    }

    // Update the cart and total price
    function updateCart() {
        cartItems.innerHTML = '';
        total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - PKR${item.price}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = total.toFixed(2);
    }

    // Checkout button click handler
    checkoutBtn.addEventListener('click', () => {
        alert(`Total: PKR ${total.toFixed(2)}\nThank you for your order!`);
        cart.length = 0; // Clear the cart
        updateCart();
    });
});
/*Calculator*/
let calculatorDisplay = document.getElementById('calculator-display');
let calculatorInput = '';

function addToCalculator(value) {
    calculatorInput += value;
    calculatorDisplay.value = calculatorInput;
}

function clearCalculator() {
    calculatorInput = '';
    calculatorDisplay.value = '';
}

function calculateResult() {
    try {
        calculatorInput = eval(calculatorInput).toString();
        calculatorDisplay.value = calculatorInput;
    } catch (error) {
        calculatorInput = '';
        calculatorDisplay.value = 'Error';
    }
}
