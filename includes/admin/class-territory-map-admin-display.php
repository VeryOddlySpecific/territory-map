<?php 

class Territory_Map_Admin_Display {

    private function parse_src( $src ) {
        $src = strpos( $src, 'http' ) === 0 ? $src : VOS_TM_URL . $src;
        return $src;
    }

    public function enqueue_styles_scripts() {
        $styles_and_scripts = json_decode( file_get_contents( VOS_TM_PATH . 'assets/enqueue.json' ), true );

        for ( $styles_and_scripts['scripts'] as $script ) {
            $src = isset( $script['src'] ) ? $this->parse_src( $script['src'] ) : false;
            if ( ! $src ) continue;
            wp_enqueue_script( $script['handle'], $src, $script['deps'], VOS_TM_VERSION, true );
        }

        for ( $styles_and_scripts['styles'] as $style ) {
            $src = isset( $style['src'] ) ? $this->parse_src( $style['src'] ) : false;
            if ( ! $src ) continue;
            wp_enqueue_style( $style['handle'], $src, $style['deps'], VOS_TM_VERSION );
        }
    }

    public function add_settings_page() {
        add_menu_page(
            'Territory Map',
            'Territory Map',
            'manage_options',
            'vos-territory-map',
            function() { echo '<div id="territory-map-admin"></div>'; },
            'dashicons-location-alt',
            6
        );
    }
}