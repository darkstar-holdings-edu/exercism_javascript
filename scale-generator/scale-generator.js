const NOTES = [
  { note: 'C', enharmonic: 'C' },
  { note: 'C#', enharmonic: 'Db' },
  { note: 'D', enharmonic: 'D' },
  { note: 'D#', enharmonic: 'Eb' },
  { note: 'E', enharmonic: 'E' },
  { note: 'F', enharmonic: 'F' },
  { note: 'F#', enharmonic: 'Gb' },
  { note: 'G', enharmonic: 'G' },
  { note: 'G#', enharmonic: 'Ab' },
  { note: 'A', enharmonic: 'A' },
  { note: 'A#', enharmonic: 'Bb' },
  { note: 'B', enharmonic: 'B' },
];

/**
 * The flat scales that use enharmonic notes.
 */
const FLAT_SCALE_SIGNATURES = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'd', 'g', 'c', 'f', 'bb', 'eb'];

/**
 * The intervals represented by each character.
 */
const INTERVALS = { m: 1, M: 2, A: 3 };

export class Scale {
  /**
   * Creates a new Scale instance with the given tonic note.
   *
   * @param {string} tonic - The tonic note of the scale.
   * @throws {Error} If the tonic note is not found in the scale.
   */
  constructor(tonic) {
    this.tonic = tonic;
    this._normalizedTonic = this._normalize_tonic();
    this._useEnharmonicNotes = this._is_flat_scale_tonic();

    const startIndex = this._get_tonic_note_index();
    if (startIndex === -1) {
      throw new Error(`Tonic note '${this.tonic}' not found in the scale.`);
    }

    this.scale = this._build_scale(startIndex);
  }

  /**
   * Normalizes the tonic note by capitalizing its first letter.
   *
   * @private
   */
  _normalize_tonic() {
    return this.tonic.charAt(0).toUpperCase() + this.tonic.slice(1);
  }

  /**
   * Determines whether the tonic note is part of a flat scale that uses enharmonic notes.
   *
   * @private
   */
  _is_flat_scale_tonic() {
    return FLAT_SCALE_SIGNATURES.find((e) => e === this.tonic) ? true : false;
  }

  /**
   * Gets the index of the tonic note in the scale.
   *
   * @private
   */
  _get_tonic_note_index() {
    return NOTES.findIndex(
      (element) =>
        element['note'] === this._normalizedTonic || element['enharmonic'] === this._normalizedTonic
    );
  }

  /**
   * Builds the scale starting from the tonic note.
   *
   * @private
   */
  _build_scale(startIndex) {
    return [...NOTES.slice(startIndex), ...NOTES.slice(0, startIndex)].reduce((acc, cur) => {
      const note = this._useEnharmonicNotes ? cur['enharmonic'] : cur['note'];
      return [...acc, note];
    }, []);
  }

  /**
   * Returns the chromatic scale of the current scale.
   *
   * @returns {string[]} The chromatic scale.
   */
  chromatic() {
    return this.scale;
  }

  /**
   * Returns the notes of the scale at the given intervals.
   *
   * @param {string} intervals - A string of interval characters.
   * @returns {string[]} The notes of the scale at the given intervals.
   */
  interval(intervals) {
    let notes = [this.scale[0]];

    let noteIndex = 0;
    for (const interval of intervals.split('')) {
      noteIndex += INTERVALS[interval];
      notes.push(this.scale[noteIndex]);
    }

    return notes;
  }
}
