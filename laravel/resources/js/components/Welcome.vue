<template>
			<div id="wrapper">

				<!-- Intro -->
					<section class="intro">
						<header>
							<h1>SIVAHERA</h1>
							
							<p>SIVAHERA MANAGEMENT SA</p>
							<ul class="actions">
								<li><a v-scroll-to="'#first'" class="arrow scrolly"><span class="label">Next</span></a></li>
							</ul>
						</header>
						<div class="content">
							<span class="image fill imgfill" data-position="center"><img :src="'/img/cafe-vert-cerise.jpg'"/></span>
						</div>
					</section>
                    <div id="first"></div>
                    <section>
                        <header><h2>Intro</h2></header>
                        <div class="content">
                            <h3>{{$lang.what.title}}</h3>
                            <p>{{$lang.what.text}}</p>

                            <h3>{{$lang.who.title}}</h3>
                            <p>{{$lang.who.text}}</p>
                        </div>
                    </section>
				
				<!-- COMMERCE DE CAFE -->
					<section>
						<header>
							<h2>{{$lang.coffeetrade}}</h2>
						</header>
						<div class="content">
							<h3>{{$lang.coffee.title}}</h3>
							<p>{{$lang.coffee.text}}</p>
						<div class="gallery">
							<a><img :src="'img/cerises-vertes.jpg'" alt="" /></a>
							<a><img :src="'img/cuiellette.jpg'" alt="" /></a>
						</div>

							<h3>{{$lang.origin.title}}</h3>
							<p>{{$lang.origin.text}}</p>

							<h3>{{$lang.quality.title}}</h3>
							<p>{{$lang.quality.text}}</p>
						<div class="gallery">
							<a><img :src="'img/mountain-kivu.jpg'" alt="" /></a>
							<a><img :src="'img/cuiellette-2.jpg'" alt="" /></a>
						</div>
						</div>
					</section>

				<!-- MANAGEMENT CONSEIL -->
					<section>
						<header>
							<h2>{{$lang.management.title}}</h2>
						</header>
						<div class="content">
							<p>{{$lang.management.intro}}</p>
							<ul>
								<li v-for="list in $lang.management.list">{{list}}</li>
							</ul>
						<div class="gallery">
							<a><img :src="'img/barage.jpg'" alt="" /></a>
							<a><img :src="'img/reunnion.jpg'" alt="" /></a>
						</div>
                            <p>{{$lang.management.atout}}</p>
                            <p>{{$lang.management.exp}}</p>
                            <blockquote>
                                <p>{{$lang.management.quote}}</p>
                            </blockquote>
						</div>
					</section>


				<!-- Section -->
					<section>
						<header>
							<h2>CONTACT</h2>
						</header>
						<div class="content">
							<form>
								<div class="fields">
									<div class="field half">
										<input type="text" name="name" id="name" placeholder="Nom / Prénom" />
									</div>
									<div class="field half">
										<input type="email" name="email" id="email" placeholder="Email" />
									</div>
									<div class="field">
										<textarea name="message" id="message" placeholder="Votre Message" rows="7"></textarea>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Envoyer" class="button primary" /></li>
								</ul>
							</form>
						</div>
						<footer>
							<ul class="items">
								<li>
									<h3>{{$lang.contact.ide}}</h3>
									<p>CHE-303.663.693</p>
								<li>
									<h3>Email</h3>
									<a href="#">info@sivahera.com</a>
								</li>
								<li>
									<h3>{{$lang.contact.phone}}</h3>
									<a href="#">+41 (0) 22 548 12 60</a>
									<a href="#">+41 (0) 78 618 97 07</a>
								</li>
								<li>
									<h3>{{$lang.contact.adress}}</h3>
									<p>1234 Somewhere Road, Nashville, TN 00000</p>
								</li>
                               <li>
									<h3>{{$lang.contact.title}}</h3>
									<p>{{$lang.contact.tram}}</p>
								</li>
								<li>
									<h3>{{$lang.contact.social}}</h3>
									<ul class="icons">
										<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
									</ul>
								</li>
							</ul>
						</footer>
					</section>

				<!-- Copyright -->
					<div class="copyright">&copy; 2020 - <a href="#">Mention Légale</a> -  Créer par <a href="https://comon-real.fr">Com'On Réal</a>.</div>

			</div>
</template>