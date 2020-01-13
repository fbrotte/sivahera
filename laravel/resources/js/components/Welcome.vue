<template>
    <div id="wrapper">
        <!-- Intro -->
        <section class="intro">
            <header>
                <h1><img class="logo" :src="'/img/logo.jpg'" /></h1>
                <p></p>
                <ul class="actions">
                    <li><a v-scroll-to="{el:'#navbar', offset: 50}" class="arrow scrolly"><span
                                class="label">Next</span></a></li>
                </ul>
            </header>
            <div class="content header">
                <span class="image fill imgfill" data-position="center"><img
                        :src="'/img/cafe-vert-cerise.jpg'" /></span>
            </div>
			<ul class="chooseLang chooseLangMobile">
                <li v-for="lang in $langs" @click="$setLang(lang)">
                    <img :src="'img/' + lang + '.png'">
                </li>
            </ul>
        </section>

        <div id="navbar">
            <a v-scroll-to="'#coffee-trade'">{{$lang.coffeetrade}}</a>
            <a v-scroll-to="'#conseil-management'">{{$lang.management.title}}</a>
			<a v-scroll-to="'#contact'">Contact</a>
            <ul class="chooseLang">
                <li v-for="lang in $langs" @click="$setLang(lang)">
                    <img :src="'img/' + lang + '.png'">
                </li>
            </ul>
        </div>

        <section>
            <header>
                <h2>Intro</h2>
            </header>
            <div class="content">
                <h3>{{$lang.what.title}}</h3>
                <p v-for="text in $lang.what.text">{{text}}</p>

                <h3>{{$lang.who.title}}</h3>
                <p v-for="text in $lang.who.text">{{text}}</p>
				<ul>
					<li v-for="text in $lang.who.direction">{{text}}</li>
				</ul>
            </div>
        </section>

        <!-- COMMERCE DE CAFE -->
        <section id="coffee-trade">
            <header>
                <h2>{{$lang.coffeetrade}}</h2>
            </header>
            <div class="content">
                <h3>{{$lang.coffee.title}}</h3>
				<blockquote><p class="slogant">{{$lang.citation}}</p></blockquote>
                <p v-for="text in $lang.coffee.text">{{text}}</p>
                <div class="gallery">
                    <a><img :src="'img/cerises-vertes.jpg'" alt="" /></a>
                    <a><img :src="'img/cuiellette.jpg'" alt="" /></a>
                </div>

                <h3>{{$lang.origin.title}}</h3>
                <p>{{$lang.origin.text}}</p>

                <h3>{{$lang.quality.title}}</h3>
				<strong>{{$lang.quality.tradition.title}}</strong>
                <p>{{$lang.quality.tradition.text}}</p>
				<strong>{{$lang.quality.equitable.title}}</strong>
                <p>{{$lang.quality.equitable.text}}</p>
                <div class="gallery">
                    <a><img :src="'img/mountain-kivu.jpg'" alt=""></a>
                    <a><img :src="'img/cuiellette-2.jpg'" alt="" /></a>
                </div>
            </div>
        </section>

        <!-- MANAGEMENT CONSEIL -->
        <section id="conseil-management">
            <header>
                <h2>{{$lang.management.title}}</h2>
            </header>
            <div class="content">
                <p>{{$lang.management.intro}}</p>
                <ul>
                    <li v-for="list in $lang.management.list">{{list}}</li>
                </ul>
                <div class="gallery">
                    <a class="landscape"><img :src="'img/reunnion.jpg'" alt="" /></a>
                </div>
                <p>{{$lang.management.atout}}</p>
                <p>{{$lang.management.exp}}</p>
            </div>
        </section>


        <!-- Section -->
        <section class="footer" id="contact">
            <header>
                <h2>CONTACT</h2>
            </header>
            <div class="content">
                <ul class="items">
                    <li>
                        <h3>{{$lang.contact.ide}}</h3>
                        <p>CHE-303.663.693</p>
                    <li>
                        <h3>Email</h3>
                        <a href="mailto:info@sivahera.com">info@sivahera.com</a>
                    </li>
                    <li>
                        <h3>{{$lang.contact.phone}}</h3>
                        <a href="tel:+41225481260"> <i class="fas fa-phone"></i> +41 (0) 22 548 12 60</a><br/>
                        <a href="tel:+41786189707"> <i class="fas fa-mobile-alt"></i>  +41 (0) 78 618 97 07</a>
                    </li>
                    <li>
                        <h3>{{$lang.contact.adress}}</h3>
                        <p>1234 Somewhere Road, Nashville, TN 00000</p>
                    </li>
                    <li>
                        <h3>{{$lang.contact.title}}</h3>
                        <p>{{$lang.contact.tram}}</p>
                    </li>
                    <!-- <li>
						<h3>{{$lang.contact.social}}</h3>
						<ul class="icons">
							<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
							<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
							<li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
						</ul>
					</li> -->
                </ul>
            </div>
        </section>

        <!-- Copyright -->
		<footer>
        	&copy; 2020 - <a href="#">Mention Légale</a> - Créer par <a href="https://comon-real.fr">Com'On Réal</a>.
		</footer>
    </div>
</template>
