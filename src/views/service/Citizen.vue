 <template>
  <div class="cit_serve"><p class="page_head">Гражданам</p>
	<ul><span class="list_head">Услуги юриста</span>
		<li>консультации по вопросам гражданского, налогового, административного, корпоративного, трудового, земельного, жилищного права <span class="price">от 500,00 руб.</span></li>
		<li>представительство в судах общей юрисдикции <span class="price">от 5000,00 руб.</span></li>
		<li>представительство в арбитражных судах <span class="price">от 10000,00 руб.</span></li>
		<li>составление и сопровождение договоров  <span class="price">от 500,00 руб.</span></li>
		<li>сопровождение сделок с недвижимостью <span class="price">от 5000,00 руб.</span></li>
		<li>консультации по вопросам банкротства <span class="price">от 2 000,00 руб.</span></li>
	</ul>
	<ul><span class="list_head">Услуги бухгалтера</span>
		<li>оформление заявления и документов для получения налоговых вычетов, декларация 3-НДФЛ <span class="price">от 500,00 руб.</span></li>
		<li>консультации по вопросам налогообложения <span class="price">от 500,00 руб.</span></li>
	</ul>
  </div>
</template>

<style lang="less">
	@import (reference) '../style/text.less';
	@import (reference) '../style/menu.less';
	.list_head{
		.second_head_left();
		li{
			.normal_text();
		}
	}
</style>