import Painter = require('Painter');
import PainterLoader = require('PainterLoader');
import renderer = require('Renderer');
import loader = require('PainterLoader');
import PaintExample = require('PaintExample');
import PainterDetail = require('PainterDetail');
import $ = require('jquery');

$(() => {
    var paintersSelect = (<HTMLSelectElement>document.getElementById('Painters')),
        painters: Painter[] = null;

    loader.load('/JSON/famousPainters.json').done((data) => {
        if (data) {
            var famousPainters: any[] = data.famousPainters;

            famousPainters = famousPainters.map(painter => new Painter(
                painter.name,
                painter.photo,
                Object.keys(painter.details).map(function(key) {
                    var value = painter.details[key];

                    return new PainterDetail(key, value);
                }),
                painter.description,
                painter.examples.map(example => new PaintExample(
                    example.title,
                    example.link
                ))
            ));

            renderer.renderPainters(famousPainters);

            paintersSelect.onchange = function () {
                try {
                    var painter = famousPainters
                    //Find selected item by name
                        .filter(item => item.name === paintersSelect.value)[0];

                    if (painter) {
                        renderer.renderPainter(painter);
                    }
                }
                catch (ex) { alert(ex.message) }
            };
        }
        else {
            renderer.renderError();
        }
    });
});
  




