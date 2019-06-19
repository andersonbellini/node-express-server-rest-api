import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
   return res.send(req.context.models.career);
});

router.get('/:careerId', (req, res) => {
  return res.send(req.context.models.career[req.params.careerId]);
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const career = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.career[id] = career;

  return res.send(career);
});

router.delete('/:careerId', (req, res) => {
  const {
    [req.params.careerId]: career,
    ...otherCareers
  } = req.context.models.career;

  req.context.models.career = otherCareers;

  return res.send(career);
});

export default router;
