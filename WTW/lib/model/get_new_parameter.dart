import 'package:json_annotation/json_annotation.dart';

part 'get_new_parameter.g.dart';


@JsonSerializable()
class GetNewParameter extends Object {

  @JsonKey(name: 'userID')
  String userID;

  @JsonKey(name: 'resourcePath')
  String resourcePath;

  GetNewParameter(this.userID,this.resourcePath,);

  factory GetNewParameter.fromJson(Map<String, dynamic> srcJson) => _$GetNewParameterFromJson(srcJson);

  Map<String, dynamic> toJson() => _$GetNewParameterToJson(this);

}


