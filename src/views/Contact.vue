 <template>
 	<div class="contact"><p class="page_head">Контакты</p>
		<ul><span class="contact_name">Наши телефоны:</span>
			<li><a href="tel:508181">50-81-81 (код города набирать НЕ ТРЕБУЕТСЯ)</a></li>
			<li><a href="tel:+79115018181">+7 (911) 501-81-81</a></li>
		</ul>
		<p><span class="contact_name">Наш e-mail: </span><a href="mailto:eagroup35@mail.ru">eagroup35@mail.ru</a></p>
		<p><span class="contact_name">Наш адрес: </span>г. Вологда, ул. Саммера, 53А</p>
		<p class="contact_name map_name">Карта</p>
		<div id="map" style="width:70%; height:400px"></div>
	</div>
 </template>

 <style lang="less">
 @import (reference) "./style/text.less";
	.contact{
		text-align: center;
		.contact_name{
			.second_head();
			text-align: center;
		}
		ul{
			padding-left: 0;
			li{
				display: block;
			}
		}
		.map_name{
			margin-bottom: 0;
		}
		#map{
			margin: 0 auto;
			box-shadow: 19px 0 22px -16px @shadow_col, -19px 0 22px -16px @shadow_col;
		}
		a{
			text-decoration: none;
			.normal_text();
		}
	}
 </style>

<script>
	export default {
		name: 'contact',
		created() {
		    let recaptchaScript = document.createElement('script')
		    recaptchaScript.setAttribute('src', 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full')
		    document.head.appendChild(recaptchaScript)
		},
		mounted() {
			let c = 59.234956;
			let f = 39.942348;
			var map;

		    DG.then(function () {
		        map = DG.map('map', {
		            center: [c, f],
		            zoom: 15
		        });
		        DG.marker([c, f]).addTo(map); 
		    });


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
            var yaCounter50632792 = new Ya.Metrika({id: 50632792});
		    yaCounter50632792.hit('/contact', {
		        title: 'Контактная информация'});
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
