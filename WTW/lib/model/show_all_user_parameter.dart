import 'package:json_annotation/json_annotation.dart';

part 'show_all_user_parameter.g.dart';


@JsonSerializable()
class show_all_user_parameter extends Object {

  @JsonKey(name: 'userID')
  String userID;

  show_all_user_parameter(this.userID,);

  factory show_all_user_parameter.fromJson(Map<String, dynamic> srcJson) => _$show_all_user_parameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$show_all_user_parameterToJson(this);

}


