import {Router} from 'express';
import { check } from 'express-validator';
import { checkJWT, login } from '../controllers/authController';
import { deleteUser, getUsers, postUsers, updateUser } from '../controllers/userController';
import { existEmail, existUserByID, isValidRole } from '../helpers/db-validators';
import validarCampos from '../middlewares/validar-campos';


const router = Router();


router.post('/login', [
    check("email", "Email is not Validate").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validarCampos,
],
login);

router.get('/validate-token', checkJWT);



export default router;