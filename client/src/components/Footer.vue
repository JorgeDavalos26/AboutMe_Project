<template>
    
    <footer class="bg-light text-center text-white">
        <div class="container p-4 pb-0">
            <section class="mb-4">
                <ul class="social-network social-circle">
                    <li>
                        <a href="https://www.facebook.com/guerrero.davalos.5" target="_blank" class="icoFacebook" title="Facebook">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                </ul>
                <ul class="social-network social-circle">
                    <li>
                        <a href="https://www.linkedin.com/in/jorge-alberto-davalos-sigala-a481bb222" target="_blank" class="icoLinkedin" title="Linkedin">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </li>
                </ul>  
            </section>
        </div>
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2021 Copyright: Jorge Dávalos
        </div>
    </footer>

</template>

<script>
export default 
{
  name: "Footer",
}
</script>

<style scoped>

/* Social Icons */

ul.social-network 
{
  list-style: none;
  display: inline;
  margin-left: 0 !important;
  padding: 0;
}

ul.social-network li 
{
  display: inline;
  margin: 0 5px;
}

.social-network a.icoFacebook:hover 
{
  background-color: #3B5998;
}

.social-network a.icoLinkedin:hover 
{
  background-color: #007bb7;
}

.social-network a.icoFacebook:hover i,
.social-network a.icoLinkedin:hover i 
{
  color: #fff;
}

.social-network a.socialIcon:hover
{
  color: #44BCDD;
}

.social-circle li a 
{
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 15px;
}

.social-circle li i 
{
  margin: 0;
  line-height: 30px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover 
{
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -ms--transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
}

.social-circle i 
{
  color: #595959;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  -ms-transition: all 0.8s;
  transition: all 0.8s;
}

.social-network a 
{
  background-color: #F9F9F9;
}

/* Footer */

footer 
{
  background: linear-gradient(59deg, #3A6073, #16222A);
}

</style>