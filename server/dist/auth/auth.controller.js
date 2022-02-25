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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const kakao_service_1 = require("./kakao.service");
let AuthController = class AuthController {
    constructor(kakaoService) {
        this.kakaoService = kakaoService;
    }
    getKakaoLoginPage() {
        return `
      <div>
        <h1>카카오 로그인</h1>

        <form action="/auth/kakaoLoginLogic" method="GET">
          <input type="submit" value="카카오 로그인" />
        </form>

        <form action="/auth/kakaoLogout" method="GET">
          <input type="submit" value="카카오 로그아웃" />
        </form>
    `;
    }
    kakaoLoginLogic(res) {
        const _hostName = 'https://kauth.kakao.com';
        const _restApiKey = '450af5f4744fcb0bc3d057ba542c7d6a';
        const _redirectUrl = 'http://127.0.0.1:3000/auth/kakaoLoginLogicRedirect';
        const url = `${_hostName}/oauth/authorize?client_id=${_restApiKey}&redirect_uri=${_redirectUrl}&response_type=code`;
        return res.redirect(url);
    }
    kakaoLoginLogicRedirect(qs, res) {
        console.log(qs.code);
        const _restApiKey = '450af5f4744fcb0bc3d057ba542c7d6a';
        const _redirect_uri = 'http://127.0.0.1:3000/auth/kakaoLoginLogicRedirect';
        const _hostName = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${_restApiKey}&redirect_uri=${_redirect_uri}&code=${qs.code}`;
        const _headers = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        };
        this.kakaoService
            .login(_hostName, _headers)
            .then((e) => {
            console.log(`TOKEN : ${e.data['access_token']}`);
            this.kakaoService.setToken(e.data['access_token']);
            this.kakaoUserInfo(e.data);
            return res.send(`
          <div>
            <h2>축하합니다!</h2>
            <p>카카오 로그인 성공하였습니다!</p>
            <a href="/auth/kakaoLogin">메인으로</a>
          </div>
        `);
        })
            .catch((err) => {
            console.log(err);
            return res.send('error');
        });
    }
    async kakaoUserInfo(res) {
        const _url = "https://kapi.kakao.com/v2/user/me";
        const _headers = {
            'Authorization': `Bearer ${res.access_token}`,
        };
        this.kakaoService
            .showUserInfo(_url, _headers)
            .then((e) => {
            console.log(e);
        })
            .catch((err) => {
            console.log(err);
            return res.send('error');
        });
    }
    kakaoLogout(res) {
        this.kakaoService
            .deleteLog()
            .then((e) => {
            console.log(e);
            return res.send(`
          <div>
            <h2>로그아웃 완료(로그삭제)</h2>
            <a href="/auth/kakaoLogin">메인 화면으로</a>
          </div>
        `);
        })
            .catch((err) => {
            console.log(err);
            return res.send('logout error');
        });
    }
};
__decorate([
    (0, common_1.Get)("kakaoLogin"),
    (0, common_1.Header)('Content-Type', 'text/html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AuthController.prototype, "getKakaoLoginPage", null);
__decorate([
    (0, common_1.Get)('/kakaoLoginLogic'),
    (0, common_1.Header)('Content-Type', 'text/html'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "kakaoLoginLogic", null);
__decorate([
    (0, common_1.Get)('/kakaoLoginLogicRedirect'),
    (0, common_1.Header)('Content-Type', 'text/html'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "kakaoLoginLogicRedirect", null);
__decorate([
    (0, common_1.Get)('/kakaoLogin'),
    (0, common_1.Header)('Content-Type', 'text/html'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "kakaoUserInfo", null);
__decorate([
    (0, common_1.Get)('/kakaoLogout'),
    (0, common_1.Header)('Content-Type', 'text/html'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "kakaoLogout", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [kakao_service_1.KakaoService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map