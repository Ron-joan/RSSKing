// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'sign_in_parameter.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

sign_in_parameter _$sign_in_parameterFromJson(Map<String, dynamic> json) =>
    sign_in_parameter(
      json['credential'] as String,
      json['nickName'] as String,
    );

Map<String, dynamic> _$sign_in_parameterToJson(sign_in_parameter instance) =>
    <String, dynamic>{
      'credential': instance.credential,
      'nickName': instance.nickName,
    };
