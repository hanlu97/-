require.config({    
    paths:  {        
        jquery:   "./jquery.min",
        home:   "./lib/home"    
    },
        shim:  {}
});

require(['jquery',  'home'],  function($,  home)  {   
    home.render();
});