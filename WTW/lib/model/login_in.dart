import 'package:json_annotation/json_annotation.dart';

part 'login_in.g.dart';


@JsonSerializable()
class login_in extends Object {

  @JsonKey(name: 'userID')
  String userID;

  @JsonKey(name: 'nickName')
  String nickName;

  @JsonKey(name: 'userType')
  int userType;

  @JsonKey(name: 'code')
  int code;

  login_in(this.userID,this.nickName,this.userType,this.code,);

  factory login_in.fromJson(Map<String, dynamic> srcJson) => _$login_inFromJson(srcJson);

  Map<String, dynamic> toJson() => _$login_inToJson(this);

}


