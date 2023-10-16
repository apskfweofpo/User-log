import { Router } from 'express';
import logService from './logService.js'
const router = Router();

router.post('/', logService.create);
router.get('/', logService.getAll);

export default router;