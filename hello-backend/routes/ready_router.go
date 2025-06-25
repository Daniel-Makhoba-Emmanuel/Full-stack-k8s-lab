package routes

import (
	"full-stack-k8s-lab-hello-backend/handlers"

	"github.com/gin-gonic/gin"
)

func ReadyRoute(r *gin.Engine) {
	// Define the /ready endpoint
	r.GET("/ready", handlers.ReadyHandler)
}
