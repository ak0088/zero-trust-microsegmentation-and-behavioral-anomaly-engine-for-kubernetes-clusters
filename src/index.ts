import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    project: 'Zero-Trust Microsegmentation and Behavioral Anomaly Engine for Kubernetes Clusters',
    domain: 'Cybersecurity &amp; Cryptography',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`[Zero-Trust Microsegmentation and Behavioral Anomaly Engine for Kubernetes Clusters] Server operational on port ${PORT}`);
});
