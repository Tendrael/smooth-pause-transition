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

/**
 * Set up hooks when the module is ready
 * Configures class hooks and listeners
 */
function handleReadyHook() {
    // Configure hooks and listeners via the class
    if (smoothPauseTransitionInstance) {
        smoothPauseTransitionInstance.setupHooks();
    }
}

// Configure Foundry VTT hooks
Hooks.once('init', initModule);
Hooks.once('ready', handleReadyHook);

// Hook for pause/unpause transitions
Hooks.on('renderGamePause', (application, element, context, options) => {
    if (smoothPauseTransitionInstance) {
        smoothPauseTransitionInstance.handlePauseTransition(element);
    }
}); 