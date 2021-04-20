import { registerFormatType, insert, create } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import shyIcon from './icons/shy';

function InsertShy({ isActive, value, onChange, onFocus }) {
  function onClick() {
    const el = create({
      html: '<span class="is-shy-character">&#173;</span>',
    });
    onChange(insert(value, el));
    onFocus && onFocus(); // older gutenberg doesnt have it
  };

  return (
    <RichTextToolbarButton
      icon={ shyIcon }
      title="Insert Soft Hyphen"
      onClick={ onClick }
      isActive={ isActive }
    />
  );
}

registerFormatType('genero/insert-shy', {
  title: 'Soft hyphen',
  tagName: 'span',
  className: 'shy',
  edit: InsertShy,
});
