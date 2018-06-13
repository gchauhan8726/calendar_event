(function($, Drupal, drupalSettings) {
  	$('#calendar').fullCalendar({
	  header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listWeek'
      },
      weekends: true,
      defaultDate: '2018-06-12',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2018-06-01',
        },
        {
          title: 'Long Event',
          start: '2018-06-07',
          end: '2018-06-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-06-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-06-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-06-11',
          end: '2018-06-13'
        },
        {
          title: 'Meeting',
          start: '2018-06-12T10:30:00',
          end: '2018-06-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-06-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-06-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2018-06-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-06-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-06-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-06-28'
        }
      ].concat(drupalSettings.eventsData)
  })
}(jQuery, Drupal, drupalSettings));
