import 'package:json_annotation/json_annotation.dart';

part 'get_new_parameter.g.dart';


@JsonSerializable()
class get_new_parameter extends Object {

  @JsonKey(name: 'userID')
  String userID;

  @JsonKey(name: 'resourcePath')
  String resourcePath;

  get_new_parameter(this.userID,this.resourcePath,);

  factory get_new_parameter.fromJson(Map<String, dynamic> srcJson) => _$get_new_parameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$get_new_parameterToJson(this);

}


