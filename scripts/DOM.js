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
        if (player1 === true) {
          $cell.click(drawX);
          player1 = false;
          player2 = true;
        } else if (player2 === true) {
          $cell.click(drawO);
          player1 = true;
          player2 = false;
        }
      }

      currentTurn();
    });
  }());
