define(["require", "exports", 'jquery'], function (require, exports, $) {
    var $painter = null;
    //Example how the RecipeCategories<T> generic is used.
    function renderPainters(painters) {
        var painterSelect = document.getElementById('Painters');
        painters.forEach(function (painter) {
            var opt = document.createElement('option');
            opt.setAttribute('title', painter.name);
            opt.innerHTML = painter.name;
            painterSelect.appendChild(opt);
        });
    }
    exports.renderPainters = renderPainters;
    function renderPainter(painter) {
        $painter = $('<div>').html($('#PainterTemplate').html());
        $painter.find('.painter-image').attr('src', painter.photo);
        $painter.find('.painter-image').attr('title', painter.name);
        $painter.find('.painter-title').text(painter.name);
        $painter.find('.painter-description').text(painter.description);
        renderPainterDetails(painter.details);
        renderExamples(painter.examples);
        $('#Painter').html($painter);
    }
    exports.renderPainter = renderPainter;
    function renderPainterDetails(details) {
        var $painterDetails = $painter.find('.painter-details');
        for (var i = 0; i < details.length; i++) {
            var $detail = $($('#PainterDetailTemplate').html());
            var detail = details[i];
            $detail.find('.name').text(detail.name.substr(0, 1).toUpperCase() + detail.name.substr(1) + ':');
            $detail.find('.text').text(detail.text);
            $painterDetails.append($detail);
        }
    }
    exports.renderPainterDetails = renderPainterDetails;
    function renderExamples(examples) {
        var $painterExamples = $painter.find('#Examples');
        for (var i = 0; i < examples.length; i++) {
            var $example = $($('#ExampleTemplate').html());
            $example.find('.paint').attr('src', examples[i].link);
            $example.find('.paint').attr('title', examples[i].title);
            $example.find('.title').text(examples[i].title);
            $painterExamples.append($example);
        }
    }
    exports.renderExamples = renderExamples;
    function renderError() {
        var examples = document.getElementById('Examples');
        examples.value = 'Unable to load data!';
    }
    exports.renderError = renderError;
});
//# sourceMappingURL=Renderer.js.map