import { ServiceProto } from 'tsrpc-proto';
import { MsgChat } from './MsgChat';
import { MsgNew } from './MsgNew';
import { ReqDeleteResource, ResDeleteResource } from './PtlDeleteResource';
import { ReqDeleteUser, ResDeleteUser } from './PtlDeleteUser';
import { ReqDissubscribe, ResDissubscribe } from './PtlDissubscribe';
import { ReqGetNew, ResGetNew } from './PtlGetNew';
import { ReqLogin, ResLogin } from './PtlLogin';
import { ReqMessageMenu, ResMessageMenu } from './PtlMessageMenu';
import { ReqSend, ResSend } from './PtlSend';
import { ReqShowAllResource, ResShowAllResource } from './PtlShowAllResource';
import { ReqShowAllUser, ResShowAllUser } from './PtlShowAllUser';
import { ReqSignIn, ResSignIn } from './PtlSignIn';
import { ReqSubscribe, ResSubscribe } from './PtlSubscribe';

export interface ServiceType {
    api: {
        "DeleteResource": {
            req: ReqDeleteResource,
            res: ResDeleteResource
        },
        "DeleteUser": {
            req: ReqDeleteUser,
            res: ResDeleteUser
        },
        "Dissubscribe": {
            req: ReqDissubscribe,
            res: ResDissubscribe
        },
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
        "ShowAllResource": {
            req: ReqShowAllResource,
            res: ResShowAllResource
        },
        "ShowAllUser": {
            req: ReqShowAllUser,
            res: ResShowAllUser
        },
        "SignIn": {
            req: ReqSignIn,
            res: ResSignIn
        },
        "Subscribe": {
            req: ReqSubscribe,
            res: ResSubscribe
        }
    },
    msg: {
        "Chat": MsgChat,
        "New": MsgNew
    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 7,
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
            "id": 7,
            "name": "DeleteResource",
            "type": "api"
        },
        {
            "id": 8,
            "name": "DeleteUser",
            "type": "api"
        },
        {
            "id": 9,
            "name": "Dissubscribe",
            "type": "api"
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
            "id": 10,
            "name": "ShowAllResource",
            "type": "api"
        },
        {
            "id": 11,
            "name": "ShowAllUser",
            "type": "api"
        },
        {
            "id": 6,
            "name": "SignIn",
            "type": "api"
        },
        {
            "id": 12,
            "name": "Subscribe",
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
        "PtlDeleteResource/ReqDeleteResource": {
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
                    "name": "targetResourceID",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlDeleteResource/ResDeleteResource": {
            "type": "Interface"
        },
        "PtlDeleteUser/ReqDeleteUser": {
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
                    "name": "targetUserID",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlDeleteUser/ResDeleteUser": {
            "type": "Interface"
        },
        "PtlDissubscribe/ReqDissubscribe": {
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
        "PtlDissubscribe/ResDissubscribe": {
            "type": "Interface"
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
        "PtlShowAllResource/ReqShowAllResource": {
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
        "PtlShowAllResource/ResShowAllResource": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "PtlShowAllResource/Resource"
                        }
                    }
                }
            ]
        },
        "PtlShowAllResource/Resource": {
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
                    "name": "resourcePath",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlShowAllUser/ReqShowAllUser": {
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
        "PtlShowAllUser/ResShowAllUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "PtlShowAllUser/User"
                        }
                    }
                }
            ]
        },
        "PtlShowAllUser/User": {
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
        },
        "PtlSubscribe/ReqSubscribe": {
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
        "PtlSubscribe/ResSubscribe": {
            "type": "Interface"
        }
    }
};