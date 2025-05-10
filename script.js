// OLADIMEJI ADVISORY AND CONSULT - Main JavaScript

// Responsive Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Close navbar on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

// Smooth scroll for anchor links (optional, for browsers that don't support it natively)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form Submission (Real Email Sending)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        // Send the email using a real backend service
        fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Thank you for contacting us, ' + name + '! Your message has been sent to olaseduconsult@gmail.com. We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('There was an error sending your message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        });
    });
} 