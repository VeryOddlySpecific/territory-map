<?php 

class Territory_Map_Admin {

    protected $display;
    protected $settings;

    public function __construct() {
        $this->load_dependencies();
        $this->set_controls();
    }

    private function load_dependencies() {
        require_once VOS_TM_PATH . 'includes/admin/class-territory-map-admin-display.php';
        require_once VOS_TM_PATH . 'includes/admin/class-territory-map-admin-settings.php';
    }

    private function set_controls() {
        $this->display = new Territory_Map_Admin_Display();
        $this->settings = new Territory_Map_Admin_Settings();
    }

    public function run() {
        $this->display->run();
        $this->settings->run();
    }
}