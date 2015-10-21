import $ from 'jquery';
import scrollTo from '../index';

$('a[data-target]').on('click', function () {
  scrollTo({
    selector: $(this).data('target'),
    callback: () => { alert('scroll end') }
  });
});
