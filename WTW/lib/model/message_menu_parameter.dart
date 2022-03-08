import 'package:json_annotation/json_annotation.dart';

part 'message_menu_parameter.g.dart';


@JsonSerializable()
class message_menu_parameter extends Object {

  @JsonKey(name: 'userID')
  String userID;

  message_menu_parameter(this.userID);

  factory message_menu_parameter.fromJson(Map<String, dynamic> srcJson) => _$message_menu_parameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$message_menu_parameterToJson(this);

}


