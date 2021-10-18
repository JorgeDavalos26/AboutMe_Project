<template>

    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand mb-0 h1" href=".">
                    About Me
                </a>
                <button class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#h1-Documents">
                                Documents
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#h1-Projects">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    
</template>

<script>
export default 
{
  name: "Navbar",
}
</script>


<style scoped>


</style>