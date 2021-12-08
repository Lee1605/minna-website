<?php get_header(); ?>

                 <div class="about-container">
                    <h1 class="title"><?php the_title();?></h1>
                    <p class="text"><?php the_field('about-content');?></p>
                    <div class="swiper img-swiper">
                    <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                    <!-- Slides -->
                    <?php
                    $aboutImgs = new WP_Query(array(
                    'posts_per_page' => -1,
                    'post_type' => 'About-imgs'
                    ));
                            
                            while($aboutImgs->have_posts()) {
                                $aboutImgs->the_post(); ?>
                                <div class="swiper-slide"> 
                                    <img src="<?php the_field('about-img');?>" alt="" class="about-page-img">
                            </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>    


<?php get_footer();?>
