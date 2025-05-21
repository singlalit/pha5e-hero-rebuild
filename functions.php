function load_custom_hero_assets() {
    wp_enqueue_style('hero-style', get_template_directory_uri() . './style.css');
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', [], null, true);
    wp_enqueue_script('hero-script', get_template_directory_uri() . './script.js', ['gsap'], null, true);
}
add_action('wp_enqueue_scripts', 'load_custom_hero_assets');
