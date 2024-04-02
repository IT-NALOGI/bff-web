const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const app = express();
const port = 3000; // Port for the API Gateway

// Parse JSON bodies for this app. Make sure you place body-parser before your CRUD handlers!
app.use(express.json());

const protoPath = './rental_service.proto';
const packageDefinition = protoLoader.loadSync(protoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const grpcObject = grpc.loadPackageDefinition(packageDefinition);
console.log(JSON.stringify(grpcObject, null, 2));

const RentalService = grpcObject.RentalService;

if (!RentalService) {
    console.error("RentalService is not found in the gRPC object.");
    process.exit(1); // Stop the process if we don't find the service
  }
// Create a gRPC client
const grpcClient = new RentalService(
  'http://service2:8080',
  grpc.credentials.createInsecure()
);

// Convert gRPC calls to REST endpoints
app.post('/rental', (req, res) => {
  grpcClient.CreateRental(req.body, (error, response) => {
    if (error) {
      console.error('Error creating rental:', error);
      return res.status(500).json({ error: error.message });
    }
    return res.json(response);
  });
});

// Proxy setup for HTTP microservices
const avtoServiceProxy = createProxyMiddleware({
  target: 'http://avto-service1:8080',
  //localhost
  changeOrigin: true,
});

const userServiceProxy = createProxyMiddleware({
  target: 'http://avto-service3:8080', 
    //localhost
    changeOrigin: true,
    logLevel: 'debug',
  });
  
  // Using the proxies
  app.use('/avto', avtoServiceProxy);
  app.use('/users', userServiceProxy);

// Start the gateway
app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
