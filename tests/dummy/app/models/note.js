import Model, { attr } from '@ember-data/model';

export default class NoteModel extends Model {
  @attr('string') title;
}
