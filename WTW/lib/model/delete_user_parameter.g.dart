// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'delete_user_parameter.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

delete_user_parameter _$delete_user_parameterFromJson(
        Map<String, dynamic> json) =>
    delete_user_parameter(
      json['userID'] as String,
      json['targetUserID'] as String,
    );

Map<String, dynamic> _$delete_user_parameterToJson(
        delete_user_parameter instance) =>
    <String, dynamic>{
      'userID': instance.userID,
      'targetUserID': instance.targetUserID,
    };
