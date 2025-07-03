/**
 * SmoothPauseTransition class
 * Handles smooth transitions when pausing/unpausing the game
 */
import { MODULE_ID } from '../constants/module.js';

export class SmoothPauseTransition {
    constructor() {

        this.initPauseElements();
    }

    /**
     * Initialize the pause element
     */
    initPauseElements() {
        const pauseElement = document.querySelector('#pause');

        const pauseContainer = document.createElement('div');
        pauseContainer.id = 'spt-pause-container';
        pauseContainer.classList.add(game.settings.get(MODULE_ID, 'transitionTemplate'));
        pauseContainer.style.transitionDuration = game.settings.get(MODULE_ID, 'transitionDuration') + 'ms';

        const pauseWrapper = document.createElement('div');
        pauseWrapper.id = 'spt-pause-wrapper';
        pauseWrapper.style.transitionDuration = game.settings.get(MODULE_ID, 'transitionDuration') + 'ms';

        const overlayElement = document.createElement('div');
        overlayElement.id = 'spt-pause-overlay';
        overlayElement.style.backgroundColor = game.settings.get(MODULE_ID, 'overlayColor');
        overlayElement.style.opacity = game.settings.get(MODULE_ID, 'overlayOpacity');

        pauseContainer.appendChild(overlayElement);
        pauseWrapper.appendChild(pauseElement);
        pauseContainer.appendChild(pauseWrapper);
        document.body.appendChild(pauseContainer);
    }

    /**
     * Handle pause/unpause transition
     * @param {HTMLElement} element - The pause overlay element
     */
    handlePauseTransition(element) {
        const isPaused = element.classList.contains('paused');

        if (isPaused) {
            // Pause transition
            this.handlePause();
        } else {
            // Unpause transition
            this.handleUnpause();
        }
    }

    /**
     * Handle pause transition
     */
    handlePause() {
        const pauseContainer = document.querySelector('#spt-pause-container');
        pauseContainer.classList.add('paused');

        const pauseSound = game.settings.get(MODULE_ID, 'pauseSound');
        if (pauseSound) {
            const pauseSoundVolume = game.settings.get(MODULE_ID, 'pauseSoundVolume');
            game.audio.play(pauseSound, { loop: false, volume: pauseSoundVolume, fade: 150 });
        }
    }

    /**
     * Handle unpause transition
     */
    handleUnpause() {
        const pauseContainer = document.querySelector('#spt-pause-container');
        pauseContainer.classList.remove('paused');
    }
} 