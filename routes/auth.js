import express from 'express';

import * as AuthController from '../controllers/auth';

const router = express.Router();

router.post('/signin', AuthController.signin);
router.post('/signup', AuthController.signup);

export default router;