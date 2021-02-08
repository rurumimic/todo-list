# todo-list

간단한 투두 리스트

## 기술 요구사항

가장 기본적인 방법으로 만들어야 한다.

- [ ] Deploy on AWS
- [ ] Infra: Kubernetes
  - Ubuntu 20 + microk8s
- [ ] Backend: Node.js
  - [ ] Koa.js
- [ ] Frontend: React.js
  - [ ] State: Redux
    - [ ] 
  - [ ] Style: Bootstrap 5
- [ ] DB: 뭐쓸까
  - 후보 1: sqlite
  - 후보 2: mariadb
  - 후보 3: postgresql
  - 후보 4: mongodb

## K8S

1. 도커 이미지 tag 버전 명시. `latest` 사용하지 않는다.

---

## Run

[localhost:30080](http://localhost:30080)

### Helm

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
helm install todo todo-list/todo --version 0.0.1
```

### Clean up

```bash
helm uninstall todo
```

### Helm dry run

```bash
helm install --debug --dry-run todo ./helm
```
