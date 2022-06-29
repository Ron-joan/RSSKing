import 'package:json_annotation/json_annotation.dart';

part 'show_all_resource_parameter.g.dart';


@JsonSerializable()
class show_all_resource_parameter extends Object {

  @JsonKey(name: 'userID')
  String userID;

  show_all_resource_parameter(this.userID,);

  factory show_all_resource_parameter.fromJson(Map<String, dynamic> srcJson) => _$show_all_resource_parameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$show_all_resource_parameterToJson(this);

}


