<?php 

class Territory_Map {

    private $admin;
    private $public;

    public function __construct() {
        $this->load_dependencies();
        $this->set_controls();
    }

    private function load_dependencies() {
        require_once VOS_TM_PATH . 'includes/admin/class-territory-map-admin.php';
        //require_once VOS_TM_PATH . 'includes/public/class-territory-map-public.php';
    }

    private function set_controls() {
        $this->admin = new Territory_Map_Admin();
        //$this->public = new Territory_Map_Public();
    }

    public function run() {
        $this->admin->run();
        //$this->public->run();
    }
}