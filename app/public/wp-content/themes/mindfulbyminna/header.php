<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <?php wp_head(); ?>
    <script src="https://kit.fontawesome.com/0387b73b4f.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Vesper+Libre&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Minna's Website</title>
</head>
<body>
    <header>
        <?php 
        $today = date('Ymd');
        $upcomingEvents = new WP_Query(array(
            'posts_per_page' => -1,
            'post_type' => 'Events',
            'orderby' => 'meta_value_num',
            'meta_key' => 'event-date',
            'order' => 'ASC',
            'meta_query' => array(
                array(
                   'key' => 'event-date',
                   'compare' => '>=',
                   'value' => $today,
                   'type' => 'numeric'
                )
            )
             ));
        ?>
        <div id="desktop" class="header">
            <img src="<?php echo get_theme_file_uri('/images/MinnaLogo.png');?>" alt="logo image" class="logo">
            <nav id="nav-bar">
                <a href="<?php echo site_url('./');?>" class="nav-link <?php if(is_page('home')) echo 'current-page';?>">HOME</a>
                <a href="<?php echo site_url('/about');?>" class="nav-link <?php if(is_page('about')) echo 'current-page';?>">ABOUT</a>
                <a href="<?php echo site_url('/retreats');?>" class="nav-link <?php if(is_page('retreats')) echo 'current-page';?>">RETREATS</a>
                <nav class="events-link" id="event-nav"><a href="javascript:void(0);" id="event-link" class="nav-link <?php if(get_post_type() == 'events') echo 'current-page';?>">UPCOMING EVENTS <i class="fas fa-angle-down"></i></a>
                    <ul class="events">
                        <?php 
                        while($upcomingEvents->have_posts()) {
                        $upcomingEvents->the_post(); ?>
                        <li class="event-link"><a class="nav-link" href="<?php the_permalink();?>"><?php the_title();?></a></li>
                        <?php } wp_reset_postdata(); ?>
                    </ul>
                
                </nav>
                <a href="<?php echo site_url('/contact-us');?>" class="nav-link <?php if(is_page('contact-us')) echo 'current-page';?>">CONTACT</a>
            </nav>
        </div>
        <div id="mobile">
            <div id="container-nav" class="header">
                <img src="<?php echo get_theme_file_uri('/images/MinnaLogo.png');?>" alt="logo image" class="logo">
                <div id="burger">
                    <div class="nav-bar"></div>
                    <div class="nav-bar"></div>
                    <div class="nav-bar"></div>
                </div>
            </div>
            <nav id="nav-bar-mobile">
                <i id="close" class="fas fa-times"></i>
                <a href="<?php echo site_url('./');?>" class="nav-link <?php if(is_page('home')) echo 'current-page';?>">HOME</a>
                <a href="<?php echo site_url('/about');?>" class="nav-link <?php if(is_page('about')) echo 'current-page';?>">ABOUT</a>
                <a href="<?php echo site_url('/retreats');?>" class="nav-link <?php if(is_page('retreats')) echo 'current-page';?>">RETREATS</a>
                <nav class="events-link"><span id="contain" class="nav-link <?php if(is_page('upcoming-events')) echo 'current-page';?>">UPCOMING EVENTS <i class="fas fa-angle-down"></i></span>
                    <ul class="active events-contain events">
                        <?php
                        while($upcomingEvents->have_posts()) {
                        $upcomingEvents->the_post(); ?>
                        <li class="event-link"><a class="nav-link" href="<?php the_permalink();?>"><?php the_title();?></a></li>
                        <?php } wp_reset_postdata();?>
                    </ul>
                </nav>
                <a href="<?php echo site_url('/contact-us');?>" class="nav-link <?php if(is_page('contact-us')) echo 'current-page';?>">CONTACT</a>
            </nav>
        </div>
    </header>