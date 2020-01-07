<template>
    <div>
        <ul class="chooseLang">
            <li v-for="lang in $langs" @click="$setLang(lang)">
                <img :src="'img/' + lang + '.png'">
            </li>
        </ul>
        <main class="py-4">
            <router-view></router-view>
        </main>
    </div>
</template>