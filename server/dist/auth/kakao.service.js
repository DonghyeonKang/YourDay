"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KakaoService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let KakaoService = class KakaoService {
    constructor() {
        this.check = false;
        this.http = new axios_1.HttpService();
        this.accessToken = '';
    }
    loginCheck() {
        this.check = !this.check;
        return;
    }
    async login(url, headers) {
        return await (0, rxjs_1.lastValueFrom)(this.http.post(url, '', { headers }));
    }
    setToken(token) {
        this.accessToken = token;
        return true;
    }
    async showUserInfo(url, headers) {
        const userInfo = await (0, rxjs_1.lastValueFrom)(this.http.get(url, { headers }));
        this.http.post("/mypage/login", '', { headers: userInfo.data });
    }
    async logout() {
        const _url = 'https://kapi.kakao.com/v1/user/logout';
        const _headers = {
            Authorization: `Bearer ${this.accessToken}`,
        };
        console.log(this.accessToken);
        console.log(JSON.stringify(_headers));
        return await (0, rxjs_1.lastValueFrom)(this.http.post(_url, '', { headers: _headers }));
    }
    async deleteLog() {
        const _url = "https://kapi.kakao.com/v1/user/unlink";
        const _headers = {
            Authorization: `Bearer ${this.accessToken}`,
        };
        return await (0, rxjs_1.lastValueFrom)(this.http.post(_url, '', { headers: _headers }));
    }
};
KakaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], KakaoService);
exports.KakaoService = KakaoService;
//# sourceMappingURL=kakao.service.js.map