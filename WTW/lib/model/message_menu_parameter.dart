import 'package:json_annotation/json_annotation.dart';

part 'message_menu_parameter.g.dart';


@JsonSerializable()
class MessageMenuParameter extends Object {

  @JsonKey(name: 'userID')
  String userID;

  MessageMenuParameter(this.userID);

  factory MessageMenuParameter.fromJson(Map<String, dynamic> srcJson) => _$MessageMenuParameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$MessageMenuParameterToJson(this);

}


