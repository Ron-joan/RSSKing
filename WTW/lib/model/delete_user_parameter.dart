import 'package:json_annotation/json_annotation.dart';

part 'delete_user_parameter.g.dart';


@JsonSerializable()
class delete_user_parameter extends Object {

  @JsonKey(name: 'userID')
  String userID;

  @JsonKey(name: 'targetUserID')
  String targetUserID;

  delete_user_parameter(this.userID,this.targetUserID,);

  factory delete_user_parameter.fromJson(Map<String, dynamic> srcJson) => _$delete_user_parameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$delete_user_parameterToJson(this);

}


