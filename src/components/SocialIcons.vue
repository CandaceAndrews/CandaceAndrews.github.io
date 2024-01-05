<template>
    <div class="socials">
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/candace-andrews/" target="_blank">
            <img src="@/assets/icons/LinkedIn_2.gif" alt="LinkedIn" loading="lazy" class="socicon" />
        </a>
        <!-- Github -->
        <a href="https:www.github.com/CandaceAndrews" target="_blank">
            <img src="@/assets/icons/icons8-github.gif" alt="Github" class="socicon" />
        </a>
    </div>
</template>

<script>
export default {
    name: 'SocialIcons',
};
</script>

<style>
.socials {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 12%;
    right: 1%;
}

.socicon {
    width: 2rem;
    height: 2rem;
}
</style>