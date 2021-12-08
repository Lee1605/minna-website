<?php get_header(); ?>

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


<?php get_footer();?>
