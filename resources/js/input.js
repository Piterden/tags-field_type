$(function () {

    // Initialize tag inputs.
    $('.tags-field_type input').each(function () {

        var config = {};

        var source = $(this).data('source');
        var options = $(this).data('options');

        if (source || options) {

            config.typeahead = {
                minLength: 0,
                displayText: function (item) {
                    return item;
                },
                source: options ? options.split(',') : source
            };

            config.freeInput = $(this).data('allow_creating_tags')
        }

        $(this).tagsinput(config);
    });
});
