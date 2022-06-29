import 'package:json_annotation/json_annotation.dart';

part 'show_all_user.g.dart';


@JsonSerializable()
class show_all_user extends Object {

  @JsonKey(name: 'data')
  List<Data> data;

  show_all_user(this.data,);

  factory show_all_user.fromJson(Map<String, dynamic> srcJson) => _$show_all_userFromJson(srcJson);

  Map<String, dynamic> toJson() => _$show_all_userToJson(this);

}


@JsonSerializable()
class Data extends Object {

  @JsonKey(name: 'userID')
  String userID;

  @JsonKey(name: 'nickName')
  String nickName;

  Data(this.userID,this.nickName,);

  factory Data.fromJson(Map<String, dynamic> srcJson) => _$DataFromJson(srcJson);

  Map<String, dynamic> toJson() => _$DataToJson(this);

}


