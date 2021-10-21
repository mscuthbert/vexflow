// [VexFlow](http://vexflow.com) - Copyright (c) Mohit Muthanna 2010.
// MIT License
//
// VF.* Prefix Tests
//
// VexFlow classes are available under the global Vex.Flow.* namespace.

import { Accidental } from '../src/accidental';
import { Annotation } from '../src/annotation';
import { Articulation } from '../src/articulation';
import { BarNote } from '../src/barnote';
import { Beam } from '../src/beam';
import { Bend } from '../src/bend';
import { BoundingBox } from '../src/boundingbox';
import { BoundingBoxComputation } from '../src/boundingboxcomputation';
import { ChordSymbol } from '../src/chordsymbol';
import { Clef } from '../src/clef';
import { ClefNote } from '../src/clefnote';
import { Crescendo } from '../src/crescendo';
import { Curve } from '../src/curve';
import { Dot } from '../src/dot';
import { EasyScore } from '../src/easyscore';
import { Element } from '../src/element';
import { Factory } from '../src/factory';
import { Flow } from '../src/flow';
import { Font, Fonts } from '../src/font';
import { Formatter } from '../src/formatter';
import { Fraction } from '../src/fraction';
import { FretHandFinger } from '../src/frethandfinger';
import { GhostNote } from '../src/ghostnote';
import { Glyph } from '../src/glyph';
import { GlyphNote } from '../src/glyphnote';
import { GraceNote } from '../src/gracenote';
import { GraceNoteGroup } from '../src/gracenotegroup';
import { GraceTabNote } from '../src/gracetabnote';
import { KeyManager } from '../src/keymanager';
import { KeySignature } from '../src/keysignature';
import { KeySigNote } from '../src/keysignote';
import { Modifier } from '../src/modifier';
import { ModifierContext } from '../src/modifiercontext';
import { MultiMeasureRest } from '../src/multimeasurerest';
import { Music } from '../src/music';
import { Note } from '../src/note';
import { NoteHead } from '../src/notehead';
import { NoteSubGroup } from '../src/notesubgroup';
import { Ornament } from '../src/ornament';
import { Parser } from '../src/parser';
import { PedalMarking } from '../src/pedalmarking';
import { Registry } from '../src/registry';
import { Renderer } from '../src/renderer';
import { RepeatNote } from '../src/repeatnote';
import { Stave } from '../src/stave';
import { Barline } from '../src/stavebarline';
import { StaveConnector } from '../src/staveconnector';
import { StaveHairpin } from '../src/stavehairpin';
import { StaveLine } from '../src/staveline';
import { StaveModifier } from '../src/stavemodifier';
import { StaveNote } from '../src/stavenote';
import { Repetition } from '../src/staverepetition';
import { StaveTempo } from '../src/stavetempo';
import { StaveText } from '../src/stavetext';
import { StaveTie } from '../src/stavetie';
import { Volta } from '../src/stavevolta';
import { Stem } from '../src/stem';
import { StringNumber } from '../src/stringnumber';
import { Stroke } from '../src/strokes';
import { System } from '../src/system';
import { TabNote } from '../src/tabnote';
import { TabSlide } from '../src/tabslide';
import { TabStave } from '../src/tabstave';
import { TabTie } from '../src/tabtie';
import { TextBracket } from '../src/textbracket';
import { TextDynamics } from '../src/textdynamics';
import { TextFormatter } from '../src/textformatter';
import { TextNote } from '../src/textnote';
import { TickContext } from '../src/tickcontext';
import { TimeSignature } from '../src/timesignature';
import { TimeSigNote } from '../src/timesignote';
import { Tremolo } from '../src/tremolo';
import { Tuning } from '../src/tuning';
import { Tuplet } from '../src/tuplet';
import { Vibrato } from '../src/vibrato';
import { VibratoBracket } from '../src/vibratobracket';
import { Voice } from '../src/voice';

const VFPrefixTests = {
  Start(): void {
    QUnit.module('VF.* API');
    test('VF.* API', VF_Prefix);
  },
};

// eslint-disable-next-line
declare let Vex: any;

