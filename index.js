/**
 * Smooth Pause Transition module for Foundry VTT v13
 * Main entry point that initializes the module and sets up Foundry VTT hooks
 */
import { MODULE_ID } from "./scripts/constants/module.js";
import { registerSettings } from "./scripts/settings.js";
import { SmoothPauseTransition } from "./scripts/class/SmoothPauseTransition.js";

// Global instance of the SmoothPauseTransition class
let smoothPauseTransitionInstance = null;

/**
 * Initialize the module
 * Registers settings and creates the SmoothPauseTransition instance
 */
async function initModule() {
    // Register module settings
    registerSettings();
    
    // Create the main SmoothPauseTransition instance
    smoothPauseTransitionInstance = new SmoothPauseTransition();
    
    // Expose API for other modules/components to access the instance
    game.modules.get(MODULE_ID).api = {
        getInstance: () => smoothPauseTransitionInstance
    };
}

// Configure Foundry VTT hooks
Hooks.once('init', initModule);

// Hook for pause/unpause transitions
Hooks.on('renderGamePause', (application, element, context, options) => {
    if (smoothPauseTransitionInstance) {
        smoothPauseTransitionInstance.handlePauseTransition(element);
    }
}); 

// Hook for render settings config
Hooks.on('renderSettingsConfig', (app, html) => {
    const element = html.querySelector('[name="' + MODULE_ID + '.overlayColor"]');
    element.type = 'color';
});