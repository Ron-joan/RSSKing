// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'login_in.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

login_in _$login_inFromJson(Map<String, dynamic> json) => login_in(
      json['userID'] as String,
      json['nickName'] as String,
      json['userType'] as int,
      json['code'] as int,
    );

Map<String, dynamic> _$login_inToJson(login_in instance) => <String, dynamic>{
      'userID': instance.userID,
      'nickName': instance.nickName,
      'userType': instance.userType,
      'code': instance.code,
    };
