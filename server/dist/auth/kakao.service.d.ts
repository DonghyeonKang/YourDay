export declare class KakaoService {
    check: boolean;
    accessToken: string;
    private http;
    constructor();
    loginCheck(): void;
    login(url: string, headers: any): Promise<any>;
    setToken(token: string): boolean;
    showUserInfo(url: string, headers: any): Promise<any>;
    logout(): Promise<any>;
    deleteLog(): Promise<any>;
}
