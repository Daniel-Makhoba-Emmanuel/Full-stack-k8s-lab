package databases

import (
	"context"
	"log"
	"os"
	"strconv"

	"github.com/redis/go-redis/v9"
)

var RedisClient *redis.Client

func ConnectRedis() {
	//context.Background used because it is not tied to specific user request
	ctx := context.Background()

	redisAddr := os.Getenv("REDIS_ADDR")
	redisPassword := os.Getenv("REDIS_PASSWORD")
	redisDBStr := os.Getenv("REDIS_DB")

	redisDB := 0

	if redisDBStr == "" {
	} else {
		var err error
		redisDB, err = strconv.Atoi(redisDBStr)
		if err != nil {
			log.Fatalf("Invalid REDIS_DB value: %s", redisDBStr)
		}
	}

	RedisClient = redis.NewClient(&redis.Options{
		Addr:     redisAddr,
		Password: redisPassword,
		DB:       redisDB,
	})

	_, err := RedisClient.Ping(ctx).Result()
	if err != nil {
		log.Fatalf("Failed to connect to Redis: %v", err)
	} else {
		log.Println("Successfully connected to Redis")
	}

}

func CloseRedisConnection() {
	if RedisClient != nil {
		err := RedisClient.Close()
		if err != nil {
			log.Fatalf("Failed to close Redis connection: %v", err)
		} else {
			log.Println("Redis connection closed")
		}
	}
}
