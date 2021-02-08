# todo-list

## Helm Chart

Add chart repo:

```bash
helm repo add todo-list https://rurumimic.github.io/todo-list
```

```bash
helm repo update
helm search repo todo-list
```

Install the chart:

```bash
helm repo update
helm install todo todo-list --version 0.0.1
```
