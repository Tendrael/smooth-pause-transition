/**
 * Settings registration for Smooth Pause Transition module
 */
import { MODULE_ID } from './constants/module.js';
import { getTransitionEasingChoices, getTransitionTemplateChoices } from './constants/form.js';

/**
 * Register all module settings
 */
export function registerSettings() {
    // Transition duration setting
    game.settings.register(MODULE_ID, 'transitionDuration', {
        name: game.i18n.localize(`${MODULE_ID}.settings.transitionDuration.name`),
        hint: game.i18n.localize(`${MODULE_ID}.settings.transitionDuration.hint`),
        scope: 'world',
        config: true,
        type: Number,
        range: {
            min: 0,
            max: 3000,
            step: 100
        },
        default: 400,
        requiresReload: true
    });

    // Transition template setting
    game.settings.register(MODULE_ID, 'transitionTemplate', {
        name: game.i18n.localize(`${MODULE_ID}.settings.transitionTemplate.name`),
        hint: game.i18n.localize(`${MODULE_ID}.settings.transitionTemplate.hint`),
        scope: 'world',
        config: true,
        type: String,
        choices: getTransitionTemplateChoices(),
        default: 'pop-in',
        requiresReload: true
    });

    // Overlay opacity setting
    game.settings.register(MODULE_ID, 'overlayOpacity', {
        name: game.i18n.localize(`${MODULE_ID}.settings.overlayOpacity.name`),
        hint: game.i18n.localize(`${MODULE_ID}.settings.overlayOpacity.hint`),
        scope: 'world',
        config: true,
        type: Number,
        range: {
            min: 0,
            max: 1,
            step: 0.1
        },
        default: 0.5,
        requiresReload: true
    });

    // Overlay color setting
    game.settings.register(MODULE_ID, 'overlayColor', {
        name: game.i18n.localize(`${MODULE_ID}.settings.overlayColor.name`),
        hint: game.i18n.localize(`${MODULE_ID}.settings.overlayColor.hint`),
        scope: 'world',
        config: true,
        type: String,
        default: '#000000',
        requiresReload: true
    });

    // Pause sound setting
    game.settings.register(MODULE_ID, 'pauseSound', {
        name: game.i18n.localize(`${MODULE_ID}.settings.pauseSound.name`),
        hint: game.i18n.localize(`${MODULE_ID}.settings.pauseSound.hint`),
        scope: 'world',
        config: true,
        type: String,
        default: '',
        filePicker: 'audio',
        requiresReload: true
    });

    // Pause sound volume setting
    game.settings.register(MODULE_ID, 'pauseSoundVolume', {
        name: game.i18n.localize(`${MODULE_ID}.settings.pauseSoundVolume.name`),
        hint: game.i18n.localize(`${MODULE_ID}.settings.pauseSoundVolume.hint`),
        scope: 'world',
        config: true,
        type: Number,
        range: {
            min: 0,
            max: 1,
            step: 0.1
        },
        default: 0.5,
        requiresReload: true
    });
} 