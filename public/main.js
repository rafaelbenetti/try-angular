"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/components/app/app.module");
/* Polyfill */
require("core-js/es6/reflect");
require("core-js/es7/reflect");
require("zone.js/dist/zone");
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map