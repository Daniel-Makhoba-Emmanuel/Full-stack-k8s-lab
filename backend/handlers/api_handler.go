package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func ApiHandler(c *gin.Context) {

	//Fetch/Generate Data
	data := gin.H{
		"message": "Go Api is working!",
	}
	// Return the data as JSON
	// c.JSON(http.StatusOK, gin.H{"message": "Hello, World!"})
	c.JSON(http.StatusOK, data)

}
