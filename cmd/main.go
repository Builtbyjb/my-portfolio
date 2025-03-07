package main

import (
	"log"

	"github.com/builtbyjb/my-portfolio/middleware"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	// Use rate limiting middleware
	app.Use(middleware.RateLimiter())

	// Server static files
	app.Static("/static", "./static")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendFile("./templates/index.html")

	})

	log.Fatal(app.Listen(":3000"))
}
