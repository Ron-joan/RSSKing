import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:wtw/model/delete_resource_parameter.dart';
import 'package:wtw/model/delete_user_parameter.dart';
import 'package:wtw/model/dissubscribe_parameter.dart';
import 'package:wtw/model/get_new.dart';
import 'package:wtw/model/login_in.dart';
import 'package:wtw/model/login_in_parameter.dart';
import 'package:wtw/model/message_menu.dart';
import 'package:wtw/model/message_menu_parameter.dart';
import 'package:wtw/model/show_all_resource.dart';
import 'package:wtw/model/show_all_resource_parameter.dart';
import 'package:wtw/model/show_all_user.dart';
import 'package:wtw/model/show_all_user_parameter.dart';
import 'package:wtw/model/sign_in.dart';
import 'package:wtw/model/sign_in_parameter.dart';
import 'package:wtw/model/subscribe_parameter.dart';

import 'base_rpc.dart';
import 'get_new_parameter.dart';

class NetCore {
  static String url = "http://82.157.62.48:4000";

  static  Dio getInstance() {
    Dio dio = Dio();

    dio.interceptors.add(InterceptorsWrapper(
        onResponse: (response, handler) {
          Map<String, dynamic> srcJson = json.decode(response.data);
          var b = BaseRpc.fromJson(srcJson);
          if (b.isSucc) {
            response.data = b.res;
            return handler.next(response);
          }
          else {
            throw b.err.toString();
          }
        },
        onError: (DioError e, handler) {}));
    return dio;
  }

  static Future<dynamic> Send(String root, Map<String, dynamic> data) async {
    Dio dio = getInstance();
    Response response = await dio.post(url + root, data: data);
    return response.data;
  }

  static Future<sign_in> toSignIn(sign_in_parameter s) async {
    return sign_in.fromJson(await Send("/SignIn", s.toJson()));
  }

  static Future<login_in> toLogIn(login_in_parameter p) async {
    return login_in.fromJson(await Send("/Login", p.toJson()));
    }

  static Future<get_new> toGetNew(GetNewParameter p) async {
    return get_new.fromJson(await Send("/GetNew", p.toJson()));
    }


  static Future<MessageMenu> toMessageMenu(MessageMenuParameter p) async {
    return MessageMenu.fromJson(await Send("/MessageMenu", p.toJson()));
    }


  static Future<void> toDeleteResource(delete_resource_parameter p) async {
    await Send("/DeleteResource", p.toJson());
  }

  static Future<void> toDeleteUser(delete_user_parameter p) async {
    await Send("/DeleteUser", p.toJson());
  }

  static Future<show_all_user> toShowAllUser(show_all_user_parameter p) async {
    return show_all_user.fromJson(await Send("/ShowAllUser", p.toJson()));
    }

  static Future<show_all_resource> toShowAllResource(show_all_resource_parameter p) async {
    return show_all_resource.fromJson(await Send("/ShowAllResource", p.toJson()));
    }

  static Future<void> toSubscribe(subscribe_parameter p) async {
    await Send("/Subscribe", p.toJson());
  }

  static Future<void> toDissubscribe(dissubscribe_parameter p) async {
    await Send("/Dissubscribe", p.toJson());
  }
}