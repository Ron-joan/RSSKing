import 'package:json_annotation/json_annotation.dart';

part 'base_rpc.g.dart';

@JsonSerializable()
class BaseRpc extends Object {
  @JsonKey(name: 'isSucc')
  bool isSucc;

  @JsonKey(name: 'err')
  Err? err;

  @JsonKey(name: 'res')
  Map<String, dynamic>? res;

  BaseRpc(this.isSucc, this.err, this.res);

  factory BaseRpc.fromJson(Map<String, dynamic> srcJson) =>
      _$BaseRpcFromJson(srcJson);

  Map<String, dynamic> toJson() => _$BaseRpcToJson(this);
}

@JsonSerializable()
class Err extends Object {
  @JsonKey(name: 'message')
  String message;

  @JsonKey(name: 'type')
  String type;

  @JsonKey(name: 'code')
  String code;

  Err(
    this.message,
    this.type,
    this.code,
  );

  factory Err.fromJson(Map<String, dynamic> srcJson) => _$ErrFromJson(srcJson);

  Map<String, dynamic> toJson() => _$ErrToJson(this);
}
