import 'package:json_annotation/json_annotation.dart';

part 'sign_in_parameter.g.dart';


@JsonSerializable()
class sign_in_parameter extends Object {

  @JsonKey(name: 'credential')
  String credential;

  @JsonKey(name: 'nickName')
  String nickName;

  sign_in_parameter(this.credential,this.nickName,);

  factory sign_in_parameter.fromJson(Map<String, dynamic> srcJson) => _$sign_in_parameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$sign_in_parameterToJson(this);

}


