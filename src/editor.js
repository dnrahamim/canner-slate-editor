/* eslint-disable new-cap */
import React, {Component, PropTypes} from 'react';
import {Editor} from 'slate';
import toolbar from 'slate-toolbar';
import EditList from 'slate-edit-list';
import EditBlockquote from 'slate-edit-blockquote';
import TrailingBlock from 'slate-trailing-block';
import schema from './schema';
import Icons from 'slate-editor-icons';

import styles from "./style/index.scss";
import "./style/github-markdown.lib.scss";

const options = {
  toolbarMarks: [
    Icons.marks.Bold,
    Icons.marks.Italic,
    Icons.marks.Underline,
    Icons.marks.Code,
    Icons.marks.StrikeThrough,
    Icons.marks.Clean
  ]
};

const LIST_DEFAULT = {
  typeUL: 'list-ul',
  typeOL: 'list-ol',
  typeItem: 'list-item',
  typeDefault: 'paragraph',
  ordered: true
};

const BLOCKQUOTE_DEFAULT = {
  type: 'blockquote',
  typeDefault: 'paragraph'
};

@toolbar(options) // embed a toolbar in editor!
export default class EditorComponent extends Component {
  static propTypes = {
    state: PropTypes.object,
    onChange: PropTypes.func
  };

  render() {
    const {state, onChange} = this.props;

    return (
      <div className={`${styles.editor} qa-editor__html-style`}>
        <Editor
          state={state}
          schema={schema}
          onChange={onChange}
          plugins={[
            EditList(LIST_DEFAULT),
            EditBlockquote(BLOCKQUOTE_DEFAULT),
            TrailingBlock({type: 'paragraph'})
          ]}
        />
      </div>
    );
  }
}