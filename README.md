# entertainme
 Simple microservice using mongoose and redis.

## Benchmark Using **mongodb** database

| No | Without Redis | With Redis  |
| ---|:-------------:| -----------:|
| 1  |     180ms     |    24ms     |
| 2  |     105ms     |    38ms     |
| 3  |     60ms      |    2.96ms   |
| 4  |     30ms      |    3.38ms   |


## Benchmark Using **mlab** online database

| No | Without Redis | With Redis  |
| ---|:-------------:| -----------:|
| 1  |     653ms     |    24ms     |
| 2  |     587ms     |    35ms     |
| 3  |     567ms      |    3.73ms   |
| 4  |     565ms      |    3.29ms   |
