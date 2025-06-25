package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func HelloHandler(c *gin.Context) {

	//Fetch/Generate Data
	data := gin.H{
		"message": "Hello Api is working!",
	}
	// Return the data as JSON
	// c.JSON(http.StatusOK, gin.H{"message": "Hello, World!"})
	c.JSON(http.StatusOK, data)

}
