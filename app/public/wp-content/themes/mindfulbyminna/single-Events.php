<?php get_header();
    while(have_posts()) {
        the_post(); 
?>
    <h1 class="title"><?php the_title();?><br><?php the_field('event-date');?></h1>
    <div class="retreat">
        <img src="<?php the_field('event-img');?>" alt="" class="retreat-img">
        <p class="text retreat-content"><?php the_field('event-content');?></p>
    </div>
    <div class="payments">
        <div class="payment">
            <div class="payment-container">
                <h2 class="room"><?php the_field('room1');?></h3>
                <h1 class="price"><?php the_field('price1');?></h1>
                <h5 class="date"><?php the_field('event-date');?></h5>
                <h5 class="food"><?php the_field('food1');?></h5>
            </div> 
            <button class="readmore">BOOK NOW</button>   
        </div>
        <div class="payment">
            <div class="payment-container">
                <h2 class="room"><?php the_field('room2');?></h3>
                <h1 class="price"><?php the_field('price2');?></h1>
                <h5 class="date"><?php the_field('event-date');?></h5>
                <h5 class="food"><?php the_field('food2');?></h5>
            </div> 
            <button class="readmore">BOOK NOW</button>   
        </div>
        <div class="payment">
            <div class="payment-container">
                <h2 class="room"><?php the_field('room3');?></h3>
                <h1 class="price"><?php the_field('price3');?></h1>
                <h5 class="date"><?php the_field('event-date');?></h5>
                <h5 class="food"><?php the_field('food3');?></h5>
            </div> 
            <button class="readmore">BOOK NOW</button>   
        </div>
    </div>
<?php  } get_footer();?>