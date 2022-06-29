// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'show_all_resource.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

show_all_resource _$show_all_resourceFromJson(Map<String, dynamic> json) =>
    show_all_resource(
      (json['data'] as List<dynamic>)
          .map((e) => Data.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$show_all_resourceToJson(show_all_resource instance) =>
    <String, dynamic>{
      'data': instance.data,
    };

Data _$DataFromJson(Map<String, dynamic> json) => Data(
      json['resourceID'] as String,
      json['resourcePath'] as String,
    );

Map<String, dynamic> _$DataToJson(Data instance) => <String, dynamic>{
      'resourceID': instance.resourceID,
      'resourcePath': instance.resourcePath,
    };
