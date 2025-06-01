package handlers

import "github.com/gin-gonic/gin"

func ReadyHandler(c *gin.Context) {
	// Respond with a simple message indicating the service is ready
	c.JSON(200, gin.H{
		"status": "ready",
	})
}
