<?php 
/**
 * Plugin Name: Territory Map
 * Description: A plugin to display a map of territories
 * Version: 1.0
 * Author: Alexander Steadman
 * Author URI: github.com/VeryOddlySpecific
 * License: GPL2
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

// Define plugin constants
define( 'VOS_TM_PATH', plugin_dir_path( __FILE__ ) );
define( 'VOS_TM_URL', plugin_dir_url( __FILE__ ) );
define( 'VOS_TM_VERSION', '1.0' );

// Include the main plugin class
require_once VOS_TM_PATH . 'includes/class-territory-map.php';

// Run the plugin
$plugin = new Territory_Map();
$plugin->run();