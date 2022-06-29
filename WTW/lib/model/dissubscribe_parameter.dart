import 'package:json_annotation/json_annotation.dart';

part 'dissubscribe_parameter.g.dart';


@JsonSerializable()
class dissubscribe_parameter extends Object {

  @JsonKey(name: 'userID')
  String userID;

  @JsonKey(name: 'resourcePath')
  String resourcePath;

  dissubscribe_parameter(this.userID,this.resourcePath,);

  factory dissubscribe_parameter.fromJson(Map<String, dynamic> srcJson) => _$dissubscribe_parameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$dissubscribe_parameterToJson(this);

}


