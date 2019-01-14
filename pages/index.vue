<template>
    <div class="vologda">
      <div class="night">
      <div class="under_telefon animated fadeInDown slow delay-5s">услуги в области<br>права и финансов</div>

      <div class="logo animated fadeIn slower delay-3s"></div>
      <div id="phrase">
      <cite>&laquo;{{get_text}}&raquo;</cite>
      <div>{{get_autor}}</div>
      </div>
    <ul class="menu animated fadeInRight slower">
      <li><router-link to = "/" exact>Главная</router-link></li>
      <li><router-link to = "/service/legal">Услуги</router-link></li>
      <li><router-link to = "/share">Акции</router-link></li>
      <li><router-link to = "/contact">Контакты</router-link></li>
      <li><router-link to = "/about">О нас</router-link></li>    
    </ul>
      <a class="telefon animated fadeInDown slow delay-5s" href="tel:508181">Телефон: 50-81-81</a>
      <router-view class="main_rout"></router-view>
      <noindex><div class="footer"><hr>Разработка: Скриплёнок Алексей; &emsp; Фото: Бачтуб Дмитрий</div></noindex>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Тестовое задание'
  }
}
</script>

<style lang="less">
@import (reference) "../assets/menu.less";
@import (reference) "../assets/text.less";
@import (reference) "../assets/media.less";
@import "../node_modules/animate.css/animate.min.css";
@back_col: rgba(0, 0, 0, .65);
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
    background: @back_col;
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
        .href_pack();
        top: 53px;
        left: 10px;
      }
      @media @mobile-hor{
        .href_pack;
        top: 53px;
        left: 20px;
      }
      @media @tablet, @tablet-hor{
        .href_pack;
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

