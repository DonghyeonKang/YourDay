"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mydays_controller_1 = require("./mydays.controller");
const mydays_repository_1 = require("./mydays.repository");
const mydays_service_1 = require("./mydays.service");
let ChartModule = class ChartModule {
};
ChartModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([mydays_repository_1.ChartRepository])
        ],
        controllers: [mydays_controller_1.ChartController],
        providers: [mydays_service_1.ChartService]
    })
], ChartModule);
exports.ChartModule = ChartModule;
//# sourceMappingURL=mydays.module.js.map