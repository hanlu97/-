let  baseUrl  =  "http://localhost:8080/damai";

define(['jquery'],  function($)  {    
    return  {        
        render:   function()  {
            console.log(2);            
            $.ajax({                
                type:   "get",
                url:  baseUrl + '/lib/getall.php',
                dataType:   "json",
                success: function(data)  {
                    var con = "";
                    data.forEach(value => {
                        console.log(value.price);
                        var title = value.title;
                        var address = value.address;
                        var date = value.date;
                        var price = value.price;
                        var pic = value.picture;
                        con += `
                        <a href="">
                        <div class="itemimg"><img src="../img/${pic}" alt=""></div>
                        <div class="iteminfo">
                            <div class="title">
                               ${title}
                            </div>
                            <div class="venue">
                                ${
                                    address
                                }
                            </div>
                            <div class="showtime">
                                ${
                                    date
                                }
                            </div>
                            <div class="price">￥
                               ${
                                   price
                               }起

                            </div>
                        </div>
                    </a>
                        `

                        $('.box-right').html(con);
                    });                                              
                }                      
            })        
        }    
    }
});