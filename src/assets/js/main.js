    // Gestion du menu mobile
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
    
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
        }
    
        // Gestion du menu déroulant de langue
        const langButton = document.getElementById('lang-button');
        const langDropdown = document.getElementById('lang-dropdown');
    
        if (langButton && langDropdown) {
            langButton.addEventListener('click', function() {
                langDropdown.classList.toggle('hidden');
            });
        
            // Fermer le dropdown quand on clique ailleurs
            document.addEventListener('click', function(event) {
                if (!langButton.contains(event.target) && !langDropdown.contains(event.target)) {
                    langDropdown.classList.add('hidden');
                }
            });
        }
    
        // Gestion du menu utilisateur
        const profileButton = document.getElementById('profile-button');
        const profileDropdown = document.getElementById('profile-dropdown');
        const closeProfile = document.getElementById('close-profile');
    
        if (profileButton && profileDropdown) {
            profileButton.addEventListener('click', function() {
                profileDropdown.classList.toggle('hidden');
            });
        
            if (closeProfile) {
                closeProfile.addEventListener('click', function() {
                    profileDropdown.classList.add('hidden');
                });
            }
        
            // Fermer le dropdown quand on clique ailleurs
            document.addEventListener('click', function(event) {
                if (!profileButton.contains(event.target) && !profileDropdown.contains(event.target)) {
                    profileDropdown.classList.add('hidden');
                }
            });
        }
    });


        // Détection du mode sombre système
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Basculer entre light/dark
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                document.getElementById('theme-toggle-icon').innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                `;
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
                document.getElementById('theme-toggle-icon').innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                `;
            }
        });

        // Sélecteur de taille
        document.querySelectorAll('.size-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                document.getElementById('selected-size').textContent = this.dataset.size;
            });
        });

        // Sélecteur de couleur
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                document.getElementById('selected-color').textContent = this.dataset.color;
            });
        });

        // Sélecteur de quantité
        document.getElementById('increment').addEventListener('click', function() {
            const input = document.getElementById('quantity');
            input.value = parseInt(input.value) + 1;
        });

        document.getElementById('decrement').addEventListener('click', function() {
            const input = document.getElementById('quantity');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        });

        // Galerie d'images
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', function() {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Accordéons
        document.querySelectorAll('.accordion-btn').forEach(button => {
            button.addEventListener('click', function() {
                const accordion = this.closest('.accordion');
                const content = accordion.querySelector('.accordion-content');
                const icon = this.querySelector('svg');

                accordion.classList.toggle('active');

                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.classList.add('rotate-180');
                } else {
                    content.classList.add('hidden');
                    icon.classList.remove('rotate-180');
                }
            });
        });









// Section Hero - Carousel
class HeroCarousel {
    constructor() {
        this.slides = [
            {
                image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                badge: "Nouvelle Collection",
                title: "Style minimaliste, impact maximal",
                description: "Découvrez notre nouvelle collection printemps-été, conçue pour ceux qui valorisent l'élégance intemporelle et la qualité durable."
            },
            {
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                badge: "Été 2025",
                title: "L'élégance réinventée",
                description: "Des pièces uniques qui redéfinissent le style contemporain avec des matériaux durables et un design audacieux."
            },
            {
                image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                badge: "Promotion Exclusive",
                title: "Jusqu'à -30% sur les nouveautés",
                description: "Profitez de notre offre spéciale de lancement avec des réductions exceptionnelles sur les dernières tendances."
            }
        ];

        this.currentSlide = 0;
        this.interval = null;
        this.autoPlayDelay = 5000;

        this.init();
    }

    init() {
        this.bindEvents();
        this.startAutoPlay();
    }

    bindEvents() {
        // Gestion des indicateurs
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.getAttribute('data-slide'));
                this.goToSlide(slideIndex);
                this.restartAutoPlay();
            });
        });

        // Pause au survol
        const heroSection = document.getElementById('hero');
        heroSection.addEventListener('mouseenter', () => this.stopAutoPlay());
        heroSection.addEventListener('mouseleave', () => this.startAutoPlay());

        // Navigation clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }

    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        this.updateSlide();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSlide();
    }

    previousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.updateSlide();
    }

    updateSlide() {
        const slide = this.slides[this.currentSlide];
        
        // Mettre à jour l'image
        const heroImage = document.getElementById('hero-image');
        heroImage.style.opacity = '0';
        
        setTimeout(() => {
            heroImage.src = slide.image;
            heroImage.alt = slide.title;
            heroImage.style.opacity = '0.7';
        }, 300);

        // Mettre à jour le contenu avec animation
        const contentElements = {
            badge: document.querySelector('.bg-accent'),
            title: document.querySelector('h1'),
            description: document.querySelector('.text-gray-600'),
            buttons: document.querySelectorAll('a')
        };

        // Animation de fondu
        Object.values(contentElements).forEach(el => {
            if (el) {
                if (el.length) {
                    // Si c'est une NodeList
                    el.forEach(item => item.style.opacity = '0');
                } else {
                    el.style.opacity = '0';
                }
            }
        });

        setTimeout(() => {
            // Mettre à jour le contenu
            if (contentElements.badge) contentElements.badge.textContent = slide.badge;
            if (contentElements.title) contentElements.title.textContent = slide.title;
            if (contentElements.description) contentElements.description.textContent = slide.description;

            // Réapparition en fondu
            Object.values(contentElements).forEach(el => {
                if (el) {
                    if (el.length) {
                        el.forEach(item => item.style.opacity = '1');
                    } else {
                        el.style.opacity = '1';
                    }
                }
            });
        }, 300);

        // Mettre à jour les indicateurs
        this.updateIndicators();
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentSlide) {
                indicator.classList.add('active', 'bg-opacity-100');
                indicator.classList.remove('bg-opacity-50');
            } else {
                indicator.classList.remove('active', 'bg-opacity-100');
                indicator.classList.add('bg-opacity-50');
            }
        });
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.interval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    restartAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// Initialisation du carousel hero
document.addEventListener('DOMContentLoaded', function() {
    new HeroCarousel();
});




























