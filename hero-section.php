<?php
/**
 * Template Part: Custom Hero Section with GSAP
 */
?>

<section class="hero-section">
  <div class="container-fluid position-relative overflow-hidden text-white py-5" id="hero-container">

    <!-- Background Video -->
    <video autoplay muted loop class="position-absolute w-100 h-100 object-fit-cover" id="bg-video">
      <source src="<?php echo get_template_directory_uri(); ?>videos/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

    <!-- Hero Text -->
    <div class="row justify-content-center align-items-center text-center position-relative z-1">
      <div class="col-10 col-md-8">
        <h1 class="display-4 fw-bold" id="hero-text">
          IMAGINING UNIQUE <br />
          CONCEPTS — AND <br />
          DIGITAL EXPERIENCES
        </h1>
      </div>
    </div>

    <!-- Floating Images -->
    <img src="<?php echo get_template_directory_uri(); ?>/images/img1.jpg" class="floating-img position-absolute img1" alt="img1">
    <img src="<?php echo get_template_directory_uri(); ?>/images/img2.jpg" class="floating-img position-absolute img2" alt="img2">
    <img src="<?php echo get_template_directory_uri(); ?>/images/img3.jpg" class="floating-img position-absolute img3" alt="img3">
  </div>
</section>
