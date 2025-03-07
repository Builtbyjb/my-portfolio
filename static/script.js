// DOM Elements
const themeToggle = document.getElementById("theme-toggle");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");
const filterBtns = document.querySelectorAll(".filter-btn");
const projectsGrid = document.getElementById("projects-grid");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.getElementById("contact-form");

// Theme Toggle
themeToggle.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");
	themeToggle.textContent = document.body.classList.contains("dark-mode")
		? "☀️"
		: "🌙";
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
	navLinks.classList.toggle("active");
	mobileMenuBtn.textContent = navLinks.classList.contains("active")
		? "✕"
		: "☰";
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
	link.addEventListener("click", () => {
		navLinks.classList.remove("active");
		mobileMenuBtn.textContent = "☰";
	});
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		const targetId = this.getAttribute("href");
		const targetElement = document.querySelector(targetId);

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: "smooth",
			});
		}
	});
});

// Project Filtering
filterBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		// Remove active class from all buttons
		filterBtns.forEach((b) => b.classList.remove("active"));
		// Add active class to clicked button
		btn.classList.add("active");

		const filterValue = btn.getAttribute("data-filter");

		projectCards.forEach((card) => {
			if (
				filterValue === "all" ||
				card.getAttribute("data-category") === filterValue
			) {
				card.style.display = "block";
			} else {
				card.style.display = "none";
			}
		});
	});
});

// Form Submission
contactForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// Get form values
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const subject = document.getElementById("subject").value;
	const message = document.getElementById("message").value;

	// In a real application, you would send this data to a server
	console.log("Form submitted:", {
		name,
		email,
		subject,
		message,
	});

	// Show success message
	alert("Thank you for your message! I will get back to you soon.");

	// Reset form
	contactForm.reset();
});

// Active navigation link based on scroll position
window.addEventListener("scroll", () => {
	const scrollPosition = window.scrollY;

	// Get all sections
	const sections = document.querySelectorAll("section");

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - 100;
		const sectionHeight = section.offsetHeight;
		const sectionId = section.getAttribute("id");

		if (
			scrollPosition >= sectionTop &&
			scrollPosition < sectionTop + sectionHeight
		) {
			document.querySelectorAll(".nav-links a").forEach((link) => {
				link.classList.remove("active");
				if (link.getAttribute("href") === `#${sectionId}`) {
					link.classList.add("active");
				}
			});
		}
	});
});

// Animate elements on scroll
function animateOnScroll() {
	const elements = document.querySelectorAll(
		".about-content, .about-image, .project-card, .contact-info, .contact-form"
	);

	elements.forEach((element) => {
		const elementPosition = element.getBoundingClientRect().top;
		const screenPosition = window.innerHeight / 1.3;

		if (elementPosition < screenPosition) {
			element.style.opacity = "1";
			element.style.transform = "translateY(0)";
		}
	});
}

// Set initial styles for animation
document
	.querySelectorAll(
		".about-content, .about-image, .project-card, .contact-info, .contact-form"
	)
	.forEach((element) => {
		element.style.opacity = "0";
		element.style.transform = "translateY(20px)";
		element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
	});

// Call animation function on load and scroll
window.addEventListener("load", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);
