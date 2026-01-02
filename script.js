// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Year in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            // Close mobile menu if open
            if (menu && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Fade In Animation on Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    // 5. Real Contact Form Handler (Formspree + AJAX)
    const contactForm = document.getElementById('contactForm');
    const statusMsg = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            const data = new FormData(this);

            // UI Loading State
            btn.innerText = 'Sending...';
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            btn.disabled = true;

            try {
                // Send data to Formspree
                const response = await fetch(this.action, {
                    method: this.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success
                    statusMsg.textContent = "Thanks for your message! I'll get back to you soon.";
                    statusMsg.className = "mt-4 text-center text-sm text-green-400 block";
                    this.reset(); // Clear the inputs
                } else {
                    // Error from server
                    const result = await response.json();
                    statusMsg.textContent = result.errors ? result.errors.map(error => error.message).join(', ') : "Oops! There was a problem sending your form.";
                    statusMsg.className = "mt-4 text-center text-sm text-red-400 block";
                }
            } catch (error) {
                // Network Error
                statusMsg.textContent = "Oops! There was a problem sending your form.";
                statusMsg.className = "mt-4 text-center text-sm text-red-400 block";
            } finally {
                // Reset Button State
                btn.innerText = originalText;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');
                btn.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    statusMsg.classList.add('hidden');
                }, 5000);
            }
        });
    }
});