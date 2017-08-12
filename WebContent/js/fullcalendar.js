//fullCalendar
	 $(document).ready(function() {
        $('#calendar').fullCalendar({
        	header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
             },
             buttonText: {
                 today: '今日'
             },
             lang: "ja",
             firstDay : 1,
             navLinks: true, // can click day/week names to navigate views
 			editable: true,
 			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '2017-08-01'
				},
				{
					title: 'Long Event',
					start: '2017-08-07',
					end: '2017-08-10'
				}
			],
             monthNames: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
         	monthNamesShort: ['１月','２月','３月','４月','５月','６月','７月','８月','９月','１０月','１１月','１２月'],
         	dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
         	dayNamesShort: ['日','月','火','水','木','金','土'],

         });
    });