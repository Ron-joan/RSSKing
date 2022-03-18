import 'package:json_annotation/json_annotation.dart';

part 'message_menu.g.dart';


@JsonSerializable()
class MessageMenu extends Object {

  @JsonKey(name: 'data')
  List<String> data;

  MessageMenu(this.data,);

  factory MessageMenu.fromJson(Map<String, dynamic> srcJson) => _$message_menuFromJson(srcJson);

  Map<String, dynamic> toJson() => _$message_menuToJson(this);

}