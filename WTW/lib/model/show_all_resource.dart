import 'package:json_annotation/json_annotation.dart';

part 'show_all_resource.g.dart';


@JsonSerializable()
class show_all_resource extends Object {

  @JsonKey(name: 'data')
  List<Data> data;

  show_all_resource(this.data,);

  factory show_all_resource.fromJson(Map<String, dynamic> srcJson) => _$show_all_resourceFromJson(srcJson);

  Map<String, dynamic> toJson() => _$show_all_resourceToJson(this);

}


@JsonSerializable()
class Data extends Object {

  @JsonKey(name: 'resourceID')
  String resourceID;

  @JsonKey(name: 'resourcePath')
  String resourcePath;

  Data(this.resourceID,this.resourcePath,);

  factory Data.fromJson(Map<String, dynamic> srcJson) => _$DataFromJson(srcJson);

  Map<String, dynamic> toJson() => _$DataToJson(this);

}


