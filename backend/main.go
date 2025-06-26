package main

import (
	"fmt"
	databases "full-stack-k8s-Lab/Databases"
	"full-stack-k8s-Lab/routes"
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	databases.ConnectToPostgres() // Connect to the PostgreSQL database

	//create a new router
	router := gin.Default()

	routes.ApiRoute(router)
	routes.HealthRoute(router)
	routes.ReadyRoute(router)

	dbHost := os.Getenv("DB_HOST")
	apiPort := os.Getenv("API_PORT")
	randomEnvValue := os.Getenv("RANDOM_ENV_VALUE")

	log.Printf("DB Host: %s, API Port: %s, Randow Env Value: %s\n", dbHost, apiPort, randomEnvValue)

	port := os.Getenv("API_PORT")
	if port == "" {
		port = "8080" //  Default port if not specified
	}

	listenAddr := ":" + port

	fmt.Printf("Starting server on port %s", listenAddr) // Print the port number to the console
	// Start the server
	err := router.Run(listenAddr)
	if err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
