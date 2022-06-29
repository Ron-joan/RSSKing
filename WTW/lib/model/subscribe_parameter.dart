import 'package:json_annotation/json_annotation.dart';

part 'subscribe_parameter.g.dart';


@JsonSerializable()
class subscribe_parameter extends Object {

  @JsonKey(name: 'userID')
  String userID;

  @JsonKey(name: 'resourcePath')
  String resourcePath;

  subscribe_parameter(this.userID,this.resourcePath,);

  factory subscribe_parameter.fromJson(Map<String, dynamic> srcJson) => _$subscribe_parameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$subscribe_parameterToJson(this);

}


