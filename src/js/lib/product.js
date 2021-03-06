let  baseUrl  =  "http://localhost:8080/damai";

define(['jquery', 'cookie'],  function($, cookie)  {    
    return  {        
        render:   function(callback)  {
            var id = location.search.split('=').pop();  
            $.ajax({
                type:   "get",
                url:  baseUrl + '/lib/getitem.php',
                dataType:   "json",
                data: {
                    id: id
                },
                success: function(res)  {
                    let title = res.title;
                    console.log(JSON.parse(res.picture)[0].src);
                    let con = `
                    <div data-v-22df3800="" data-spm="projectinfo" class="perform">
        <div data-v-22df3800="" class="w1200 box flex">
            <div data-v-22df3800="" class="flex1">
                <div data-v-22df3800="" class="hd">
                    <div data-v-22df3800="" class="cont">
                        <div data-v-22df3800="" class="cover"><span class="tip">总票代</span> <img alt="" class="poster" data-src="//img.alicdn.com/bao/uploaded/i3/2251059038/O1CN01DBBOIo2GdSDIl0dOn_!!0-item_pic.jpg_q60.jpg_.webp" src="../img/${JSON.parse(res.picture)[0].src}" lazy="loaded"></div>
                        <div data-v-22df3800="" class="order">
                            <div data-v-22df3800="" class="title">
                                <!----><span data-v-22df3800="">${title}</span></div>
                            <!---->
                            <div data-v-22df3800="" data-spm="projectinfo" class="address">
                                <div class="time">时间：${res.date}</div>
                                <div class="place">
                                    <div class="addr">${res.address}</div>
                                    <a data-spm="daddress" class="mapicon"></a>
                                </div>
                            </div>
                            <!---->
                            <div data-v-c5e1b140="" data-v-22df3800="" class="perform-notice">
                                <div data-v-c5e1b140="" class="perform-notice-prefix">
                                    <div data-v-c5e1b140="" class="speaker"></div><span data-v-c5e1b140="">预售</span></div>
                                <div data-v-c5e1b140="" class="perform-notice-content hastitle">
                                    <div data-v-c5e1b140="">本商品为预售商品，正式开票后将在第一时间为您配送</div>
                                    <div data-v-c5e1b140="" class="perform-notice-content-detail">预售期间，由于主办未正式开票，下单后无法立即配送票品。一般演出前2-6周出票，待正式开票后将在第一时间为您配送，请耐心等待。纸质票购票后可在订单详情页查看物流信息</div>
                                </div>
                                <div data-v-68a98614="" data-v-c5e1b140="" class="popup" style="display: none;">
                                    <div data-v-68a98614="" class="popup__hd"><span data-v-68a98614="">重要通知</span> <img data-v-68a98614="" src="../img/iiiii.png" alt="" class="popup__close"></div>
                                    <div data-v-68a98614="" class="popup__bd">
                                        <div data-v-c5e1b140="" data-v-68a98614="">预售期间，由于主办未正式开票，下单后无法立即配送票品。一般演出前2-6周出票，待正式开票后将在第一时间为您配送，请耐心等待。纸质票购票后可在订单详情页查看物流信息</div>
                                        <!---->
                                    </div>
                                </div>
                            </div>
                            <!---->
                            <div data-v-22df3800="" class="perform__order__box">
                                <!---->
                                <!---->
                                <!---->
                                <div class="notice-time"><img src="//img.alicdn.com/tfs/TB1gKnkSMTqK1RjSZPhXXXfOFXa-28-28.png" class="notice-time-icon">场次时间均为演出当地时间</div>
                                <div class="perform__order__select perform__order__select__calendar" style="display: none;">
                                    <div class="select_left">日期</div>
                                    <div class="select_right">
                                        <div class="select_right_list">
                                            <div class="main-container styles-conditional-class">
                                                <!---->
                                                <div class="functional-calendar">
                                                    <!---->
                                                    <div class="wh_top_changge_buttons">
                                                        <li>
                                                            <!---->
                                                        </li>
                                                        <li>
                                                            <!---->
                                                        </li>
                                                    </div>
                                                    <div class="calendar-for">
                                                        <section class="wh_container">
                                                            <div class="wh_content_all">
                                                                <div class="wh_top_changge">
                                                                    <li class="wh_content_li"></li>
                                                                </div>
                                                                <div class="wh_content week">
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_top_tag">
                                                                            周一
                                                                        </div>
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_top_tag">
                                                                            周二
                                                                        </div>
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_top_tag">
                                                                            周三
                                                                        </div>
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_top_tag">
                                                                            周四
                                                                        </div>
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_top_tag">
                                                                            周五
                                                                        </div>
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_top_tag">
                                                                            周六
                                                                        </div>
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_top_tag">
                                                                            周日
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="wh_content month">
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date wh_other_dayhide cursor-pointer">
                                                                            28
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date wh_other_dayhide cursor-pointer">
                                                                            29
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date wh_other_dayhide cursor-pointer">
                                                                            30
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date wh_other_dayhide cursor-pointer">
                                                                            31
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            1
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            2
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            3
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            4
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            5
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            6
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            7
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            8
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            9
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            10
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            11
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            12
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            13
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            14
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            15
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            16
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            17
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            18
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            19
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            20
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            21
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            22
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            23
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            24
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            25
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            26
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            27
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            28
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            29
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date cursor-pointer">
                                                                            30
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                    <div class="wh_content_item">
                                                                        <div class="wh_item_date wh_other_dayhide cursor-pointer">
                                                                            1
                                                                        </div>
                                                                        <!---->
                                                                        <!---->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="perform__order__select perform__order__select__performs">
                                    <div class="select_left">场次</div>
                                    <div class="select_right">
                                        <div class="select_right_list">
                                            <div class="select_right_list_item active"><span class="presell">预售</span> <span>2019-12-28 周六 19:30</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="perform__desc__info">
                                    <p></p>
                                </div>
                                <div class="perform__order__select">
                                    <div class="select_left">票档</div>
                                    <div class="select_right">
                                        <div class="select_right_list">
                                            
                                            <div class="select_right_list_item sku_item active">
                                                <!---->
                                                <div class="skuname">${res.price}</div>
                                            </div>
                                            
                                            <!---->
                                        </div>
                                    </div>
                                </div>
                                <div class="perform__order__price">
                                    <div class="number_left">数量</div>
                                    <div>
                                        <a href="javascript:;" id="btn-left" onclick={console.log(999)}>-</a><input type="text" id="btnbtn">
                                        <a href="javascript:;" id="btn-right">+</a>
                                    </div>
                                </div>
                                <div class="perform__desc__info perform__desc__info__active">
                                    <p>按付款顺序配票，优先连座配票</p>
                                </div>
                                <!---->
                                <div class="perform__order__price">
                                    <div class="number_left">合计</div>
                                    <div class="number_right"><span class="totol__price"><i>￥</i>688.00</span>
                                        <!----><span class="totle__offer go__login">登录后查看是否享受优惠</span></div>
                                </div>
                                <!---->
                                <div>
                                    <div data-spm="dbuy" class="buybtn"><a href="javascript:;">立即预订</a></div>
                                    <!---->
                                </div>
                                <!---->
                                <!---->
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-22df3800="" id="perform__bd" class="perform__bd">
                    <div data-v-df34eb04="" data-v-22df3800="" class="notice">
                        <div data-v-df34eb04="" class="notice-nav-fixed" style="display: none;">
                            <div data-v-df34eb04="" class="notice-nav-fixed-wrap"><span data-v-df34eb04="" class="notice-nav-item">
                项目详情<span data-v-df34eb04="" class="notice-nav-item-flag" style="display: none;"></span></span> <span data-v-df34eb04="" class="notice-nav-item">购票须知<span data-v-df34eb04="" class="notice-nav-item-flag" style="display: none;"></span></span>
                                <span data-v-df34eb04="" class="notice-nav-item">观演须知<span data-v-df34eb04="" class="notice-nav-item-flag" style="display: none;"></span></span>
                            </div>
                        </div>
                        <div data-v-df34eb04="" class="notice-nav"><span data-v-df34eb04="" class="notice-nav-item">
            项目详情<span data-v-df34eb04="" class="notice-nav-item-flag" style="display: none;"></span></span> <span data-v-df34eb04="" class="notice-nav-item">
            购票须知<span data-v-df34eb04="" class="notice-nav-item-flag" style="display: none;"></span></span><span data-v-df34eb04="" class="notice-nav-item">
            观演须知<span data-v-df34eb04="" class="notice-nav-item-flag" style="display: none;"></span></span>
                        </div>
                        <div data-v-df34eb04="" class="notice-content">
                            <div data-v-df34eb04="" data-spm="detail-info" class="detail">
                                <div id="detail" class="list">
                                    <div class="title">演出介绍</div>
                                    <div class="words">
                                        <p>
                                            <p></p>
                                            <p>她短短几年时间狂揽大陆及港台新人奖</p>
                                            <p>从《一千零一个愿望》到《青春住了谁》</p>
                                            <p>从《流星花园》到《海派甜心》</p>
                                            <p>她用歌声与演技填满了无数人的的青春</p>
                                            <p></p>
                                            <p><img width="600" height="400" src="../img/yang2.png"></p>
                                            <p>2017年9月，杨丞琳发行了演唱会主题曲《青春住了谁》</p>
                                            <p>同年12月，登陆台北小巨蛋，正式踏上了"青春住了谁"世界巡回演唱会的首站之旅</p>
                                            <p></p>
                                            <p>[无论是不是我的歌迷，我希望不管正值青春期或是已经过了青春的时光，但一直在回忆自己曾经度过的所有经歷的人，能够听著我的歌想起自己青春裡住的那个人、那件事。]</p>
                                            <p></p>
                                            <p><img width="600" height="400" src="../img/yang3.png"></p>
                                            <p>360度旋转，圆形无死角舞台，两个超长延伸舞台，还特意增加了左右"旋转臂"，与观众席的距离是前所未有的接近，更能方便歌迷观看零死角的舞台效果!</p>
                                            <p>当一束束绚烂震撼的光线照射在梦幻的旋转舞台上，光鲜亮丽、炫目震撼又极尽声光效果的视角冲击感令人目不暇接，真心实意为观众打造出一场无比震撼的视听体验。</p>
                                            <p></p>
                                            <p><img width="600" height="404" src="../img/yang4.png"></p>
                                            <p>十八年的累积、10张专辑，我们一起感同身受。第一首个人单曲《暧昧》，接踵而来的琳式情歌《左边》、《带我走》、《雨爱》……每首作品都传唱度极高，也成为青春记忆里必不可少的经典。</p>
                                            <p></p>
                                        </p>
                                    </div>
                                </div>
                                <div id="notice0" class="list">
                                    <div class="title">购票须知</div>
                                    <div class="words">
                                        <div>
                                            <p class="item_title">我最多可以购买几张？</p>
                                            <ul>
                                                <li>每个账号最多购买4张</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">需要实名购买吗？</p>
                                            <ul>
                                                <li>购买时您需要输入购票人身份证信息，每张门票对应一个证件号</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">下单成功后，是否允许修改配送信息？</p>
                                            <ul>
                                                <li>本项目不支持修改配送地址，请务必在下单前检查好您的收货地址</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">婴幼儿及儿童需要买票吗？</p>
                                            <ul>
                                                <li>儿童一律凭成人票入场</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">我的座位怎么安排？/现场入座要求是什么？</p>
                                            <ul>
                                                <li>请按门票对应位置，有序对号入座</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">我要怎么开发票？</p>
                                            <ul>
                                                <li>如需发票，请您在演出开始前通过订单页补开，发票将在演出结束后1个月左右，统一由开具方提供</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">我购买后是否可以退换票？</p>
                                            <ul>
                                                <li>票品为有价证券，非普通商品，其背后承载的文化服务具有时效性、稀缺性等特征，不支持退换。如您购票后无法正常观看，还请自行处理</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">演出时长</p>
                                            <ul>
                                                <li>演出时长约120分钟（以现场为准）</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">异常订购说明</p>
                                            <ul>
                                                <li>对于异常订购行为，大麦网有权在订单成立或者生效之后取消相应订单。异常订购行为包括但不限于以下情形： （1）通过同一ID订购超出限购张数的订单； （2）经合理判断认为非真实消费者的下单行为，包括但不限于通过批量相同或虚构的支付账号、收货地址（包括下单时填写及最终实际收货地址）、收件人、电话号码订购超出限购张数的订单
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="notice1" class="list">
                                    <div class="title">观演须知</div>
                                    <div class="words">
                                        <div>
                                            <p class="item_title">入场时间</p>
                                            <ul>
                                                <li>提前60分钟，仅供参考，最终以现场实际入场时间为准</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">禁止携带物品</p>
                                            <ul>
                                                <li>由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">寄存说明</p>
                                            <ul>
                                                <li>无寄存处，请自行保管携带物品</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">主要演员（团体）</p>
                                            <ul>
                                                <li>杨丞琳</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">最低演出时长</p>
                                            <ul>
                                                <li>120分钟</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">最低演出曲目数</p>
                                            <ul>
                                                <li>28首</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p class="item_title">大麦网初始开售时全场可售门票总张数</p>
                                            <ul>
                                                <li>6000张</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-22df3800="" class="content-right">
                <div data-v-cc72a500="" data-v-22df3800="" class="right-content">
                    <div data-v-cc72a500="" class="service"><a data-v-cc72a500="" data-spm="dseatpic" class="seat__map disabled"><i data-v-cc72a500=""></i>查看座位图</a>
                        <div data-v-cc72a500="" class="service-note">
                            <div data-v-cc72a500="" class="service-note-name"><i data-v-cc72a500="" class="support-icon support-no"></i> 不支持退
                            </div>
                            <div data-v-cc72a500="" class="service-note-desc">票品为有价证券，非普通商品，其背后承载的文化服务具有时效性、稀缺性等特征，不支持退换。如您购票后无法正常观看，还请自行处理</div>
                        </div>
                        <div data-v-cc72a500="" class="service-note">
                            <div data-v-cc72a500="" class="service-note-name"><i data-v-cc72a500="" class="support-icon support-no"></i> 不支持选座
                            </div>
                            <div data-v-cc72a500="" class="service-note-desc">本项目不支持自主选座，同一个订单优先连座</div>
                        </div>
                        <div data-v-cc72a500="" class="service-note">
                            <div data-v-cc72a500="" class="service-note-name"><i data-v-cc72a500="" class="support-icon support-yes"></i> 快递票
                            </div>
                            <div data-v-cc72a500="" class="service-note-desc">快递票：纸质票会在开票后快递到您留下的收货地址，需您承担邮寄费用。注：离开演时间仅3天时，不再寄送快递票，支持在指定取票地点取票（具体以下单后票夹信息为准）</div>
                        </div>
                        <div data-v-cc72a500="" class="service-note">
                            <div data-v-cc72a500="" class="service-note-name"><i data-v-cc72a500="" class="support-icon support-yes"></i> 纸质发票
                            </div>
                            <div data-v-cc72a500="" class="service-note-desc">该项目支持开具纸质发票，请您在演出开始前通过订单页补开，发票将在演出结束后1个月左右，统一由主办方提供</div>
                        </div>
                        <div data-v-cc72a500="" class="service-qrcode">
                            <div data-v-cc72a500="" class="service-qrcode-text"><span data-v-cc72a500="">手机扫一扫</span> <span data-v-cc72a500="">下单更快捷</span></div> <img data-v-cc72a500="" src="https://damai-item.oss-cn-beijing.aliyuncs.com/projQcode/6070270003/2/607027000340.jpg" alt="" class="service-qrcode-img"></div>
                    </div>
                    <div data-v-68a98614="" data-v-cc72a500="" class="popup" style="display: none;">
                        <div data-v-68a98614="" class="popup__hd"><span data-v-68a98614="">查看座位图</span></div>
                        <div data-v-68a98614="" class="popup__bd"><img data-v-cc72a500="" data-v-68a98614="" src="../img/yang4.png" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                    `;
                    $('.add').append(con);


                    //         res.forEach(value => {
                    //             console.log(value.title);
                    //             var title = value.title;
                    //             var place = value.address;
                    //             var price = value.price;
                    //             var pic = value.picture;
                    //             var date = value.date;
                    //             con = `

                    // `
                    //         })      
                    $('.right-content-suggest').html(con);




                    $("#btn-right").on("click", function() {
                        var num = $("#btnbtn").val();
                        // console.log(num);

                        $("#btnbtn").val(++num);
                        console.log($('#btnbtn').val())

                        $(".totol__price").text(Number(res.price * ($("#btnbtn").val())))
                    });

                    $("#btn-left").on("click", function() {
                        var num = $("#btnbtn").val();
                        if (num >= 2) $("#btnbtn").val(--num);
                        $(".totol__price").text(Number(res.price * ($("#btnbtn").val())))
                    })



                    $(".totol__price").text(666);
                    // console.log($(".totol__price").text())

                    $(".totol__price").text(Number(688 * ($("#btnbtn").val())));
                    callback && callback(res.id, res.price);
                }
            });        
        },
        addItem: function(id, price, num) {
            let shop = cookie.get('shop'); // 获取cookie数据 判断是否存在
            // 如果有cookie  修改cookie
            // 如果有cookie  添加cookie

            let product = {
                id: id,
                price: price,
                num: num
            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 购物车没有内容 新建一个购物车
                shop.push(product); //将商品放入购物车
            }
            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
});