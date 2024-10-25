window.FontAwesomeKitConfig = {
    asyncLoading: { enabled: false },
    autoA11y: { enabled: true },
    baseUrl: "https://ka-f.fontawesome.com",
    baseUrlKit: "https://kit.fontawesome.com",
    detectConflictsUntil: null,
    iconUploads: {},
    id: 0,
    license: "pro",
    method: "css",
    minify: { enabled: false },
    token: null,
    v4FontFaceShim: { enabled: true },
    v4shim: { enabled: true },
    v5FontFaceShim: { enabled: true },
    version: "6.1.1"
};

(function (t) {
    if (typeof define === "function" && define.amd) {
        define("kit-loader", t);
    } else {
        t();
    }
})(function () {
    "use strict";

    function isSymbol(e) {
        return typeof e === "symbol";
    }

    function defineProperty(t, e, n) {
        if (e in t) {
            Object.defineProperty(t, e, { value: n, enumerable: true, configurable: true, writable: true });
        } else {
            t[e] = n;
        }
        return t;
    }

    function getOwnPropertySymbols(t) {
        const keys = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            const symbols = Object.getOwnPropertySymbols(t);
            keys.push(...symbols.filter(e => Object.getOwnPropertyDescriptor(t, e).enumerable));
        }
        return keys;
    }

    function mergeObjects(target, ...sources) {
        sources.forEach(source => {
            if (source) {
                Object.keys(source).forEach(key => {
                    defineProperty(target, key, source[key]);
                });
            }
        });
        return target;
    }

    function createPromise(executor) {
        if (typeof executor !== "function") {
            throw new TypeError("Promise resolver " + executor + " is not a function");
        }
        this._then = [];
        this._state = "pending";
        this._data = undefined;
        this._handled = false;

        const resolve = value => {
            if (this._state === "pending") {
                this._state = "fulfilled";
                this._data = value;
                this._then.forEach(callback => callback(value));
            }
        };

        const reject = reason => {
            if (this._state === "pending") {
                this._state = "rejected";
                this._data = reason;
                this._then.forEach(callback => callback(reason));
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    createPromise.prototype.then = function (onFulfilled, onRejected) {
        this._then.push(onFulfilled);
        if (this._state === "fulfilled") {
            onFulfilled(this._data);
        }
        return this;
    };
});
