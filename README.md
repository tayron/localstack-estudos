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

## Criando mensagem SQS
```sh
aws --endpoint-url=http://localhost:4566 sqs send-message --queue-url http://localhost:4567/sample-queue --message-body 'example'
```

## Listar mensagens SQS
```sh
while sleep 1; do aws --endpoint-url=http://127.0.0.1:4567 sqs receive-message --queue-url http://localhost:4567/000000000000/fake_direct_channel_proposal_report_queue; done
```

## Criando mensagens SNS
```sh
aws --endpoint-url=http://localhost:4566 sns create-topic --name order-creation-events --region eu-central-1 --profile default --output table | cat
```

## Listando mensagens SNS
```sh
aws --endpoint-url=http://localhost:4566 sns list-topics
```