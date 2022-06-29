// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'sign_in.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

sign_in _$sign_inFromJson(Map<String, dynamic> json) => sign_in(
      json['identifier'] as String,
      json['code'] as int,
    );

Map<String, dynamic> _$sign_inToJson(sign_in instance) => <String, dynamic>{
      'identifier': instance.identifier,
      'code': instance.code,
    };
