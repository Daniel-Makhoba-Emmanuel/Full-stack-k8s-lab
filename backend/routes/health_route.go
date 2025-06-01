package routes

import (
	"full-stack-docker-prod/handlers"

	"github.com/gin-gonic/gin"
)

func HealthRoute(r *gin.Engine) {
	r.GET("/health", handlers.HealthHandler)
}
