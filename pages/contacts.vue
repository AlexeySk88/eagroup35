<template>
	<div class="contact"><p class="page_head">Контакты</p>
		<ul><span class="contact_name">Наши телефоны:</span>
			<li><a href="tel:508181"><span class="mobile_href">50-81-81 </span>(код города набирать НЕ ТРЕБУЕТСЯ)</a></li>
			<li><a href="tel:+79115018181"><span class="mobile_href">+7 (911) 501-81-81</span></a></li>
		</ul>
		<p><span class="contact_name">Наш адрес: </span>г. Вологда, ул. Лермонтова 15, оф. 308</p>
		<p><span class="contact_name">Мы ВКонтакте: </span><a class="href_pack" href="https://vk.com/public173601284" target="_blank">https://vk.com/public173601284</a></p>
		<p><span class="contact_name">Наш e-mail: </span><a class="href_pack" href="mailto:eagroup35@mail.ru">eagroup35@mail.ru</a></p>
		<p class="contact_name map_name">Карта</p>
		<div id="map"></div>
		<iframe class="ya_panam" src="https://yandex.ru/map-widget/v1/-/CBFK5Zcu0A" frameborder="1" allowfullscreen="true"></iframe>
	</div>
 </template>

 <style lang="less">
@import (reference) "~assets/text.less";
	.contact{
		text-align: center;
		.contact_name{
			.second_head();
			text-align: center;
		}
		.href_pack{
			.href_pack();
		}
		ul{
			padding-left: 0;
			li{
				display: block;
				.mobile_href{
					@media @mobile, @mobile-hor, @tablet, @tablet-hor{
						.href_pack();
					}
				}
			}
		}
		.map_name{
			margin-bottom: 0;
		}
		#map, .ya_panam{			
			width:70%; 
			height:400px;
			margin: 0 auto;
			box-shadow: 19px 0 22px -16px @shadow_col, -19px 0 22px -16px @shadow_col;
			@media @mobile, @mobile-hor, @tablet, @tablet-hor{
				width: 100%;
			}
			@media @mobile, @mobile-hor{
				height: 300px;
				margin: 0 auto;
			}
			@media @tablet, @tablet-hor{
				height: 500px;
			}
		}

		#map{
			margin-bottom: 20px;
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
		mounted() {
			var map;
			var c = 59.22149;
			var f = 39.892981;
			DG.then(function () {
				map = DG.map('map', {
					center: [c, f],
					zoom: 17
				});
			DG.marker([c, f]).addTo(map); 
			});		
		}
	}
 </script>
