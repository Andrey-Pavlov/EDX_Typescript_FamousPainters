define(["require", "exports", 'Painter', 'Renderer', 'PainterLoader', 'PaintExample', 'PainterDetail', 'jquery'], function (require, exports, Painter, renderer, loader, PaintExample, PainterDetail, $) {
    $(function () {
        var paintersSelect = document.getElementById('Painters'), painters = null;
        loader.load('/JSON/famousPainters.json').done(function (data) {
            if (data) {
                var famousPainters = data.famousPainters;
                famousPainters = famousPainters.map(function (painter) { return new Painter(painter.name, painter.photo, Object.keys(painter.details).map(function (key) {
                    var value = painter.details[key];
                    return new PainterDetail(key, value);
                }), painter.description, painter.examples.map(function (example) { return new PaintExample(example.title, example.link); })); });
                renderer.renderPainters(famousPainters);
                paintersSelect.onchange = function () {
                    try {
                        var painter = famousPainters
                            .filter(function (item) { return item.name === paintersSelect.value; })[0];
                        if (painter) {
                            renderer.renderPainter(painter);
                        }
                    }
                    catch (ex) {
                        alert(ex.message);
                    }
                };
            }
            else {
                renderer.renderError();
            }
        });
    });
});
//# sourceMappingURL=initializer.js.map