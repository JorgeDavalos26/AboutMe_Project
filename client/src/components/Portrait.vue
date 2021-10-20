<template>
        <div class="portrait">
            <div class="circular-portrait">
                <img src="../images/Perfil3.jpg" alt="">
            </div>
            <br>
            <h2>Tgo. Jorge Alberto Davalos Sigala</h2>
        </div>
</template>

<script>
export default 
{
  name: "Portrait",
}
</script>

 
<style scoped>

.portrait
{
    padding: 40px;
    width: 100%;
    background: linear-gradient(59deg, #f5f1f1, #a8bdca);
    text-align: center;
}

.circular-portrait
{
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
    border: solid rgb(3, 82, 134) 3px;
    margin: 0 auto;
}

.circular-portrait img
{
    width: 100%;
    height: auto;
}

h2
{
    font-family: 'Noto Sans Display', sans-serif;
}

</style>