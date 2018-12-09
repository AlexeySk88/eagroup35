<template>
	<div class="home animated slower fadeIn delay-3s">
		<noscript><div><img src="https://mc.yandex.ru/watch/50632792" style="position:absolute; left:-9999px;" alt	="" /></div></noscript>
		<p class="page_head">Приветствую Вас на нашем сайте!</p>
		<div class="foto_leader">
			<div class="foto_leader_night"></div>
		</div>
		<div><b>ЕАГруп</b> – это команда профессионалов, которая решит любой вопрос в области права, финансов, бухгалтерского и налогового учета.<br>Мы используем опыт практикующих специалистов в области гражданского, финансового, налогового, административного и корпоративного законодательства, руководителей предприятий малого и среднего бизнеса, экспертов в различных областях науки.</div>
		<p class="target">Наша главная цель – Ваш успех, Ваша уверенность, Ваша безопасность.</p>
		<span class="block_list">
			<ul><u>Работая с нами Вы получаете:</u>
				<li>готовые решения Ваших задач</li>
				<li>уверенность в неукоснительном соблюдении договоренностей</li>
				<li>гарантию качества</li>
				<li>широкую консультационную поддержку как в процессе сотрудничества, так и за его рамками.</li>
				<li>точное соблюдение сроков и своевременность предоставления результата</li>
				<li>конфиденциальность</li>
			</ul>
		</span>
		<span class="block_list">
			<ul><u>5 причин работы с нами:</u>
				<li>большой практический опыт</li>
				<li>профессиональная команда</li>
				<li>ответственность</li>
				<li>надежность и порядочность</li>
				<li>безупречная репутация</li>
			</ul>
		</span>
		<p>Предлагаем Вашему вниманию наши <router-link class='href_pack upper' to='../share'>акции</router-link> и <router-link class='href_pack upper' to='/bus_service/org_price'>пакетные предложения</router-link></p>
		<p class="success">ВАШ УСПЕХ – НАША РАБОТА</p>
		<div class="leader">Алексей Шулепов<br>Руководитель ЕАГруп</div>
	</div>
</template>

 <style lang="less">
 	@import (reference) "./style/text.less";
 	@import (reference) "./style/menu.less";
 	.foto_leader{
		border-radius: 100px;
 		width: 200px;
 		height: 200px;
 		margin: 0 30px 20px 120px;
 		background-image: url(./image/leader200.jpg);
 		background-size: cover;
 		overflow: hidden;
 		float: left;
 		box-shadow: 0 3px 7px #999, inset -3px 3px 20px @shadow_col;
 		@media @mobile, @mobile-hor{
 			width: 110px;
 			height: 110px;
 			border-radius: 55px;
 			display: inline-block;
 			margin: 0 10px 0 0;
 		}
 		@media @tablet, @tablet-hor{
 			width: 150px;
 			height: 150px;
 			border-radius: 75px;
 			margin: 0 20px 10px 0;
 		}
 		.foto_leader_night{
 			width: 100%;
 			height: 100%;
 			background: rgba(3,44,62, 0.4);
 		}
 	}
 	.target{
 		clear: left;
 		text-align: center;
 	}
	.success{
		.second_head;
		text-align:center;
	}
	.leader{
		padding-left: 20%;
	}
	.block_list{
		margin: 0 20px 0 0;
		display: inline-block;
		vertical-align: top;
		ul{			
			u{
				.second_head_left();
			}
		}		
	}

	.href_pack{
		.href_pack();
	}
	.upper{
		text-transform: uppercase;
	}
 </style>