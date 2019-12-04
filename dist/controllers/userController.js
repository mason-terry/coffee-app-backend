"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { UserModel } = require('../models');
exports.fetchUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserModel.find({});
    res.status(200).send(users);
});
exports.addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const createdOn = new Date();
    const newUser = yield new UserModel({
        name,
        email,
        username,
        password,
        createdOn
    });
    newUser.save(err => {
        if (err)
            res.status(400).send({ success: false, message: `Something went wrong: ${err}` });
    });
    res.status(200).send({
        success: true,
        message: 'User added successfully!',
        newUser
    });
});
exports.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const user = yield UserModel.findOne({ username, password });
    if (user) {
        res.status(200).send({ success: true, message: 'Here is the user you are looking for', user });
    }
    else {
        res.status(200).send({ success: false, message: 'We were not able to find that user' });
    }
});
//# sourceMappingURL=userController.js.map