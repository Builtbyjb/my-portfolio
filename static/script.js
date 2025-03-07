// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("hidden");
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
	link.addEventListener("click", () => {
		mobileMenu.classList.add("hidden");
	});
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

// Check for saved theme preference or use the system preference
if (
	localStorage.getItem("theme") === "dark" ||
	(!localStorage.getItem("theme") &&
		window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
	document.documentElement.classList.add("dark");
} else {
	document.documentElement.classList.remove("dark");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
	document.documentElement.classList.toggle("dark");

	// Save preference to localStorage
	if (document.documentElement.classList.contains("dark")) {
		localStorage.setItem("theme", "dark");
	} else {
		localStorage.setItem("theme", "light");
	}
});

// Project Filtering
const filterButtons = document.querySelectorAll(".project-filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		// Remove active class from all buttons
		filterButtons.forEach((btn) =>
			btn.classList.remove(
				"active",
				"bg-primary-50",
				"text-primary-600",
				"dark:bg-gray-700",
				"dark:text-primary-400"
			)
		);

		// Add active class to clicked button
		button.classList.add(
			"active",
			"bg-primary-50",
			"text-primary-600",
			"dark:bg-gray-700",
			"dark:text-primary-400"
		);

		const filter = button.getAttribute("data-filter");

		projectCards.forEach((card) => {
			if (
				filter === "all" ||
				card.getAttribute("data-category") === filter
			) {
				card.style.display = "block";
			} else {
				card.style.display = "none";
			}
		});
	});
});

// Contact Form Handling
const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// In a real application, you would send the form data to a server here
	// For this example, we'll just show the success message
	formSuccess.classList.remove("hidden");
	contactForm.reset();

	// Hide success message after 5 seconds
	setTimeout(() => {
		formSuccess.classList.add("hidden");
	}, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const targetId = this.getAttribute("href");
		const targetElement = document.querySelector(targetId);

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 80, // Offset for fixed header
				behavior: "smooth",
			});
		}
	});
});
