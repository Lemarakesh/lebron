$(document).ready(function() {
  // Check if the necessary elements exist before running the code
  if ($('#fps-game-select').length === 0) {
    return;
  }

  const fpsData = {
    fortnite: {
      '1080p': '180-240 FPS',
      '1440p': '120-160 FPS'
    },
    valorant: {
      '1080p': '250-350 FPS',
      '1440p': '180-250 FPS'
    },
    apex_legends: {
        '1080p': '144-200 FPS',
        '1440p': '100-140 FPS'
    }
  };

  const $gameSelect = $('#fps-game-select');
  const $resolutionSelect = $('#fps-resolution-select');
  const $resultElement = $('#fps-result');

  function updateFps() {
    const game = $gameSelect.val();
    const resolution = $resolutionSelect.val();

    if (fpsData[game] && fpsData[game][resolution]) {
      const fpsRange = fpsData[game][resolution];
      // Animate the text update for a nicer effect
      $resultElement.fadeOut(150, function() {
        $(this).text(fpsRange).fadeIn(150);
      });
    } else {
      $resultElement.text('N/A');
    }
  }

  // Set initial value on page load
  updateFps();

  // Add event listeners to the dropdowns
  $gameSelect.on('change', updateFps);
  $resolutionSelect.on('change', updateFps);
});