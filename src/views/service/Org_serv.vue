 <template>
	<div class="sevice">
		<ul class="sidemenu">
			<li class="animated fadeInLeft fast legal"><router-link to="/bus_service/org_legal">Услуги юриста</router-link></li>
			<li class="animated fadeInLeft fast booker"><router-link to ="/bus_service/org_booker">Услуги бухгалтера</router-link></li>
			<li class="animated fadeInLeft fast per_officer"><router-link to ="/bus_service/org_pers_officer">Услуги кадрового сопровождения</router-link></li>
			<li class="animated fadeInLeft fast fin_cons"><router-link to ="/bus_service/org_fin_consultant">Услуги финансового консультанта</router-link></li>
			<li class="animated fadeInLeft fast price"><router-link to ="/bus_service/org_price">Пакетные предложения</router-link></li>
		</ul>
		<router-view class="service_content"></router-view>
	</div>
</template>

<style lang="less">
@slide_speed: 800ms;
@import (reference) "../style/menu.less";
@import (reference) "../style/text.less";
@import (reference) "../../../node_modules/animate.css/animate.min.css";
@service_padding: 170px;
@service_padding_mob: 100px;
.sidemenu{
	position: absolute;
    top: 250px;
    left: 10%;
    padding-left: 0;
	width: @service_padding;
	border-right: 1px solid @text-col;
	margin-right: 60px;
	.menu_style(block, 20px, 0);
	li{
		padding-bottom: 20px;
	}
	@media @mobile{
		top: 135px;
		left: 15px;
		.menu_style(block, 15px, 0);
		width: @service_padding_mob;
	}
}
.service_content{
	margin-left: @service_padding + 15px;
	overflow: hidden;
	@media @mobile{
		margin-left: @service_padding_mob;
	}
}

.animated.fadeInLeft.fast.booker{
	animation-delay: @slide_speed;
}

.animated.fadeInLeft.fast.per_officer{
	animation-delay: @slide_speed*2;
}

.animated.fadeInLeft.fast.fin_cons{
	animation-delay: @slide_speed*3;
}

.animated.fadeInLeft.fast.price{
	animation-delay: @slide_speed*4;
}
</style>