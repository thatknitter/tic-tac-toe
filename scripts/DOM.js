;( function() {
    'use strict';

    $(function() {
      var $cell = $('td');
      var player1 = true;
      var player2 = false;

      function drawX() {
        $(this).html('X');
      }

      function drawO() {
        $(this).html('O');
      }

      function currentTurn() {
        function counter() {
          count = 0;
          currentTurn();
          count = count + 1;

          if (count % 2 === 0) {
            $cell.click(drawX);
            player1 = false;
            player2 = true;
            counter();
          } else if (count % 2 === 1) {
            $cell.click(drawO);
            player1 = true;
            player2 = false;
            counter();
          }
        }

      }

      currentTurn();
    });
  }());
