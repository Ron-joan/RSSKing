import 'package:json_annotation/json_annotation.dart';

part 'delete_resource_parameter.g.dart';


@JsonSerializable()
class delete_resource_parameter extends Object {

  @JsonKey(name: 'userID')
  String userID;

  @JsonKey(name: 'targetResourceID')
  String targetResourceID;

  delete_resource_parameter(this.userID,this.targetResourceID,);

  factory delete_resource_parameter.fromJson(Map<String, dynamic> srcJson) => _$delete_resource_parameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$delete_resource_parameterToJson(this);

}


