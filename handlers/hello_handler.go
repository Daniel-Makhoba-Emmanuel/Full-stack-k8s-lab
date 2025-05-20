package handlers

import (
	"encoding/json"
	"fmt"
	databases "full-stack-docker-prod/Databases"
	"log"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
)

const cacheKey = "hello:message"  // Define a unique cache key
const cacheTTL = 10 * time.Minute // Define Time To Live

func HelloHandler(c *gin.Context) {
	// Use the request's context for Redis operations
	ctx := c.Request.Context()

	// --- Cache Lookup ---
	cachedMessage, err := databases.RedisClient.Get(ctx, cacheKey).Result()

	if err == redis.Nil {
		// Cache Miss: Data is not in the cache
		log.Println("Cache Miss for key:", cacheKey)

		//Fetch/Generate Data
		data := gin.H{
			"message": "Hello, World!",
		}

		// Marshal the data to a JSON string to store in Redis
		jsonData, marshalErr := json.Marshal(data)
		if marshalErr != nil {
			// Log the error but proceed without caching, returning non-cached data
			log.Printf("Error marshalling data for cache: %v\n", marshalErr)
			// Fallback: Serve non-cached data
			c.JSON(http.StatusOK, data)
			return // Exit handler
		}

		// --- Store in Cache ---
		setErr := databases.RedisClient.Set(ctx, cacheKey, jsonData, cacheTTL).Err()
		if setErr != nil {
			// Log the error, but don't fail the request
			// The data was already marshalled and is ready to be sent to the client
			log.Printf("Error setting cache key %s: %v\n", cacheKey, setErr)
			// Continue to serve the non-cached data below
		} else {
			log.Println("Successfully cached key:", cacheKey)
		}

		// --- Serve non-cached data ---
		// Note: We already marshalled the data to jsonData, we can unmarshal it back
		// or just use the original 'data' map. Let's use the original map for clarity here.
		c.JSON(http.StatusOK, data)

	} else if err != nil {
		// Other Redis Error (e.g., connection issue, auth error)
		fmt.Printf("Redis error getting key %s: %v\n", cacheKey, err)

		// --- Fallback to original logic (Serve non-cached data) ---
		// If Redis is down or has an error, your API should ideally still work
		// by hitting the original data source (in this case, just generating the message).
		// Proceed as if it was a cache miss, but without attempting to Set again if the Get failed.
		data := gin.H{
			"message": "Hello, World!",
		}
		c.JSON(http.StatusOK, data)

	} else {
		// Cache Hit: Data was found in the cache
		log.Println("Cache Hit for key:", cacheKey) // Optional: Log cache hit

		// The cached data is a JSON string. Serve it directly.
		c.Header("Content-Type", "application/json")
		// Write the cached string directly to the response writer
		c.String(http.StatusOK, cachedMessage)

		return
	}
}
