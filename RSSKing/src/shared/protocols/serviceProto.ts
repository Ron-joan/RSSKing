import { ServiceProto } from 'tsrpc-proto';
import { MsgChat } from './MsgChat';
import { MsgNew } from './MsgNew';
import { ReqGetNew, ResGetNew } from './PtlGetNew';
import { ReqLogin, ResLogin } from './PtlLogin';
import { ReqMessageMenu, ResMessageMenu } from './PtlMessageMenu';
import { ReqSend, ResSend } from './PtlSend';
import { ReqSignIn, ResSignIn } from './PtlSignIn';

export interface ServiceType {
    api: {
        "GetNew": {
            req: ReqGetNew,
            res: ResGetNew
        },
        "Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "MessageMenu": {
            req: ReqMessageMenu,
            res: ResMessageMenu
        },
        "Send": {
            req: ReqSend,
            res: ResSend
        },
        "SignIn": {
            req: ReqSignIn,
            res: ResSignIn
        }
    },
    msg: {
        "Chat": MsgChat,
        "New": MsgNew
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 5,
    "services": [
        {
            "id": 0,
            "name": "Chat",
            "type": "msg"
        },
        {
            "id": 3,
            "name": "New",
            "type": "msg"
        },
        {
            "id": 2,
            "name": "GetNew",
            "type": "api"
        },
        {
            "id": 5,
            "name": "Login",
            "type": "api"
        },
        {
            "id": 4,
            "name": "MessageMenu",
            "type": "api"
        },
        {
            "id": 1,
            "name": "Send",
            "type": "api"
        },
        {
            "id": 6,
            "name": "SignIn",
            "type": "api"
        }
    ],
    "types": {
        "MsgChat/MsgChat": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "MsgNew/MsgNew": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../../../service/MessageWithPath/RSSPackage"
                    }
                }
            ]
        },
        "../../../service/MessageWithPath/RSSPackage": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "resourcePath",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "inductionList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../../../service/MessageWithPath/Induction"
                        }
                    }
                }
            ]
        },
        "../../../service/MessageWithPath/Induction": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "resourceID",
                    "type": {
                        "type": "Number",
                        "scalarType": "bigint"
                    }
                },
                {
                    "id": 1,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "description",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "createtime",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 4,
                    "name": "url",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "inductionID",
                    "type": {
                        "type": "Number",
                        "scalarType": "bigint"
                    }
                }
            ]
        },
        "PtlGetNew/ReqGetNew": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userID",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "resourcePath",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetNew/ResGetNew": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Reference",
                        "target": "../../../service/MessageWithPath/RSSPackage"
                    }
                }
            ]
        },
        "PtlLogin/ReqLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "identifier",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "credential",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlLogin/ResLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userID",
                    "type": {
                        "type": "Number",
                        "scalarType": "bigint"
                    }
                },
                {
                    "id": 1,
                    "name": "nickName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "userType",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "code",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMessageMenu/ReqMessageMenu": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userID",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMessageMenu/ResMessageMenu": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        },
        "PtlSend/ReqSend": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSend/ResSend": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlSignIn/ReqSignIn": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "nickName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "credential",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSignIn/ResSignIn": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "identifier",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "code",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        }
    }
};