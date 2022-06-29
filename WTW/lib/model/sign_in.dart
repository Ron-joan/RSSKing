import 'package:json_annotation/json_annotation.dart';

part 'sign_in.g.dart';


@JsonSerializable()
class sign_in extends Object {

  @JsonKey(name: 'identifier')
  String identifier;

  @JsonKey(name: 'code')
  int code;

  sign_in(this.identifier,this.code,);

  factory sign_in.fromJson(Map<String, dynamic> srcJson) => _$sign_inFromJson(srcJson);

  Map<String, dynamic> toJson() => _$sign_inToJson(this);

}


