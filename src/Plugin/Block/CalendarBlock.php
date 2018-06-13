<?php

namespace Drupal\calendar_event\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'CalendarBlock' block.
 *
 * @Block(
 *  id = "calendar_block",
 *  admin_label = @Translation("Event Calendar block"),
 * )
 */
class CalendarBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['calendar_block']['#markup'] = '<div id="calendar"></div>';
    $build['calendar_block']['#attached']['library'][] = 'calendar_event/fullcalendar-js';
    $build['calendar_block']['#attached']['library'][] = 'calendar_event/custom-js';
    $eventsData = [
      array(
        'title' => 'Birthday',
        'start' => '2018-06-05'
      )
    ];
    $build['calendar_block']['#attached']['drupalSettings']['eventsData'] = $eventsData;
    return $build;
  }
}
