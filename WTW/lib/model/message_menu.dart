import 'package:json_annotation/json_annotation.dart';

part 'message_menu.g.dart';


@JsonSerializable()
class message_menu extends Object {

  @JsonKey(name: 'data')
  List<String> data;

  message_menu(this.data,);

  factory message_menu.fromJson(Map<String, dynamic> srcJson) => _$message_menuFromJson(srcJson);

  Map<String, dynamic> toJson() => _$message_menuToJson(this);

}