import express from 'express';
var router = express.Router();
import {gradeController} from '../controllers/gradeController.js';

// Apenas uma "facade"
/*
 * GET
 */
router.get('/', gradeController.list);

/*
 * GET
 */
router.get('/:id', gradeController.show);

/*
 * POST
 */
router.post('/', gradeController.create);

/*
 * PUT
 */
router.put('/:id', gradeController.update);

/*
 * DELETE
 */
router.delete('/:id', gradeController.remove);

export { router };
