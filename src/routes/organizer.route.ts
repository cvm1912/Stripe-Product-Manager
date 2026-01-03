import { Router } from 'express'
import { createOrganizer, getOrganizer, updateOrganizer } from '../controller/organizer.controller'

const router = Router()

router.post('/create', createOrganizer)
router.get('/', getOrganizer)
router.put('/:id', updateOrganizer)

export default router