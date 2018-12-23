<template>
	<div class="home animated slower fadeIn delay-3s">
		<noscript><div><img src="https://mc.yandex.ru/watch/50632792" style="position:absolute; left:-9999px;" alt	="" /></div></noscript>
		<p class="page_head">Приветствую Вас на нашем сайте!</p>
		<div class="foto_leader">
			<div class="foto_leader_night"></div>
		</div>
		<p><b>ЕАГруп</b> &mdash; команда профессиональных юристов и бухгалтеров. <router-link class='href_pack' to='../about'>Подробнее</router-link></p>
		<!--<p>Мы используем опыт практикующих специалистов в области гражданского, финансового, налогового, административного и корпоративного законодательства, руководителей предприятий малого и среднего бизнеса, экспертов в различных областях науки.</p> -->	
		<ul class="serv_descript">Мы объединились с целью оказания квалифицированных услуг организациям, индивидуальным предпринимателям и гражданам:
			<li>ЮРИДИЧЕСКИЕ УСЛУГИ. <router-link class='href_pack' to='../service/legal'>Подробнее</router-link><br>Оказываем все виды юридических услуг консультации юриста, представительство в суде, защита прав потребителей, регистрация предпринимателей и ООО, арбитраж, составление и экспертиза договоров.</li>
			<li>БУХГАЛТЕРСКИЕ УСЛУГИ. <router-link class='href_pack' to='../service/booker'>Подробнее</router-link><br>Оказываем услуги подготовки бухгалтерской отчетности, бухгалтерского сопровождения, налогового планирования, выбора оптимальной системы налогообложения, анализа состояния бухгалтерского и налогового учета.</li>
			<li>КАДРОВОЕ СОПРОВОЖДЕНИЕ. <router-link class='href_pack' to='../service/pers_officer'>Подробнее</router-link><br>Оказывает услуги по учету Вашего кадрового состава от приема на работу до увольнения.</li>
			<li>УСЛУГИ ФИНАНСОВОГО КОНСУЛЬТАНТА. <router-link class='href_pack' to='../service/fin_consultant'>Подробнее</router-link><br>Оказываем услуги по подготовке бизнес-плана, технико-экономического обоснования проекта, анализа финансового-хозяйственной деятельности, налоговые консультации.</li>
		</ul>
		<p style="text-align: center">Предлагаем Вашему вниманию наши <router-link class='href_pack upper' to='../share'>акции</router-link> и <router-link class='href_pack upper' to='/service/price'>пакетные предложения</router-link></p>
		<p class="success upper">Наша главная цель – Ваш успех, Ваша уверенность, Ваша безопасность.</p>
		<div class="leader">Алексей Шулепов<br>Руководитель ЕАГруп</div>
	</div>
</template>

 <style lang="less">
 	@import (reference) "./style/text.less";
 	@import (reference) "./style/menu.less";
 	@foto_leader: 200px;
 	@foto_leader_mob: 110px;
 	@foto_leader_tab: 150px;
 	.foto_leader{
		border-radius: @foto_leader/2;
 		width: @foto_leader;
 		height: @foto_leader;
 		margin: 0 30px 20px 0px;
 		background-image: url(./image/leader200.jpg);
 		background-size: cover;
 		overflow: hidden;
 		float: left;
 		box-shadow: 0 3px 7px #999, inset -3px 3px 20px @shadow_col;
 		@media @mobile, @mobile-hor{
 			width: @foto_leader_mob;
 			height: @foto_leader_mob;
 			border-radius: @foto_leader_mob/2;
 			display: inline-block;
 			margin: 0 10px 0 0;
 		}
 		@media @tablet, @tablet-hor{
 			width: @foto_leader_tab;
 			height: @foto_leader_tab;
 			border-radius: @foto_leader_tab/2;
 			margin: 0 20px 10px 0;
 		}
 		.foto_leader_night{
 			width: 100%;
 			height: 100%;
 			background: rgba(3,44,62, 0.4);
 		}
 	}
 	.serv_descript{
 		padding-left: @foto_leader + 30px;
 		@media @mobile, @mobile-hor{
 			padding-left: 10px;
 		}
 		@media @tablet, @tablet-hor{
			padding-left: @foto_leader + 20px;
 		}
 		li{
 			margin-top: 20px;
 		}
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