// Gestion du panier
class CartManager {
    constructor() {
        this.items = [
            { id: 1, name: 'Blazer minimaliste', price: 249, quantity: 1, image: 'blazer.jpg' },
            { id: 2, name: 'Chaussures plates', price: 175, quantity: 1, image: 'chaussures.jpg' },
            { id: 3, name: 'Sac à main', price: 320, quantity: 1, image: 'sac.jpg' }
        ];
        this.discount = 0;
        this.discountCode = null;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateCartSummary();
    }

    bindEvents() {
        // Boutons quantité
        document.querySelectorAll('.quantity-plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                this.updateQuantity(id, 1);
            });
        });

        document.querySelectorAll('.quantity-minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                this.updateQuantity(id, -1);
            });
        });

        // Suppression d'articles
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('button').getAttribute('data-id'));
                this.removeItem(id);
            });
        });

        // Code promo
        document.getElementById('coupon-toggle').addEventListener('click', () => {
            this.toggleCouponForm();
        });

        // Bouton de paiement
        document.getElementById('checkout-btn').addEventListener('click', () => {
            this.processCheckout();
        });
    }

    updateQuantity(id, change) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.quantity = Math.max(1, item.quantity + change);
            
            // Mettre à jour l'affichage
            const quantityElement = document.querySelector(`.quantity-value[data-id="${id}"]`);
            if (quantityElement) {
                quantityElement.textContent = item.quantity;
            }
            
            this.updateCartSummary();
        }
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        
        // Supprimer l'élément du DOM
        const itemElement = document.querySelector(`[data-id="${id}"]`).closest('.bg-white');
        if (itemElement) {
            itemElement.style.opacity = '0';
            setTimeout(() => {
                itemElement.remove();
                this.updateCartSummary();
                this.updateItemCount();
            }, 300);
        }
    }

    updateItemCount() {
        const itemCount = this.items.reduce((total, item) => total + item.quantity, 0);
        const countElement = document.querySelector('.text-gray-600');
        if (countElement) {
            countElement.textContent = `${itemCount} article${itemCount > 1 ? 's' : ''}`;
        }
    }

    toggleCouponForm() {
        const form = document.getElementById('coupon-form');
        const toggleBtn = document.getElementById('coupon-toggle');
        
        if (form.classList.contains('hidden')) {
            form.classList.remove('hidden');
            toggleBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Masquer le code promo
            `;
        } else {
            form.classList.add('hidden');
            toggleBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Ajouter un code promo
            `;
        }
    }

    applyCoupon(code) {
        // Codes promo disponibles
        const validCodes = {
            'VVS10': 0.1,    // 10% de réduction
            'VVS20': 0.2,    // 20% de réduction
            'VVS30': 0.3     // 30% de réduction
        };

        if (validCodes[code]) {
            this.discount = validCodes[code];
            this.discountCode = code;
            this.showNotification('Code promo appliqué avec succès !', 'success');
            this.updateCartSummary();
        } else {
            this.showNotification('Code promo invalide', 'error');
        }
    }

    updateCartSummary() {
        const subtotal = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        const discountAmount = subtotal * this.discount;
        const total = subtotal - discountAmount;

        // Mettre à jour les éléments DOM
        document.getElementById('subtotal').textContent = `€${subtotal}`;
        document.getElementById('discount').textContent = `-€${discountAmount.toFixed(0)}`;
        document.getElementById('total').textContent = `€${total.toFixed(0)}`;
        
        // Mettre à jour le bouton de paiement
        document.getElementById('checkout-btn').textContent = `Tout payer - €${total.toFixed(0)}`;
        
        // Mettre à jour le compteur d'articles
        this.updateItemCount();
    }

    processCheckout() {
        const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
        const total = this.items.reduce((total, item) => total + (item.price * item.quantity), 0) * (1 - this.discount);

        // Simulation de traitement de paiement
        this.showNotification('Traitement de votre commande...', 'info');
        
        setTimeout(() => {
            this.showNotification('Paiement réussi ! Redirection...', 'success');
            
            // Redirection vers la page de confirmation
            setTimeout(() => {
                // window.location.href = '/confirmation.html';
                console.log('Redirection vers la page de confirmation');
            }, 2000);
        }, 2000);
    }

    showNotification(message, type = 'info') {
        // Créer une notification toast
        const toast = document.createElement('div');
        toast.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            'bg-blue-500'
        }`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Animation d'entrée
        setTimeout(() => {
            toast.classList.remove('translate-x-full');
        }, 100);
        
        // Animation de sortie après 3 secondes
        setTimeout(() => {
            toast.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
}

// Initialisation du gestionnaire de panier
document.addEventListener('DOMContentLoaded', function() {
    const cartManager = new CartManager();
    
    // Gestion du formulaire de code promo
    const couponForm = document.getElementById('coupon-form');
    if (couponForm) {
        const applyBtn = couponForm.querySelector('button');
        const input = couponForm.querySelector('input');
        
        applyBtn.addEventListener('click', () => {
            if (input.value.trim()) {
                cartManager.applyCoupon(input.value.trim().toUpperCase());
                input.value = '';
            }
        });
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                applyBtn.click();
            }
        });
    }
});