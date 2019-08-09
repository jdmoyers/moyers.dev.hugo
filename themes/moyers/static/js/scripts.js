'use strict';

var navButtons = document.querySelectorAll('.js-toggle-navigation');
var navDrawer = document.querySelector('.nav-panel');
var html = document.querySelector('html');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = navButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var button = _step.value;
    button.addEventListener('click', function () {
      navDrawer.classList.toggle('open');
      html.classList.toggle('locked');
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJuYXZCdXR0b25zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2RHJhd2VyIiwicXVlcnlTZWxlY3RvciIsImh0bWwiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBbEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixNQUF2QixDQUFiOzs7Ozs7QUFFQSx1QkFBb0JKLFVBQXBCLDhIQUFnQztBQUFBLFFBQXRCTSxNQUFzQjtBQUM1QkEsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUNJLFlBQVc7QUFDUEosTUFBQUEsU0FBUyxDQUFDSyxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixNQUEzQjtBQUNBSixNQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixRQUF0QjtBQUNILEtBSkw7QUFNSCIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXRvZ2dsZS1uYXZpZ2F0aW9uJyk7XHJcbmNvbnN0IG5hdkRyYXdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtcGFuZWwnKTtcclxuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcclxuXHJcbmZvcihjb25zdCBidXR0b24gb2YgbmF2QnV0dG9ucykge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbmF2RHJhd2VyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgICAgICAgICAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKCdsb2NrZWQnKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59Il19