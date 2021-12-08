<?php get_header(); ?>


<main>
        <section>
            <div id="hero" style="background-image: url(<?php the_field('hero-img');?>)"></div>
            <?php 
            $homepagePosts = new WP_Query(array(
                'posts_per_page' => 1,
                'p' => 11
            ));
            while($homepagePosts->have_posts()) {
                $homepagePosts->the_post(); ?>
            <div class="img-text" id="about">
                <img src="<?php the_field('about-img');?>" alt="minnas image" class="about-img">
                <div class="textbtn">
                    <p class="text"><?php the_field('about-content');?></p>
                    <button class="readmore"><a class="link" href="<?php echo site_url('/about');?>">READ MORE</a></button>
                </div>
            </div>
            <?php } 
        // echo paginate_links();

        ?>
        </section>
        <section>  
            <div id="sentence">
                <div class="shecan">
                    <p class="she">she believed she could</p>
                    <p class="she">so she did.</p>
                </div>
            </div>
        </section>  
        <section>
            <?php  
            $homepagePosts = new WP_Query(array(
                'posts_per_page' => 1,
                'p' => 39
            )); 
            while($homepagePosts->have_posts()) {
                $homepagePosts->the_post(); ?> 
            <h1 class="title"><?php the_title();?></h1>
            <div class="img-text" id="retreats">
                <div class="textbtn">
                    <p class="text"><?php the_field('about-content');?></p>
                    <button class="readmore"><a class="link" href="<?php echo site_url('/retreats');?>">LEARN MORE</a></button>
                </div>
                <img src="<?php the_field('about-img');?>" alt="minnas image" class="about-img">
            </div>
            <?php } ?>
        </section> 
        <section>
            <h1 class="title">PEOPLE SAY</h1>
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                  <!-- Slides -->
                  <?php
                  $testimonials = new WP_Query(array(
                'posts_per_page' => -1,
                'post_type' => 'Testimonials',
                'order' => 'ASC'
                 ));
                 while($testimonials->have_posts()) {
                    $testimonials->the_post(); ?>
                  <div class="swiper-slide"> 
                    <div id="testimonials">
                        <div class="testimonial">
                            <div class="testi-wrap">
                                <p class="testi-text"><?php the_field('testimonial-content');?></p>
                                <h4 class="testi-name"><?php the_field('testimonial-author');?></h4>
                            </div>
                        </div>
                    </div>
                  </div>
                  <?php } ?>
                </div>
              
                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              
            </div>
        </section>
        <section id="contact">
            <h1 class="title">LET'S CONNECT</h1>
            <div class="contact-wrap">
                <div class="name">
                    <fieldset class="name-field">
                        <label for="fname">FIRST NAME</label>
                        <input type="text" name="fname" id="fname" class="name-input">
                    </fieldset>
                    <fieldset class="name-field">
                        <label for="lname">LAST NAME</label>
                        <input type="text" name="lname" id="lname" class="name-input">
                    </fieldset>
                </div>
                <fieldset>
                    <label for="email">EMAIL</label>
                    <input class="full" type="email" name="email" id="email">
                </fieldset>
                <fieldset>
                    <label for="message">YOUR MESSAGE</label>
                    <textarea class="full" name="message" id="message" cols="30" rows="10"></textarea>
                </fieldset>
                <button class="readmore send">SUBMIT</button>
            </div>
        </section>
        <section id="insta">
            <h1 class="title">FOLLOW ME ON <span>@mindfulbyminna</span></h1>
            <div class="container">
            <?php
                  $insta_imgs = new WP_Query(array(
                'posts_per_page' => -1,
                'post_type' => 'Instagram',
                'order' => 'ASC'
                 ));
                 while($insta_imgs->have_posts()) {
                    $insta_imgs->the_post(); ?>
                <img src="<?php the_field('insta-img');?>" alt="" class="insta">
                <?php } ?>
            </div>
        </section>
</main>

<?php get_footer();?>

    