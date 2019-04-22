"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Component = /** @class */ (function () {
    function Component(_selector, _template) {
        this._selector = _selector;
        this._template = _template;
    }
    Object.defineProperty(Component.prototype, "selector", {
        get: function () {
            return this._selector.toUpperCase();
        },
        set: function (value) {
            this._selector = value;
        },
        enumerable: true,
        configurable: true
    });
    Component.prototype.render = function () { };
    return Component;
}());
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(_selector, _template) {
        var _this = _super.call(this, _selector, _template) || this;
        _this._selector = _selector;
        _this._template = _template;
        return _this;
    }
    Table.prototype.render = function () {
        _super.prototype.render.call(this);
    };
    return Table;
}(Component));
var c = new Component("div#one", "<h1>Hello</h1>");
c.selector = "div#two";
c.render();
