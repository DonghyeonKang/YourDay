import { KakaoService } from './kakao.service';
export declare class AuthController {
    private readonly kakaoService;
    constructor(kakaoService: KakaoService);
    getKakaoLoginPage(): string;
    kakaoLoginLogic(res: any): void;
    kakaoLoginLogicRedirect(qs: any, res: any): void;
    kakaoUserInfo(res: any): Promise<void>;
    kakaoLogout(res: any): void;
}
