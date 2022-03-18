// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'base_rpc.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

BaseRpc _$base_rpcFromJson(Map<String, dynamic> json) => BaseRpc(
      json['isSucc'] as bool,
      json['err'] == null
          ? null
          : Err.fromJson(json['err'] as Map<String, dynamic>),
      json['res'] as Map<String, dynamic>?,
    );

Map<String, dynamic> _$base_rpcToJson(BaseRpc instance) => <String, dynamic>{
      'isSucc': instance.isSucc,
      'err': instance.err,
      'res': instance.res,
    };

Err _$ErrFromJson(Map<String, dynamic> json) => Err(
      json['message'] as String,
      json['type'] as String,
      json['code'] as String,
    );

Map<String, dynamic> _$ErrToJson(Err instance) => <String, dynamic>{
      'message': instance.message,
      'type': instance.type,
      'code': instance.code,
    };
