let  baseUrl  =  "http://localhost:8080/damai";

define(['jquery'],  function($)  {    
    return  {        
        render:   function()  {
            console.log(2);            
            $.ajax({                
                type:   "get",
                url:  baseUrl + '/lib/getitem.php',
                dataType:   "json",
                // data: {
                //     id: id
                // },
                success: function(res)  {
                    console.log(res);
                    con = '';
                    res.forEach(value => {
                        console.log(value.title);
                        var title = value.title;
                        var place = value.address;
                        var price = value.price;
                        var pic = value.picture;
                        var date = value.date;
                        con += `
                            <div data-v-29d791db="" data-v-740a5c88="" class="item"><img data-v-29d791db="" class="item-img" src="../img/${pic}" lazy="loaded">
                                <div data-v-29d791db="" class="item-info">
                                    <div data-v-29d791db="" class="item-info-main">
                                        <div data-v-29d791db="" class="item-info-name">${title}</div>
                                        <div data-v-29d791db="" class="item-info-address">${place}</div>
                                        <div data-v-29d791db="" class="item-info-date">${date}</div>
                                        <div data-v-29d791db="" class="item-info-tags"></div>
                                    </div>
                                    <div data-v-29d791db="" class="item-info-price"><span data-v-29d791db="" class="item-info-price-number">${price}</span>起</div>
                                </div>
                            </div>
                            `
                    })      
                    $('.right-content-suggest').html(con);
                }      
            })        
        }    
    }


});