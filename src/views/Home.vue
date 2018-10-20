<template>
  <div class="home">
  	<transition name="logoSlide">
  		<div class="logo" v-if="get_show"></div>
 	 </transition>
  </div>
</template>

<style lang="less">
@logo-size: 55%;
.home{
	box-shadow: none !important;
	background: none !important;
	.logo{
	position: absolute;
	background-image: url('../views/image/logo800.png');
	width: @logo-size/2;
	height: (@logo-size*3)/4;
	background-size: contain;
	background-repeat: no-repeat;
	top: (100% - @logo-size/2)/2;
	left: (100% - @logo-size/2)/2;
	}
}
.logoSlide-enter-active{
  transition: opacity 6s;
}
.logoSlide-enter{
  opacity: 0;
}
</style>

<script>
	export default{
		name: 'home',
		data () {
			return{
				show: false
			}
		},
		computed:{
			get_show(){
				setTimeout(() => {this.show = true}, 3100);
				return this.show;
			}
		}
	}
</script>