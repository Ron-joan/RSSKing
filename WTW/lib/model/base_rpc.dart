import 'package:json_annotation/json_annotation.dart';

part 'base_rpc.g.dart';

@JsonSerializable()
class base_rpc extends Object {
  @JsonKey(name: 'isSucc')
  bool isSucc;

  @JsonKey(name: 'err')
  Err? err;

  @JsonKey(name: 'res')
  Map<String, dynamic>? res;

  base_rpc(this.isSucc, this.err, this.res);

  factory base_rpc.fromJson(Map<String, dynamic> srcJson) =>
      _$base_rpcFromJson(srcJson);

  Map<String, dynamic> toJson() => _$base_rpcToJson(this);
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
