package main

import (
	"bytes"
	"context"
	"log"

	"github.com/builtbyjb/my-portfolio/templates"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	// Server static files
	app.Static("/static", "./static")

	app.Get("/", func(c *fiber.Ctx) error {
		return renderComponent(c, templates.Index())

	})

	log.Fatal(app.Listen(":3000"))
}

func renderComponent(c *fiber.Ctx, component templ.Component) error {
	buffer := new(bytes.Buffer)
	err := component.Render(context.Background(), buffer)
	if err != nil {
		return err
	}
	c.Set("Content-Type", "text/html")
	return c.SendString(buffer.String())
}
