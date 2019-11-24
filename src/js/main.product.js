require.config({
    paths: {
        jquery: "./jquery.min",
        cookie: "./lib/cookie",
        product: "./lib/product"

    },
    shim: {

    }
});


require(['jquery',  'product'],  function($, product)  {   
    product.render(function(id, price) { // 渲染页面
        $('.buybtn').on('click', function() {
            product.addItem(id, price, $('#btnbtn').val());
            location.href = "../html/cart.html";
        });
    });

});