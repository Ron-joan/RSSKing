// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'delete_resource_parameter.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

delete_resource_parameter _$delete_resource_parameterFromJson(
        Map<String, dynamic> json) =>
    delete_resource_parameter(
      json['userID'] as String,
      json['targetResourceID'] as String,
    );

Map<String, dynamic> _$delete_resource_parameterToJson(
        delete_resource_parameter instance) =>
    <String, dynamic>{
      'userID': instance.userID,
      'targetResourceID': instance.targetResourceID,
    };
