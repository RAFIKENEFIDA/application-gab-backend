import express from 'express';
import { createCompagnie,getCenters } from '@controllers/compagnie.controller';

const router = express.Router();

router.post('/createCompagnie', createCompagnie);
router.get('/getCenters', getCenters);

export { router };