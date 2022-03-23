
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- [GetNew](#/GetNew)
- [MessageMenu](#/MessageMenu)
- [Send](#/Send)

---

## GetNew <a id="/GetNew"></a>

**路径**
- POST `/GetNew`

**请求**
```ts
interface ReqGetNew {
    userID: string,
    resourcePath: string
}
```

**响应**
```ts
interface ResGetNew {
    data: {
        resourcePath: string,
        inductionList: {
            resourceID: /*bigint*/ number,
            title: string,
            description: string,
            createtime: /*datetime*/ string,
            url: string,
            inductionID: /*bigint*/ number
        }[]
    }
}
```

---

## MessageMenu <a id="/MessageMenu"></a>

**路径**
- POST `/MessageMenu`

**请求**
```ts
interface ReqMessageMenu {
    userID: string
}
```

**响应**
```ts
interface ResMessageMenu {
    data: string[]
}
```

---

## Send <a id="/Send"></a>

**路径**
- POST `/Send`

**请求**
```ts
interface ReqSend {
    content: string
}
```

**响应**
```ts
interface ResSend {
    time: /*datetime*/ string
}
```

