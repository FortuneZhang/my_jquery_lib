function ChineseLength(listen_element_id, size, success_callback, error_callback) {
    this.id = listen_element_id;
    this.max_size = size;
    this.success_callback = success_callback;
    this.error_callback = error_callback;

}

ChineseLength.prototype.listen = function () {
    var me = this;

    $("#" + this.id).bind('keyup change', function () {
        var size = me.get_length();
        if (size <= me.max_size) {
            me.success_callback();
        } else {
            me.error_callback();
        }
    })


};

ChineseLength.prototype.get_length = function () {
    var value = $.trim($("#" + this.id).val()), length = 0;

    for (var i = 0, text_length = value.length; i < text_length; i += 1) {
        if (value[i].match(/[^\x00-\xff]/ig) != null) {
            length += 2;
        } else {
            length += 1;
        }
    }
    return length;
};