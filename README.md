# todo-list

## Run

[localhost:30080](http://localhost:30080)

### Add this chart repository

```bash
helm repo add todo-list https://rurumimic.github.io/todo-list
```

### Chart versions

```bash
helm repo update
helm search repo todo-list
```

### Install the chart

```bash
helm repo update
helm install todo todo-list/todo --version 0.0.1
```

### Clean up

```bash
helm uninstall todo
```
