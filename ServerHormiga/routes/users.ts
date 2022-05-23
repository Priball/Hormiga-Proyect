import {Router} from "express";
import { check } from "express-validator";
import { deleteUser, getUsers, postUsers, updateUser } from '../controllers/userController';
import { existEmail, existUserByID, isValidRole } from "../helpers/db-validators";


import validarCampos from '../middlewares/validar-campos';
const router = Router();router.get("/" ,getUsers);

router.post("/", [
    check("name", "Name is Required").not().isEmpty(),
    check("password", "Password is Required").not().isEmpty(),
    check("email", "Email is not validated").isEmail(),
    check("email").custom(existEmail),
    check("rol").custom( isValidRole),
    validarCampos,
], postUsers);

router.put("/:id", [
    check("id", "El id no es un Id valido").isMongoId(),
    check("_id").custom(existUserByID),
    validarCampos,
], updateUser )


router.delete("/:id", [
    check("id", "El id no es un Id valido").isMongoId(),
    check("_id").custom(existUserByID),
    validarCampos,
], deleteUser )

export default router;