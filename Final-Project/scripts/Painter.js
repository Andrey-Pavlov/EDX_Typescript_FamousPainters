define(["require", "exports"], function (require, exports) {
    var Painter = (function () {
        function Painter(name, photo, details, description, examples) {
            if (details === void 0) { details = []; }
            if (examples === void 0) { examples = []; }
            this.name = name;
            this.photo = photo;
            this.details = details;
            this.description = description;
            this.examples = examples;
        }
        return Painter;
    })();
    return Painter;
});
//# sourceMappingURL=Painter.js.map