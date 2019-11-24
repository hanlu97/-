let  baseUrl  =  "http://localhost:8080/damai";

define(['jquery'],  function($)  {    
    return  {        
        render:   function()  {           
            $.ajax({                
                type:   "get",
                // url:  baseUrl + '/lib/getall.php',
                url: '../../lib/getall.php',
                dataType:   "json",
                success: function(data)  {
                    console.log(data);
                    var con = "";
                    console.log(data);
                    data.forEach(value => {

                        var title = value.title;
                        var address = value.address;
                        var date = value.date;
                        var price = value.price;
                        var pic = JSON.parse(value.picture);
                        console.log(pic[0].src)
                        con += `
                        <a href="../html/product.html?id=${value.id}">
                        <div class="itemimg"><img src="../img/${pic[0].src}" alt=""></div>
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