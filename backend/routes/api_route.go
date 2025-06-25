package routes

import (
	"full-stack-k8s-Lab/handlers"

	"github.com/gin-gonic/gin"
)

func ApiRoute(r *gin.Engine) {
	r.GET("/api", handlers.ApiHandler)
}

// This function sets up a simple "Hello, World!" route using the Gin framework.
