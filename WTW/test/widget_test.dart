import 'dart:convert';

import 'package:dio/dio.dart';
import '../lib/model/base_rpc.dart';

void postRequestFunction2() async {
  String url = "http://127.0.0.1:3000/MessageMenu";

  ///创建Dio
  Dio dio = Dio();

  dio.interceptors.add(InterceptorsWrapper(
      onResponse: (response, handler) {
        Map<String, dynamic> srcJson = json.decode(response.data);
        var b = base_rpc.fromJson(srcJson);
        if (b.isSucc) {
          response.data = b.res;
          return handler.next(response);
        }
        else{
          throw "";
        }
      },
      onError: (DioError e, handler) {}));

  ///创建Map 封装参数
  Map<String, dynamic> map = {};

  map['userID'] = "7831565035913216";

  ///发起post请求
  Response response = await dio.post(url, data: map);

  var data = response.data;
}

void main() {
  postRequestFunction2();
}
