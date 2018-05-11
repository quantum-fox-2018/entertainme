# entertainme
 Simple microservice using mongoose and redis.

## Benchmark Using **mongodb** database

| No | Without Redis | With Redis  | HTTP client tools  |
| ---|:-------------:|:-----------:|-------------------:|
| 1  |     180ms     |    24ms     |  Postman           |
| 2  |     105ms     |    38ms     |  Postman           |
| 3  |     60ms      |    2.96ms   |  Insomnia          |
| 4  |     30ms      |    3.38ms   |  Insomnia          |


## Benchmark Using **mlab** online database

| No | Without Redis | With Redis  |HTTP client tools  |
| ---|:-------------:| -----------:|------------------:|
| 1  |     653ms     |    24ms     |    Postman        |
| 2  |     587ms     |    35ms     |    Postman        |
| 3  |     567ms      |    3.73ms   |   Insomnia       |
| 4  |     565ms      |    3.29ms   |   Insomnia       |
