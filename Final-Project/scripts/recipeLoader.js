///// <reference path="typings/jquery.d.ts" />
var PainterLoader = (function () {
    function PainterLoader(url) {
        this.url = url;
    }
    PainterLoader.prototype.load = function () {
        var _this = this;
        return $.getJSON(this.url, function (data) {
            _this.mapData(data);
        });
    };
    PainterLoader.prototype.mapData = function (data) {
        var _this = this;
        if (data) {
            var famousPainters = data.famousPainters;
            famousPainters.forEach(function (painter) {
                var painterClassObj = new Painter(painter.name, painter.style, _this.getExamples(painter));
                painters.push(painterClassObj);
            });
            renderer.renderCategories(painters);
        }
        else {
            renderer.renderError();
        }
    };
    //getFoodGroups(category) : FoodGroup[] {
    //    //Map foodgroups data to TS object
    //    return category.foodGroups.map((foodGroup) => {
    //        var group = new FoodGroup(foodGroup.title);
    //        return group;
    //    });
    //}
    PainterLoader.prototype.getExamples = function (painter) {
        return painter.examples.map(function (example) {
            return new PaintExample(example.name);
        });
    };
    return PainterLoader;
})();
//# sourceMappingURL=recipeLoader.js.map