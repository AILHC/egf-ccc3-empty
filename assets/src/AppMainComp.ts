
import { App } from '@ailhc/egf-core';

import { _decorator, Component, Node } from 'cc';
import { m, setModuleMap } from './ModuleMap';
import { FrameworkLoader } from './boot-loaders/FrameworkLoader';
const { ccclass, property } = _decorator;

@ccclass('AppMainComp')
export class AppMainComp extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    onLoad() {
        this._initFramework();
    }
    private _initFramework() {
        const app = new App<IModuleMap>();
        // new TestImport();
        app.bootstrap([new FrameworkLoader()]);
        // app.bootstrap([new FrameworkLoader2()]);
        setModuleMap(app.moduleMap);
        app.init();
        window["m"] = m ;//挂在到全局，方便控制台调试，生产环境可以屏蔽=>安全
        m.helloWorld.say();
    }
    start() {

    }

    // update (dt) {}
}