function VF_Prefix(): void {
  // Intentionally use Vex.Flow here so we can verify that the Vex.Flow.* API
  // is equivalent to using the individual classes in TypeScript.
  const VF = Vex.Flow as unknown as typeof Flow;
  equal(Accidental, VF.Accidental);
  equal(Annotation, VF.Annotation);
  equal(Articulation, VF.Articulation);
  equal(Barline, VF.Barline);
  equal(BarNote, VF.BarNote);
  equal(Beam, VF.Beam);
  equal(Bend, VF.Bend);
  equal(BoundingBox, VF.BoundingBox);
  equal(BoundingBoxComputation, VF.BoundingBoxComputation);
  equal(ChordSymbol, VF.ChordSymbol);
  equal(Clef, VF.Clef);
  equal(ClefNote, VF.ClefNote);
  equal(Crescendo, VF.Crescendo);
  equal(Curve, VF.Curve);
  equal(Dot, VF.Dot);
  equal(EasyScore, VF.EasyScore);
  equal(Element, VF.Element);
  equal(Factory, VF.Factory);
  equal(Flow.RESOLUTION, VF.RESOLUTION);
  equal(Font, VF.Font);
  equal(Fonts, VF.Fonts);
  equal(Formatter, VF.Formatter);
  propEqual(new Formatter(), new VF.Formatter(), 'new Formatter()');
  equal(Fraction, VF.Fraction);
  equal(FretHandFinger, VF.FretHandFinger);
  equal(GhostNote, VF.GhostNote);
  equal(Glyph, VF.Glyph);
  equal(GlyphNote, VF.GlyphNote);
  equal(GraceNote, VF.GraceNote);
  equal(GraceNoteGroup, VF.GraceNoteGroup);
  equal(GraceTabNote, VF.GraceTabNote);
  equal(KeyManager, VF.KeyManager);
  equal(KeySignature, VF.KeySignature);
  equal(KeySigNote, VF.KeySigNote);
  equal(Modifier, VF.Modifier);
  equal(ModifierContext, VF.ModifierContext);
  equal(MultiMeasureRest, VF.MultiMeasureRest);
  equal(Music, VF.Music);
  equal(Note, VF.Note);
  equal(NoteHead, VF.NoteHead);
  equal(NoteSubGroup, VF.NoteSubGroup);
  equal(Ornament, VF.Ornament);
  equal(Parser, VF.Parser);
  equal(PedalMarking, VF.PedalMarking);
  equal(Registry, VF.Registry);
  equal(Renderer, VF.Renderer);
  equal(RepeatNote, VF.RepeatNote);
  equal(Repetition, VF.Repetition);
  equal(Stave, VF.Stave);
  notEqual(Stave, VF.StaveNote);
  equal(StaveConnector, VF.StaveConnector);
  equal(StaveHairpin, VF.StaveHairpin);
  equal(StaveLine, VF.StaveLine);
  equal(StaveModifier, VF.StaveModifier);
  equal(StaveNote, VF.StaveNote);
  equal(StaveTempo, VF.StaveTempo);
  equal(StaveText, VF.StaveText);
  equal(StaveTie, VF.StaveTie);
  equal(Stem, VF.Stem);
  equal(StringNumber, VF.StringNumber);
  equal(Stroke, VF.Stroke);
  equal(System, VF.System);
  equal(TabNote, VF.TabNote);
  equal(TabSlide, VF.TabSlide);
  equal(TabStave, VF.TabStave);
  equal(TabTie, VF.TabTie);
  equal(TextBracket, VF.TextBracket);
  equal(TextDynamics, VF.TextDynamics);
  equal(TextFormatter, VF.TextFormatter);
  equal(TextNote, VF.TextNote);
  equal(TickContext, VF.TickContext);
  equal(TimeSignature, VF.TimeSignature);
  equal(TimeSigNote, VF.TimeSigNote);
  equal(Tremolo, VF.Tremolo);
  equal(Tuning, VF.Tuning);
  equal(Tuplet, VF.Tuplet);
  equal(Vibrato, VF.Vibrato);
  equal(VibratoBracket, VF.VibratoBracket);
  equal(Voice, VF.Voice);
  equal(Volta, VF.Volta);
}

export { VFPrefixTests };
