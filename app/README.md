# App

## Build a docker image

```bash
docker build -t rurumimic/todo:0.0.1 .
```

## Push a docker image

```bash
docker push rurumimic/todo:0.0.1
```

## Run a docker image

```bash
docker run --rm -p 3000:3000 rurumimic/todo:0.0.1
```
