# LOCALSTACK

## Criando bucket S3
```sh
aws --endpoint-url=http://127.0.0.1:4566 s3api create-bucket --bucket mybucket 
```

## Listando buckets S3
```
aws --endpoint-url=http://127.0.0.1:4566 s3api list-buckets
```

## Criando fila SQS
```sh
aws --endpoint-url=http://127.0.0.1:4566 sqs create-queue --queue-name sample-queue --region eu-central-1 --profile default --output table | cat
```

## Listando filas SQS
```sh
aws --endpoint-url=http://127.0.0.1:4566 sqs list-queues
```

## Criando mensagens SNS
```sh
aws --endpoint-url=http://localhost:4566 sns create-topic --name order-creation-events --region eu-central-1 --profile default --output table | cat
```

## Listando mensagens SNS
```sh
aws --endpoint-url=http://localhost:4566 sns list-topics
```