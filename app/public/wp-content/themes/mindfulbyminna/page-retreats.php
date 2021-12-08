<?php get_header();?>
<?php
                  $retreats = new WP_Query(array(
                'posts_per_page' => -1,
                'post_type' => 'Retreats',
                'order' => 'ASC'
                 ));
                 while($retreats->have_posts()) {
                    $retreats->the_post(); ?>
                        <h1 class="title"><?php the_title();?></h1>
                        <div class="retreat">
                            <p class="text retreat-content"><?php the_field('retreat-content');?></p>
                            <img src="<?php the_field('retreat-img');?>" alt="" class="retreat-img">
                        </div>    
                  <?php } ?>

<?php get_footer();?>