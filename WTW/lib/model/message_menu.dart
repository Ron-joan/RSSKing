import 'package:json_annotation/json_annotation.dart';

part 'message_menu.g.dart';


@JsonSerializable()
class MessageMenu extends Object {

  @JsonKey(name: 'data')
  List<String> data;

  MessageMenu(this.data,);

  factory MessageMenu.fromJson(Map<String, dynamic> srcJson) => _$MessageMenuFromJson(srcJson);

  Map<String, dynamic> toJson() => _$MessageMenuToJson(this);

}