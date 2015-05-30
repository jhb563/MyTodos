'use strict';

// Configuring the Articles module
angular.module('projects').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Projects', 'projects', 'dropdown', '/projects(/create)?');
		Menus.addSubMenuItem('topbar', 'projects', 'Current Projects', 'projects');
		Menus.addSubMenuItem('topbar', 'projects', 'Old Projects', 'oldprojects');
		Menus.addSubMenuItem('topbar', 'projects', 'New Project', 'projects/create');
	}
]);
