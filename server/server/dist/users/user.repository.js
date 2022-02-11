"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const user_Status_enum_1 = require("./user-Status.enum");
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async getAllUser() {
        const list = await this.find();
        if (!list) {
            throw new common_1.NotFoundException('친구목록이 비어있습니다');
        }
        let FriendlistName = [];
        list.forEach((friend) => {
            FriendlistName.push(friend.name);
        });
        return FriendlistName;
    }
    async createUser(createUserDto) {
        const { name } = createUserDto;
        const user = this.create({
            name,
            loginStatus: user_Status_enum_1.UserStatus.LOGIN,
        });
        await this.save(user);
        return user;
    }
    async getUserById(id) {
        const found = this.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException("해당 유저는 존재하지 않습니다");
        }
        return (await found).name;
    }
    async deleteUser(id) {
        const result = await this.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException('삭제할려는 아이디는 존재하지 않습니다');
        }
    }
};
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map