// [VexFlow](http://vexflow.com) - Copyright (c) Mohit Muthanna 2010.
//
// ## Description
//
// This class implements formatting various types of modifiers to notes (e.g. bends,
// fingering positions etc.)

import { Vex } from './vex';
import { StaveNote } from './stavenote';
import { Dot } from './dot';
import { FretHandFinger } from './frethandfinger';
import { Accidental } from './accidental';
import { NoteSubGroup } from './notesubgroup';
import { GraceNoteGroup } from './gracenotegroup';
import { Stroke } from './strokes';
import { StringNumber } from './stringnumber';
import { Articulation } from './articulation';
import { Ornament } from './ornament';
import { Annotation } from './annotation';
import { ChordSymbol } from './chordsymbol';
import { Bend } from './bend';
import { Vibrato } from './vibrato';

// To enable logging for this class. Set `Vex.Flow.ModifierContext.DEBUG` to `true`.
function L(...args) { if (ModifierContext.DEBUG) Vex.L('Vex.Flow.ModifierContext', args); }

/**
 * Formats modifiers, such as fingerings, articulations, etc. within a context.
 */
export class ModifierContext {
  constructor() {
    // Current modifiers, as an Array with the ModifierClass.CATEGORY as key.
    this.modifiers = {};

    // Formatting data.
    this.preFormatted = false;
    this.postFormatted = false;
    this.width = 0;
    this.spacing = 0;
    this.state = {
      left_shift: 0,
      right_shift: 0,
      text_line: 0,
      top_text_line: 0,
    };

    // Add new modifiers to this array. The ordering is significant -- lower
    // modifiers are formatted and rendered before higher ones.
    this.PREFORMAT = [
      StaveNote,
      Dot,
      FretHandFinger,
      Accidental,
      Stroke,
      GraceNoteGroup,
      NoteSubGroup,
      StringNumber,
      Articulation,
      Ornament,
      Annotation,
      ChordSymbol,
      Bend,
      Vibrato,
    ];

    // If post-formatting is required for an element, add it to this array.
    this.POSTFORMAT = [StaveNote];
  }

  addModifier(modifier) {
    const type = modifier.getCategory();
    if (!this.modifiers[type]) this.modifiers[type] = [];
    this.modifiers[type].push(modifier);
    modifier.setModifierContext(this);
    this.preFormatted = false;
    return this;
  }

  getModifiers(type) { return this.modifiers[type]; }
  getWidth() { return this.width; }
  getLeftShift() { return this.state.left_shift; }
  getRightShift() { return this.state.right_shift; }
  getState() { return this.state; }

  getMetrics() {
    if (!this.formatted) {
      throw new Vex.RERR('UnformattedModifier', 'Unformatted modifier has no metrics.');
    }

    return {
      width: this.state.left_shift + this.state.right_shift + this.spacing,
      spacing: this.spacing,
    };
  }

  preFormat() {
    if (this.preFormatted) return;
    this.PREFORMAT.forEach((ModifierClass) => {
      L('Preformatting ModifierContext: ', ModifierClass.CATEGORY);
      const modifiers_for_class = this.getModifiers(ModifierClass.CATEGORY);
      ModifierClass.format(modifiers_for_class, this.state, this);
    });

    // Update width of this modifier context
    this.width = this.state.left_shift + this.state.right_shift;
    this.preFormatted = true;
  }

  postFormat() {
    if (this.postFormatted) return;
    this.POSTFORMAT.forEach((ModifierClass) => {
      L('Postformatting ModifierContext: ', ModifierClass.CATEGORY);
      const modifiers_for_class = this.getModifiers(ModifierClass.CATEGORY);
      ModifierClass.postFormat(modifiers_for_class, this);
    });
  }
}
