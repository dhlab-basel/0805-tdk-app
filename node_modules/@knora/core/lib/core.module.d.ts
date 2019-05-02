import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { KuiCoreConfig } from './declarations';
export declare const KuiCoreConfigToken: InjectionToken<KuiCoreConfig>;
export declare class KuiCoreModule {
    /**
     *
     * @param {KuiCoreConfig} config
     * @returns {ModuleWithProviders}
     */
    static forRoot(config: KuiCoreConfig): ModuleWithProviders;
}
