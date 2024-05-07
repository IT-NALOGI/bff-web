// source: rental_service_grpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.CreateRentalRequest', null, global);
goog.exportSymbol('proto.DeleteRentalRequest', null, global);
goog.exportSymbol('proto.GetRentalRequest', null, global);
goog.exportSymbol('proto.RentalResponse', null, global);
goog.exportSymbol('proto.UpdateRentalRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreateRentalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreateRentalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CreateRentalRequest.displayName = 'proto.CreateRentalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetRentalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetRentalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetRentalRequest.displayName = 'proto.GetRentalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UpdateRentalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateRentalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateRentalRequest.displayName = 'proto.UpdateRentalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeleteRentalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeleteRentalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeleteRentalRequest.displayName = 'proto.DeleteRentalRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RentalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RentalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RentalResponse.displayName = 'proto.RentalResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreateRentalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CreateRentalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreateRentalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateRentalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avtoid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    startdate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    enddate: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreateRentalRequest}
 */
proto.CreateRentalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreateRentalRequest;
  return proto.CreateRentalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreateRentalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreateRentalRequest}
 */
proto.CreateRentalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvtoid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartdate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnddate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreateRentalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CreateRentalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CreateRentalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateRentalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvtoid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStartdate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEnddate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string userId = 1;
 * @return {string}
 */
proto.CreateRentalRequest.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateRentalRequest} returns this
 */
proto.CreateRentalRequest.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avtoId = 2;
 * @return {string}
 */
proto.CreateRentalRequest.prototype.getAvtoid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateRentalRequest} returns this
 */
proto.CreateRentalRequest.prototype.setAvtoid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string startDate = 3;
 * @return {string}
 */
proto.CreateRentalRequest.prototype.getStartdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateRentalRequest} returns this
 */
proto.CreateRentalRequest.prototype.setStartdate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string endDate = 4;
 * @return {string}
 */
proto.CreateRentalRequest.prototype.getEnddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateRentalRequest} returns this
 */
proto.CreateRentalRequest.prototype.setEnddate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetRentalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetRentalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetRentalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetRentalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rentalid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetRentalRequest}
 */
proto.GetRentalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetRentalRequest;
  return proto.GetRentalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetRentalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetRentalRequest}
 */
proto.GetRentalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRentalid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetRentalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetRentalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetRentalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetRentalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRentalid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string rentalId = 1;
 * @return {string}
 */
proto.GetRentalRequest.prototype.getRentalid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetRentalRequest} returns this
 */
proto.GetRentalRequest.prototype.setRentalid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UpdateRentalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateRentalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateRentalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateRentalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rentalid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avtoid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    startdate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    enddate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UpdateRentalRequest}
 */
proto.UpdateRentalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateRentalRequest;
  return proto.UpdateRentalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateRentalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateRentalRequest}
 */
proto.UpdateRentalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRentalid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvtoid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartdate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnddate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UpdateRentalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateRentalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateRentalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateRentalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRentalid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvtoid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStartdate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEnddate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string rentalId = 1;
 * @return {string}
 */
proto.UpdateRentalRequest.prototype.getRentalid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdateRentalRequest} returns this
 */
proto.UpdateRentalRequest.prototype.setRentalid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userId = 2;
 * @return {string}
 */
proto.UpdateRentalRequest.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdateRentalRequest} returns this
 */
proto.UpdateRentalRequest.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avtoId = 3;
 * @return {string}
 */
proto.UpdateRentalRequest.prototype.getAvtoid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdateRentalRequest} returns this
 */
proto.UpdateRentalRequest.prototype.setAvtoid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string startDate = 4;
 * @return {string}
 */
proto.UpdateRentalRequest.prototype.getStartdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdateRentalRequest} returns this
 */
proto.UpdateRentalRequest.prototype.setStartdate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string endDate = 5;
 * @return {string}
 */
proto.UpdateRentalRequest.prototype.getEnddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdateRentalRequest} returns this
 */
proto.UpdateRentalRequest.prototype.setEnddate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string status = 6;
 * @return {string}
 */
proto.UpdateRentalRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdateRentalRequest} returns this
 */
proto.UpdateRentalRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeleteRentalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DeleteRentalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeleteRentalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteRentalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    rentalid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeleteRentalRequest}
 */
proto.DeleteRentalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeleteRentalRequest;
  return proto.DeleteRentalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeleteRentalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeleteRentalRequest}
 */
proto.DeleteRentalRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRentalid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeleteRentalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeleteRentalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeleteRentalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteRentalRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRentalid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string rentalId = 1;
 * @return {string}
 */
proto.DeleteRentalRequest.prototype.getRentalid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeleteRentalRequest} returns this
 */
proto.DeleteRentalRequest.prototype.setRentalid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RentalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.RentalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RentalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RentalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rentalid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avtoid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    startdate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    enddate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RentalResponse}
 */
proto.RentalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RentalResponse;
  return proto.RentalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RentalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RentalResponse}
 */
proto.RentalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRentalid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvtoid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartdate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnddate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RentalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RentalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RentalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RentalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRentalid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvtoid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStartdate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEnddate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string rentalId = 1;
 * @return {string}
 */
proto.RentalResponse.prototype.getRentalid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RentalResponse} returns this
 */
proto.RentalResponse.prototype.setRentalid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userId = 2;
 * @return {string}
 */
proto.RentalResponse.prototype.getUserid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.RentalResponse} returns this
 */
proto.RentalResponse.prototype.setUserid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avtoId = 3;
 * @return {string}
 */
proto.RentalResponse.prototype.getAvtoid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.RentalResponse} returns this
 */
proto.RentalResponse.prototype.setAvtoid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string startDate = 4;
 * @return {string}
 */
proto.RentalResponse.prototype.getStartdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.RentalResponse} returns this
 */
proto.RentalResponse.prototype.setStartdate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string endDate = 5;
 * @return {string}
 */
proto.RentalResponse.prototype.getEnddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.RentalResponse} returns this
 */
proto.RentalResponse.prototype.setEnddate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string status = 6;
 * @return {string}
 */
proto.RentalResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.RentalResponse} returns this
 */
proto.RentalResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto);
