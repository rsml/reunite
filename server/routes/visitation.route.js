import express from 'express'
//import validate from 'express-validation';
//import paramValidation from '../../config/param-validation';
import visitationCtrl from '../controllers/visitation.controller'

const router = express.Router() // eslint-disable-line new-cap

router.route('/')
  /** GET /api/users - Get list of users */
  //.get(userCtrl.list)

  /** POST /api/users - Create new user */
  .post(visitationCtrl.create)

//router.route('/:visitationId')
  /** GET /api/users/:userId - Get user */
  //.get(visitationCtrl.get)

  /** PUT /api/users/:userId - Update user */
  //.put(visitationCtrl.update)

  /** DELETE /api/users/:userId - Delete user */
  //.delete(visitationCtrl.remove)

/** Load user when API with userId route parameter is hit */
//router.param('userId', userCtrl.load);

export default router
