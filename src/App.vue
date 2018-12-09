<template>
    <div class="vologda">
      <div class="night">
      <div class="under_telefon animated fadeInDown slow delay-5s">услуги в области<br>права и финансов</div>
	    <a class="telefon animated fadeInDown slow delay-5s" href="tel:508181">Телефон: 50-81-81</a>
	    <div class="logo animated fadeIn slower delay-3s"></div>
	    <div id="phrase">
		  <cite>&laquo;{{get_text}}&raquo;</cite>
		  <div>{{get_autor}}</div>
	    </div>
		<ul class="menu animated fadeInRight slower">
		  <li><router-link to = "/" exact>Главная</router-link></li>
		  <li class="top_menu" v-on:mouseover='activeFlipX = true' v-on:mouseout='activeFlipX = false'><a>Услуги</a>
        <ul class="submenu animated" v-bind:class="{flipInX: activeFlipX, flipOutX: !activeFlipX}">
          <li><router-link to = "/bus_service/org_legal" exact>Бизнесу</router-link></li>
          <li><router-link to = "/citizen" exact>Гражданам</router-link></li>
        </ul>
      </li>
      <li><router-link to = "/share">Акции</router-link></li>
		  <li><router-link to = "/contact">Контакты</router-link></li>  
		</ul>
		  <router-view class="main_rout"></router-view>
      <noindex><div class="footer"><hr>Разработка: Скриплёнок Алексей; &emsp; Фото: Бачтуб Дмитрий</div></noindex>
    </div>
  </div>
</template>

<style lang="less">
@import (reference) "./views/style/menu.less";
@import (reference) "./views/style/text.less";
@import (reference) "./views/style/media.less";
@import "../node_modules/animate.css/animate.min.css";
@back-col: rgba(0, 0, 0, .65);
@back-col-rout-view: rgba(15,20,25, 0.9);
.telefon_style(){
  font-weight: bold;
  color: @text-col;
  text-shadow: @shadow;
  padding: .7;
}
.vologda{
    height: 100vh;
    width: 100wh;
    font-family: 'Roboto Slab', serif;
    overflow: hidden;
    .normal_text();
    background-image: url(./views/image/vologda2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    .night{
    height: 100vh;
    width: 100wh;
    background: @back-col;
    .menu{
      margin-top: 0;
      margin-bottom: 50px;
      .menu_style(inline-block, 20px, 30px);
      text-align: right;
      padding: @tel-location 10% 0 0;
      @media @mobile, @mobile-hor{
        margin-bottom: 30px;
        padding: @tel-location - 20px 5% 0 0;
      }
      @media @mobile{
        .menu_style(inline-block, 16px, 10px);
      }
      @media @mobile-hor{
        .menu_style(inline-block, 16px, 30px);
      }
      @media @tablet-hor{
        .menu_style(inline-block, 18px, 35px);
        padding: @tel-location - 20px 40px 0 0;
      }
      .top_menu{
        cursor: pointer;
        .submenu{
          position: absolute;
          top: 100%;
          right: 350px;
          @media @mobile{
            right: 86px;
            padding: 0;
          }
          @media @mobile-hor{
            right: 116px;
            padding: 0;
          }
          @media @tablet{
            right: 208px;
          }
          @media @tablet-hor{
            right: 164px;
          }
        }
      }
    }
      .logo{
         position: absolute;
	       background-image: url('./views/image/logo200.png');
	       background-size: cover;
         background-repeat: no-repeat;
	       height: 130px;
	       width: 213px;
	       top: 20px;
	       left: calc((50% - 148px/2) - 30px);
         @media @mobile{
          top: 5px;
          left: 193px;
          height: 65px;
          width: 106px;
         }
         @media @mobile-hor{
          height: 65px;
          width: 106px;
          top: 10px; 
          left: calc(50% - 106px/2);
         }
         @media @tablet, @tablet-hor{
          top: 10px;
          height: 95px;
          width: 156px;
         }
      }
      .telefon{
      position: absolute;
      top: @tel-location;
      left: 7%;
	    .telefon_style();
      text-decoration: none;
      @media @mobile{
        top: 53px;
        left: 10px;
      }
      @media @mobile-hor{
        top: 53px;
        left: 20px;
      }
      @media @tablet, @tablet-hor{
        top: 77px;
      }
    }
    .under_telefon{
      position: absolute;
      top: 35px;
      left: 7%;
      .telefon_style();
      text-transform: uppercase;
      @media @mobile{
        left: 10px;
        top: 10px;
      }
      @media @mobile-hor{
        top: 5px;
        left: 20px;
      }
      @media @tablet, @tablet-hor{
        top: 17px;

      }
    }
    #phrase{
      position: absolute;
      top: 15px;
      left: calc(80% - 200px);
      width: 400px;
      text-align: center;
      font-size: 15px;
      @media @mobile{
        display: none;
      }
      @media @mobile-hor{
        top: 10px;
        left: calc((50% + 106px/2) + 10px); /* 106px - width logo in mobile-hor media */ 
        font-size: 10px;
        width: calc((50% - 106px/2) - 20px);
      }
      @media @tablet, @tablet-hor{
        top: 10px;
        left: calc((50% + 156px/2) + 10px); /* 106px - width logo in mobile-hor media */ 
        font-size: 13px;
        width: calc((50% - 156px/2) - 20px);
      }
    }
      .main_rout{
        overflow: auto;
        width: 80%;
        height: calc(92% - 130px);
        margin: 0 auto;
        padding: 0 30px 0 30px;
        background: @back-col-rout-view;
        box-shadow: 4px 4px 20px 20px @back-col-rout-view;
        @media @mobile, @mobile-hor{
        height: calc(100% - (@tel-location - 20px) - (16px * 2) - 40px); /*(@tel-location - 20px) - padding-top menu, 16px*2 - font-size menu */
        }
    }
    .footer{
      font-size: 10px;
      position: absolute;
      bottom: 0;
      width: 60%;
      margin: 0 20%;
      text-align: center;
      opacity: 0.75;
      @media @mobile{
        width: 100%;
        margin: 0 auto;
      }      
      hr{
        margin: 0 auto;
        opacity: 0.3;
       }
    }  
  }
  a.router-link-active{
    font-weight: bold;
  }
}
.page_head{
    .first_head();
    @media @mobile{
      margin: 7px 0;
    }
}

