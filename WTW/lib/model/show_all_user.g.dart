// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'show_all_user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

show_all_user _$show_all_userFromJson(Map<String, dynamic> json) =>
    show_all_user(
      (json['data'] as List<dynamic>)
          .map((e) => Data.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$show_all_userToJson(show_all_user instance) =>
    <String, dynamic>{
      'data': instance.data,
    };

Data _$DataFromJson(Map<String, dynamic> json) => Data(
      json['userID'] as String,
      json['nickName'] as String,
    );

Map<String, dynamic> _$DataToJson(Data instance) => <String, dynamic>{
      'userID': instance.userID,
      'nickName': instance.nickName,
    };
