<?php

    function mindfulbyminna_files() {
        wp_enqueue_script('main-mindfulbyminna-js', get_theme_file_uri('/build/main.js'), NULL, '1.0', true);

        wp_enqueue_style('mindfulbyminna_main_styles', get_theme_file_uri('/src/style.css'));
        wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');


    }

    add_action('wp_enqueue_scripts', 'mindfulbyminna_files');

    function post_types() {
        register_post_type('Testimonials',array(
            'supports' => array('title', 'editor', 'content'),
            'public' => true,
            'show_in_rest' => true,
            'labels' => array(
                'name' => 'Testimonials',
                'add_new_item' => 'Add New Testimonial',
                'edit_item' => 'Edit Testimonial',
                'all_items' => 'All Testimonials',
                'singular_name' => 'Testimonial'
            ),
            'menu_icon' => 'dashicons-welcome-learn-more'
        ));

        register_post_type('Instagram',array(
            'supports' => array('title', 'editor', 'content'),
            'public' => true,
            'show_in_rest' => true,
            'labels' => array(
                'name' => 'Instagram',
                'add_new_item' => 'Add New Instagram',
                'edit_item' => 'Edit Instagram',
                'all_items' => 'All Instagram',
                'singular_name' => 'Instagram'
            ),
            'menu_icon' => 'dashicons-awards'
        ));

        register_post_type('Retreats',array(
            'supports' => array('title', 'editor', 'content'),
            'public' => true,
            'show_in_rest' => true,
            'labels' => array(
                'name' => 'Retreats',
                'add_new_item' => 'Add New Retreat',
                'edit_item' => 'Edit Retreat',
                'all_items' => 'All Retreats',
                'singular_name' => 'Retreat'
            ),
            'menu_icon' => 'dashicons-awards'
        ));

        register_post_type('About-imgs',array(
            'supports' => array('title', 'editor', 'content'),
            'public' => true,
            'show_in_rest' => true,
            'labels' => array(
                'name' => 'About-imgs',
                'add_new_item' => 'Add New About-img',
                'edit_item' => 'Edit About-img',
                'all_items' => 'All About-imgs',
                'singular_name' => 'About-img'
            ),
            'menu_icon' => 'dashicons-awards'
        ));

        register_post_type('Events',array(
            // 'capability_type' => 'event',
            'map_meta_cap' => true,
            'supports' => array('title', 'editor' , 'content'),
            'rewrite' => array('slug' => 'events'),
            'public' => true,
            'show_in_rest' => true,
            'labels' => array(
                'name' => 'Events',
                'add_new_item' => 'Add New Event',
                'edit_item' => 'Edit Event',
                'all_items' => 'All Events',
                'singular_name' => 'Event'
            ),
            'menu_icon' => 'dashicons-calendar'
        ));
    }
    add_action('init','post_types');
?>