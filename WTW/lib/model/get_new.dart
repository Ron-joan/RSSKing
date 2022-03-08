import 'package:json_annotation/json_annotation.dart';

part 'get_new.g.dart';


@JsonSerializable()
class get_new extends Object {

  @JsonKey(name: 'data')
  Data data;

  get_new(this.data,);

  factory get_new.fromJson(Map<String, dynamic> srcJson) => _$get_newFromJson(srcJson);

  Map<String, dynamic> toJson() => _$get_newToJson(this);

}


@JsonSerializable()
class Data extends Object {

  @JsonKey(name: 'resourcePath')
  String resourcePath;

  @JsonKey(name: 'inductionList')
  List<InductionList> inductionList;

  Data(this.resourcePath,this.inductionList,);

  factory Data.fromJson(Map<String, dynamic> srcJson) => _$DataFromJson(srcJson);

  Map<String, dynamic> toJson() => _$DataToJson(this);

}


@JsonSerializable()
class InductionList extends Object {

  @JsonKey(name: 'resourceID')
  String resourceID;

  @JsonKey(name: 'title')
  String title;

  @JsonKey(name: 'description')
  String description;

  @JsonKey(name: 'createtime')
  String createtime;

  @JsonKey(name: 'url')
  String url;

  @JsonKey(name: 'inductionID')
  String inductionID;

  InductionList(this.resourceID,this.title,this.description,this.createtime,this.url,this.inductionID,);

  factory InductionList.fromJson(Map<String, dynamic> srcJson) => _$InductionListFromJson(srcJson);

  Map<String, dynamic> toJson() => _$InductionListToJson(this);

}



