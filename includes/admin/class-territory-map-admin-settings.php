<?php 

class Territory_Map_Admin_Settings {

    public function register_settings() {
        register_setting( 'vos-territory-map-settings', '_vos_map_state' );
    }

    public function save_map() {
        if ( isset( $_POST['_vos_map_state'] ) ) {
            update_option( '_vos_map_state', $_POST['_vos_map_state'] );
        }
    }

    public function register_rest_routes() {
        register_rest_route( 'vostm/v1', '/save-map', array(
            'methods' => 'POST',
            'callback' => array( $this, 'save_map' ),
            'permission_callback' => function() {
                return current_user_can( 'manage_options' );
            }
        ) );
    }
}