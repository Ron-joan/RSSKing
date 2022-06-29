
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- [DeleteResource](#/DeleteResource)
- [DeleteUser](#/DeleteUser)
- [Dissubscribe](#/Dissubscribe)
- [GetNew](#/GetNew)
- [Login](#/Login)
- [MessageMenu](#/MessageMenu)
- [Send](#/Send)
- [ShowAllResource](#/ShowAllResource)
- [ShowAllUser](#/ShowAllUser)
- [SignIn](#/SignIn)
- [Subscribe](#/Subscribe)

---

## DeleteResource <a id="/DeleteResource"></a>

**路径**
- POST `/DeleteResource`

**请求**
```ts
interface ReqDeleteResource {
    userID: string,
    targetResourceID: string
}
```

**响应**
```ts
interface ResDeleteResource {

}
```

---

## DeleteUser <a id="/DeleteUser"></a>

**路径**
- POST `/DeleteUser`

**请求**
```ts
interface ReqDeleteUser {
    userID: string,
    targetUserID: string
}
```

**响应**
```ts
interface ResDeleteUser {

}
```

---

## Dissubscribe <a id="/Dissubscribe"></a>

**路径**
- POST `/Dissubscribe`

**请求**
```ts
interface ReqDissubscribe {
    userID: string,
    resourcePath: string
}
```

**响应**
```ts
interface ResDissubscribe {

}
```

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

## Login <a id="/Login"></a>

**路径**
- POST `/Login`

**请求**
```ts
interface ReqLogin {
    identifier: string,
    credential: string
}
```

**响应**
```ts
interface ResLogin {
    userID: /*bigint*/ number,
    nickName: string,
    userType: number,
    code: number
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

---

## ShowAllResource <a id="/ShowAllResource"></a>

**路径**
- POST `/ShowAllResource`

**请求**
```ts
interface ReqShowAllResource {
    userID: string
}
```

**响应**
```ts
interface ResShowAllResource {
    data: {
        resourceID: /*bigint*/ number,
        resourcePath: string
    }[]
}
```

---

## ShowAllUser <a id="/ShowAllUser"></a>

**路径**
- POST `/ShowAllUser`

**请求**
```ts
interface ReqShowAllUser {
    userID: string
}
```

**响应**
```ts
interface ResShowAllUser {
    data: {
        userID: /*bigint*/ number,
        nickName: string
    }[]
}
```

---

## SignIn <a id="/SignIn"></a>

**路径**
- POST `/SignIn`

**请求**
```ts
interface ReqSignIn {
    nickName: string,
    credential: string
}
```

**响应**
```ts
interface ResSignIn {
    identifier: string,
    code: number
}
```

---

## Subscribe <a id="/Subscribe"></a>

**路径**
- POST `/Subscribe`

**请求**
```ts
interface ReqSubscribe {
    userID: string,
    resourcePath: string
}
```

**响应**
```ts
interface ResSubscribe {

}
```

