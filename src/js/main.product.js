require.config({
    paths: {
        jquery: "./jquery.min",
        product: "./lib/product"
    },
    shim: {}
});


require(['jquery',  'product'],  function($, product)  {   
    product.render();
});