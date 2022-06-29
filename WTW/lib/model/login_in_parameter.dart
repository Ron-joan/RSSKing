import 'package:json_annotation/json_annotation.dart';

part 'login_in_parameter.g.dart';


@JsonSerializable()
class login_in_parameter extends Object {

  @JsonKey(name: 'identifier')
  String identifier;

  @JsonKey(name: 'credential')
  String credential;

  login_in_parameter(this.identifier,this.credential,);

  factory login_in_parameter.fromJson(Map<String, dynamic> srcJson) => _$login_in_parameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$login_in_parameterToJson(this);

}