.list_head{
  .second_head_left();
}
</style>

<script>
  export default {
  name: 'phrase',
  data () {
    return {
      phraseArray: [
        {text: 'А судьи кто?', autor: 'А.С. Грибоедов'},
        {text: 'В юридических вопросах следует обращаться не к здравому смыслу, а к юристам', autor: 'Роберт Лембке'},
        {text: 'Беден не тот, кто мало имеет, а тот, кому всегда мало этого', autor: 'Сенека'},
        {text: 'Все-таки интересно получается: надувают рядовых вкладчиков, а лопаются почему-то банки', autor: 'Аврелий Марков'},
        {text: 'Существует три вида лжи: ложь, наглая ложь и налоговая отчетность', autor: 'Автор неизвестен'},
        {text: 'Существует три вида лжи: ложь, наглая ложь и статистика', autor: 'Бенджамин Дизраэли (Марк Твен)'},
        {text: 'Только природа делает великое даром', autor: 'Герцен А.И'},
        {text: 'Острить и занимать деньги нужно внезапно', autor: 'Генрих Гейне'},
        {text: 'Мудрецы и бухгалтера одинаково спокойно относятся к деньгам', autor: 'Эмиль Кроткий'},
        {text: 'Жизнь — самый лучший бухгалтер. Вы никогда не заплатите ей меньше, чем получили от неё', autor: 'Фарос'},
        {text: 'Ничто не стоит так дорого, как дёшево отделаться', autor: 'Народная мудрость'},
        {text: 'Ни что так не усиливает веру в человека как предоплата....', autor: 'Народная мудрость'},
        {text: 'Честность и верность — это дорогой подарок, которого от дешевых людей не стоит ожидать....', autor: 'Джордж Бернард Шоу'},
        {text: 'Надо стараться все делать хорошо: плохо оно само получиться…', autor: 'Андрей Миронов'},
        {text: 'Аналитики, если и правы, то весьма приблизительно. Бухгалтеры, даже если и ошибаются, то с точностью до копейки', autor: 'Народная мудрость'}
    ],
    num: 0,
    menu_slide: false,
	tel_height: false,
	show_prase: true,
  activeFlipX: false
      }
  },
  computed:{
      set_num(){setInterval(() => {
          if(this.num < this.phraseArray.length-1) this.num = this.num + 1;
          else this.num = 0;
        }, 10000)},
      get_text(){this.set_num; return this.phraseArray[this.num].text},
      get_autor(){return this.phraseArray[this.num].autor},
	},
  mounted(){
      (function (d, w, c) {
          (w[c] = w[c] || []).push(function() {
              try {
                  w.yaCounter50632792 = new Ya.Metrika2({
                      id:50632792,
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                  });
              } catch(e) { }
          });

          var n = d.getElementsByTagName("script")[0],
              s = d.createElement("script"),
              f = function () { n.parentNode.insertBefore(s, n); };
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://mc.yandex.ru/metrika/tag.js";

          if (w.opera == "[object Opera]") {
              d.addEventListener("DOMContentLoaded", f, false);
          } else { f(); }
      })(document, window, "yandex_metrika_callbacks2");
  }
}
</script>

