document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .scale-up, .slide-up, .slide-right');
    animatedElements.forEach(el => observer.observe(el));

    // Navbar color toggle based on section
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector('.navbar');

    const sectionObserverOptions = {
        root: null,
        rootMargin: '-50px 0px -50px 0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('light-section')) {
                    navbar.classList.add('light-mode');
                } else {
                    navbar.classList.remove('light-mode');
                }
            }
        });
    }, sectionObserverOptions);

    sections.forEach(section => sectionObserver.observe(section));
    
    // Trigger animation on load for items in viewport
    setTimeout(() => {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});

// --- Shopping Cart Logic ---
class CartManager {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('corex_cart')) || [];
        this.initUI();
        this.updateUI();
    }

    initUI() {
        // Inject Cart Drawer HTML
        if (!document.getElementById('cartDrawer')) {
            const drawerHTML = `
                <div class="cart-overlay" id="cartOverlay" onclick="cart.toggle()"></div>
                <div class="cart-drawer" id="cartDrawer">
                    <div class="cart-header">
                        <h2>Your Cart</h2>
                        <button class="close-cart" onclick="cart.toggle()">&times;</button>
                    </div>
                    <div class="cart-items" id="cartItemsContainer">
                        <!-- Items will be injected here -->
                    </div>
                    <div class="cart-footer">
                        <div class="cart-total">
                            <span>Total</span>
                            <span id="cartTotalValue">0 ৳</span>
                        </div>
                        <a href="order.html?checkout=cart" class="btn-checkout">Checkout</a>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', drawerHTML);
        }

        // Add Cart button to navbar
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && !document.getElementById('navCartBtn')) {
            navLinks.insertAdjacentHTML('beforeend', `<li><a href="#" id="navCartBtn" onclick="event.preventDefault(); cart.toggle()">Cart (<span id="cartBadge">0</span>)</a></li>`);
        }
    }

    add(product, price, img, variant = '') {
        const cleanPrice = parseFloat(price.toString().replace(/[^0-9.]/g, ''));
        this.cart.push({ product, price: cleanPrice, img, variant });
        this.save();
        this.updateUI();
        this.toggle(true); // Open drawer
    }

    remove(index) {
        this.cart.splice(index, 1);
        this.save();
        this.updateUI();
    }

    save() {
        localStorage.setItem('corex_cart', JSON.stringify(this.cart));
    }

    toggle(forceOpen = false) {
        const drawer = document.getElementById('cartDrawer');
        const overlay = document.getElementById('cartOverlay');
        if (forceOpen || !drawer.classList.contains('open')) {
            drawer.classList.add('open');
            overlay.classList.add('show');
        } else {
            drawer.classList.remove('open');
            overlay.classList.remove('show');
        }
    }

    updateUI() {
        // Update badge
        const badge = document.getElementById('cartBadge');
        if (badge) badge.innerText = this.cart.length;

        // Render items
        const container = document.getElementById('cartItemsContainer');
        if (!container) return;
        
        container.innerHTML = '';
        let total = 0;

        if (this.cart.length === 0) {
            container.innerHTML = '<p style="color: #888; text-align: center; margin-top: 50px;">Your cart is empty.</p>';
        } else {
            this.cart.forEach((item, index) => {
                total += item.price;
                const imgClass = item.variant ? item.variant : '';
                container.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.img}" class="${imgClass}" alt="${item.product}">
                        <div class="cart-item-details">
                            <h4>${item.product}</h4>
                            <p>${item.price.toLocaleString()} ৳</p>
                            <button class="remove-item" onclick="cart.remove(${index})">Remove</button>
                        </div>
                    </div>
                `;
            });
        }

        // Update total
        const totalValue = document.getElementById('cartTotalValue');
        if (totalValue) totalValue.innerText = total.toLocaleString() + ' ৳';
    }
}

// Initialize globally so inline onclick handlers can access it
let cart;
document.addEventListener('DOMContentLoaded', () => {
    cart = new CartManager();
});

