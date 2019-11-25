var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { UserModel } = require('../models');
module.exports = {
    fetchUsers: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const users = yield UserModel.find({});
        res.status(200).send(users);
    }),
    addUser: (req, res) => __awaiter(this, void 0, void 0, function* () {
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
    })
};
//# sourceMappingURL=userController.js.map