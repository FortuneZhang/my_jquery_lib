
function test() {

    var chinese_length = new ChineseLength('txtPrizeNote', 10, success_callback, error_callback);

    function success_callback() {
        console.log(chinese_length.get_length());
        console.log('success');
    }

    function error_callback() {
        console.log(chinese_length.get_length());
        console.log('error');
    }

    chinese_length.listen();
};


