// let  baseUrl  =  "http://localhost:8080/damai";

define(['jquery', 'cookie'],  function($, cookie)  {    
    return  {        
        render: function() {
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.id).join(); //取id并且用,连接

                $.ajax({
                    url: `../../lib/cart.php`,
                    type: 'get',
                    data: {
                        idlist: idList
                    },
                    dataType: 'json',
                    success: function(res) {
                        let tempstr = '';
                        res.forEach(elm => {

                            // let pic = JSON.parse(elm.pic);

                            let arr = shop.filter((val, i) => {
                                // 从购物车cookie数据中取出于本条遍历数据相同id的元素
                                return val.id == elm.id;
                            });

                            tempstr += `
                            <tr class="item">
                                <td width=5%><input  type=checkbox checked></td>
                                <td width=15%><img src="../img/${JSON.parse(elm.picture)[0].src}" style="width:100%"></td>
                                <td width=33%>${elm.title}</td>
                                <td width=11%>￥${elm.price}</td>
                                <td width=16%>${arr[0].num}</td>
                                <td width=12% class="money">￥${elm.price*arr[0].num}</td>
                                <td width=6% class="del">删除商品</td>
                            </tr>
                            `;
                        });
                        $('.cart-order').append(tempstr);
                        var money = 0;
                        Array.from($('.money')).forEach(elm => {
                            money += Number($(elm).html().slice(1));
                        });
                        $('#heji').html(`合计(不含运费):￥${money}`);


                        //计算单价

                        // 全选
                        $('.all').on('click', function() {
                            $('input').prop('checked', $(this).prop('checked'));
                            count()
                        });
                        // 单独勾选
                        $('input:not(.all)').on('click', function() {
                            count()
                        })

                        // 删除行
                        $('.del').on('click', function() {
                            var i = $('.del').index($(this));
                            var shop = cookie.get('shop')
                            var k = JSON.parse(shop);
                            delete k[i];
                            var arr = [];
                            for (var j = 0; j < k.length; j++) {
                                if (k[j] != null) {
                                    arr.push(k[j]);
                                }
                            }
                            arr = JSON.stringify(arr);
                            cookie.set('shop', arr);
                            $('.item')[i].remove();
                            if (cookie) {
                                $('.replace').hide();
                                $('.pay').removeAttr('disabled');
                            } else {
                                $('.replace').show();

                            }
                            window.location.reload();
                            count();

                        });
                        // 计算input变化
                        $('.itemlist').on('change', '.num', function(e) {
                            var i = $('.num').index($(this))
                            $('.add').eq(i).html(($('.num').eq(i).val() * $('.pri').eq(i).html()).toFixed(2))
                            count()
                        });

                        // 计算总价+件数
                        function count() {
                            var sum = 0;
                            $('.jian').html(null)
                            $('.SUM1').html(null)
                            $('input:checked:not(.all)').parents('.c-box').siblings('.p-sum').find('.price2').text(function(i, val) {
                                sum += parseInt(val);
                            })
                            console.log($('input:checked:not(.all)'))
                            var ge = $('input:checked:not(.all)').length;
                            console.log(ge);
                            $('.jian').html(ge);
                            $('.SUM1').html(sum.toFixed(2))

                        }

                        //结算之后清空购物车
                        $('.pay').on('click', function() {
                            cookie.remove('shop');
                            setTimeout(function() {
                                window.location.reload();
                            }, 5000);
                        })




                    }
                });
            }
        }   
    }


});