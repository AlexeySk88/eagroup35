<template>
	<div class="share">
		<noscript><div><img src="https://mc.yandex.ru/watch/50632792" style="position:absolute; left:-9999px;" alt	="" /></div></noscript>
		<p class="page_head">Акции</p>
		<ul>
			<li v-for="s in share_array" :key="s.name" class="mini_page">
				<p class="share_head">{{s.name}}</p>
				<div v-html="s.text" class="share_text"></div>
			</li>
		</ul>
	</div>
</template>

<style lang="less">
@import (reference) "~assets/box_page.less";
@import (reference) "~assets/menu.less";
ul{
	@media @mobile{
	padding-left: 0;
}
	.mini_page{
		.box_page();
		p.share_head{
			text-shadow: 0 0 3px black;
			background: linear-gradient(to right, rgba(31,173,242, .7), rgba(31,173,242, 0));
		}		
	}
}
</style>

<script>
	export default{
		name: 'share',
		data() {
			return {
				share_array: [
				{name: 'ДЛЯ ГРАЖДАН И ПРЕДПРИНИМАТЕЛЕЙ', text: 'Дни бесплатных консультаций!<br>Вы можете совершенно бесплатно получить консультацию наших специалистов по вопросам  права, бухгалтерского и налогового законодательства.<br>Консультация проводится 17 января.<br>Для получения услуги Вам необходимо предварительно (за два дня до даты консультации) записаться по тел. 50-81-81 или 8 (911) 501-81-81'},
				{name: 'АКЦИЯ ЯНВАРЯ', text: `Специальная цена &laquo;- 15%&raquo; на все <router-link to = '../#/bus_service/org_price'>пакетные предложения</router-link> при заключении договора в январе сроком не менее 1 года.`},
					{name: 'АКЦИЯ ДЛЯ ТЕХ КТО ХОЧЕТ ОТКРЫТЬ ИЛИ РАСШИРИТ СВОЙ БИЗНЕС', text: 'Бесплатное оформление документов для регистрации ООО и ИП при заключении договора на бухгалтерское сопровождение сроком не менее 3-х месяцев'}
			]}
		}
	}
</script>