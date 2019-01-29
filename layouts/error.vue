<template>
	<div>
		<div class='notfound'></div>
		<nuxt-link to="/">Вернуться на главную</nuxt-link>
	</div>
</template>

<style lang='less'>
	.notfound{
		background-image: url(../static/NotFound.jpg);
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		width: 100%;
		height: 100%;
		opacity: .8;
	}
</style>

<script>
export default {
  props: ['error']
}
</script>