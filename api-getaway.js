const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const grpc = require('@grpc/grpc-js');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors()); 

app.use('/avto', createProxyMiddleware({
  target: 'http://avto-service1:8080',
  changeOrigin: true
}));

app.use('/users', createProxyMiddleware({
  target: 'http://avto-service3:8080',
  changeOrigin: true
}));


// Import the generated gRPC client and request/response classes
const {
  RentalServiceClient,
} = require('./generated/rental_service_grpc_grpc_pb');
const {
  CreateRentalRequest,
  GetRentalRequest,
  UpdateRentalRequest,
  DeleteRentalRequest,
  RentalResponse,
} = require('./generated/rental_service_grpc_pb');

// Create the gRPC client
const rentalClient = new RentalServiceClient(
  'avto-service2:9000',
  grpc.credentials.createInsecure()  // Ensure this matches the server's security config
);


// API to create a rental
app.post('/createRental', (req, res) => {
  const { userId, avtoId, startDate, endDate } = req.body;
  const request = new CreateRentalRequest();
  
  // Assuming the methods are named exactly as follows:
  request.setUserid(userId);
  request.setAvtoid(avtoId);
  request.setStartdate(startDate);
  request.setEnddate(endDate);

  rentalClient.createRental(request, (error, response) => {
    if (error) {
      console.error('Full Error:', error);
      res.status(500).json({ error: error.details || 'Internal Server Error' });
    }     else {
      console.log('Rental Created:', response.toObject());
      res.json(response.toObject());
    }
  });
});


// API to get a rental by ID
app.get('/getRental', (req, res) => {
  const { rentalId } = req.query;
  const request = new GetRentalRequest();
  request.setRentalid(rentalId);

  rentalClient.getRental(request, (error, response) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Received Rental:', response.toObject());
      res.json(response.toObject());
    }
  });
});

// API to update a rental
app.put('/updateRental', (req, res) => {
  const { rentalId, userId, avtoId, startDate, endDate, status } = req.body;
  const request = new UpdateRentalRequest();
  request.setRentalId(rentalId);
  request.setUserId(userId);
  request.setAvtoId(avtoId);
  request.setStartDate(startDate);
  request.setEndDate(endDate);
  request.setStatus(status);

  rentalClient.updateRental(request, (error, response) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Rental Updated:', response.toObject());
      res.json(response.toObject());
    }
  });
});

app.delete('/deleteRental', (req, res) => {
  const { rentalId } = req.query;
  const request = new DeleteRentalRequest();
  request.setRentalId(rentalId);

  rentalClient.deleteRental(request, (error, response) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Rental Deleted Successfully');
      res.status(204).end();
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});