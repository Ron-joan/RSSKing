import 'dart:convert';

import 'package:dio/dio.dart';
import '../model/base_rpc.dart';



class BaseRPCService{
  static Dio dio = Dio();

  BaseRPCService(){
    dio.interceptors.add(InterceptorsWrapper(
        onResponse: (response, handler) {
          Map<String, dynamic> srcJson = json.decode(response.data);
          var b = BaseRpc.fromJson(srcJson);
          if (b.isSucc) {
            response.data = b.res;
            return handler.next(response);
          }
          else{
            throw "";
          }
        },
        onError: (DioError e, handler) {}));
  }

  Dio getDio(){
    return dio;
  }
}

const path = "http://127.0.0.1:3000";

BaseRPCService baseRPCService = BaseRPCService();

Future<Response> send(String rout,Map<String, dynamic> map){
  var dio = baseRPCService.getDio();

  return dio.post(path+"rout",data:map);
}