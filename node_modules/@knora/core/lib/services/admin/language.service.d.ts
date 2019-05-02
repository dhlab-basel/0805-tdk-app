import { Observable } from 'rxjs';
export declare class LanguageService {
    private subject;
    setLanguage(lang: string): void;
    getLanguage(): Observable<any>;
}
