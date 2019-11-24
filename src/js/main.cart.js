require.config({
    paths: {
        jquery: "./jquery.min",
        cart: "./lib/cart",
        cookie: "./lib/cookie"
    },
    shim: {}
});


require(['jquery',  'cart'],  function($, cart)  {   
    cart.render();
});