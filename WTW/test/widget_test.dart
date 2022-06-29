import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:wtw/model/NetCore.dart';
import 'package:wtw/model/login_in_parameter.dart';
import 'package:wtw/model/message_menu_parameter.dart';
import 'package:wtw/model/sign_in_parameter.dart';
import 'package:wtw/model/subscribe_parameter.dart';
import '../lib/model/base_rpc.dart';
import '../lib/model/message_menu_parameter.dart' as m;

void postRequestFunction2() async {
  var ans = await NetCore.toSignIn(sign_in_parameter("123456", "adb"));
  var user = await NetCore.toLogIn(login_in_parameter(ans.identifier, "123456"));
  NetCore.toSubscribe(subscribe_parameter(user.userID, "/lolapp/recommend"));
  print(user.userID);

}


void main() {
  postRequestFunction2();
}
