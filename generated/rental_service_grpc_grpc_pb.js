// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var rental_service_grpc_pb = require('./rental_service_grpc_pb.js');

function serialize_CreateRentalRequest(arg) {
  if (!(arg instanceof rental_service_grpc_pb.CreateRentalRequest)) {
    throw new Error('Expected argument of type CreateRentalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateRentalRequest(buffer_arg) {
  return rental_service_grpc_pb.CreateRentalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteRentalRequest(arg) {
  if (!(arg instanceof rental_service_grpc_pb.DeleteRentalRequest)) {
    throw new Error('Expected argument of type DeleteRentalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteRentalRequest(buffer_arg) {
  return rental_service_grpc_pb.DeleteRentalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetRentalRequest(arg) {
  if (!(arg instanceof rental_service_grpc_pb.GetRentalRequest)) {
    throw new Error('Expected argument of type GetRentalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetRentalRequest(buffer_arg) {
  return rental_service_grpc_pb.GetRentalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_RentalResponse(arg) {
  if (!(arg instanceof rental_service_grpc_pb.RentalResponse)) {
    throw new Error('Expected argument of type RentalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_RentalResponse(buffer_arg) {
  return rental_service_grpc_pb.RentalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateRentalRequest(arg) {
  if (!(arg instanceof rental_service_grpc_pb.UpdateRentalRequest)) {
    throw new Error('Expected argument of type UpdateRentalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateRentalRequest(buffer_arg) {
  return rental_service_grpc_pb.UpdateRentalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// The rental service definition.
var RentalServiceService = exports.RentalServiceService = {
  // Create a new rental (POST)
createRental: {
    path: '/RentalService/CreateRental',
    requestStream: false,
    responseStream: false,
    requestType: rental_service_grpc_pb.CreateRentalRequest,
    responseType: rental_service_grpc_pb.RentalResponse,
    requestSerialize: serialize_CreateRentalRequest,
    requestDeserialize: deserialize_CreateRentalRequest,
    responseSerialize: serialize_RentalResponse,
    responseDeserialize: deserialize_RentalResponse,
  },
  // Get a rental by ID (GET)
getRental: {
    path: '/RentalService/GetRental',
    requestStream: false,
    responseStream: false,
    requestType: rental_service_grpc_pb.GetRentalRequest,
    responseType: rental_service_grpc_pb.RentalResponse,
    requestSerialize: serialize_GetRentalRequest,
    requestDeserialize: deserialize_GetRentalRequest,
    responseSerialize: serialize_RentalResponse,
    responseDeserialize: deserialize_RentalResponse,
  },
  // Update a rental (PUT)
updateRental: {
    path: '/RentalService/UpdateRental',
    requestStream: false,
    responseStream: false,
    requestType: rental_service_grpc_pb.UpdateRentalRequest,
    responseType: rental_service_grpc_pb.RentalResponse,
    requestSerialize: serialize_UpdateRentalRequest,
    requestDeserialize: deserialize_UpdateRentalRequest,
    responseSerialize: serialize_RentalResponse,
    responseDeserialize: deserialize_RentalResponse,
  },
  // Delete a rental (DELETE)
deleteRental: {
    path: '/RentalService/DeleteRental',
    requestStream: false,
    responseStream: false,
    requestType: rental_service_grpc_pb.DeleteRentalRequest,
    responseType: rental_service_grpc_pb.RentalResponse,
    requestSerialize: serialize_DeleteRentalRequest,
    requestDeserialize: deserialize_DeleteRentalRequest,
    responseSerialize: serialize_RentalResponse,
    responseDeserialize: deserialize_RentalResponse,
  },
};

exports.RentalServiceClient = grpc.makeGenericClientConstructor(RentalServiceService);
