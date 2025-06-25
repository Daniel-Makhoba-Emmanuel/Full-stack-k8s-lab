package routes

import (
	"full-stack-k8s-lab-hello-backend/handlers"

	"github.com/gin-gonic/gin"
)

func HealthRoute(r *gin.Engine) {
	r.GET("/health", handlers.HealthHandler)
}
