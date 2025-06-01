package handlers

import "github.com/gin-gonic/gin"

func HealthHandler(c *gin.Context) {
	// Respond with a simple message indicating the service is healthy
	c.JSON(200, gin.H{
		"status": "healthy",
	})
}
