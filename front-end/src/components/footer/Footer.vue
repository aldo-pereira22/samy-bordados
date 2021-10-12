<template>
    <footer id="footer">
        Samy Bordados &copy; 2021 
        <p>  Desenvolvido By: Aldo Pereira</p>
    </footer>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style scoped>
    #footer{
        height: 200px;
        background-color: #222;
        border-top: 4px solid #111;
        color:#FCBA03;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

   footer p{
        color: aliceblue;
    }
</style>