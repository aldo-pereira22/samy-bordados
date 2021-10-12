<template>
    <footer id="footer">
        <div>
            Samy Bordados &copy; 2021 
        </div>
        <div>

        <p>  Desenvolvido por: <strong> Aldo Pereira </strong> </p>
        </div>
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
        color:#FFD700;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

   footer p{
        color: aliceblue;
    }
</style>