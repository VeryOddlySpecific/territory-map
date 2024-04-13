import { createRoot } from '@wordpress/element';
import { Map } from './Map';

const root = document.getElementById('territory-map-admin');

if (root) { createRoot(root).render(<Map />); }