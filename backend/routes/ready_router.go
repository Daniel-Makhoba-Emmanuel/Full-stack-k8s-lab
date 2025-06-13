package routes

import (
	"full-stack-k8s-Lab/handlers"

	"github.com/gin-gonic/gin"
)

func ReadyRoute(r *gin.Engine) {
	// Define the /ready endpoint
	r.GET("/ready", handlers.ReadyHandler)
	// This endpoint will respond with a simple message indicating the service is ready
}
