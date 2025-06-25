package routes

import (
	"full-stack-k8s-lab-hello-backend/handlers"

	"github.com/gin-gonic/gin"
)

func HelloRoute(r *gin.Engine) {
	r.GET("/hello", handlers.HelloHandler)
}
