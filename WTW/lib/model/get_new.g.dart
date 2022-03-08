// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'get_new.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

get_new _$get_newFromJson(Map<String, dynamic> json) => get_new(
      Data.fromJson(json['data'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$get_newToJson(get_new instance) => <String, dynamic>{
      'data': instance.data,
    };

Data _$DataFromJson(Map<String, dynamic> json) => Data(
      json['resourcePath'] as String,
      (json['inductionList'] as List<dynamic>)
          .map((e) => InductionList.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$DataToJson(Data instance) => <String, dynamic>{
      'resourcePath': instance.resourcePath,
      'inductionList': instance.inductionList,
    };

InductionList _$InductionListFromJson(Map<String, dynamic> json) =>
    InductionList(
      json['resourceID'] as String,
      json['title'] as String,
      json['description'] as String,
      json['createtime'] as String,
      json['url'] as String,
      json['inductionID'] as String,
    );

Map<String, dynamic> _$InductionListToJson(InductionList instance) =>
    <String, dynamic>{
      'resourceID': instance.resourceID,
      'title': instance.title,
      'description': instance.description,
      'createtime': instance.createtime,
      'url': instance.url,
      'inductionID': instance.inductionID,
    };
