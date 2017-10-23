/* Описание уровней для игрового движка:
* start_area:{x:14, y:4} - стартовый размер элементов на уровне
*
* colors: ["type_1", "type_2", "type_3"], - типы убираемых элементов на уровне (type_1-type_5)
*
* Бонусы: (названия картинок)
* bonuses:
* [
* "diag_lightning",
* "hor_vert_lightning",
* "bomb",
* "vert_lightning",
* "hor_lightning"
* ],
*
* Показать хелп при старте уровня
* show_help:"help_temp", (help_temp - название картинки)
*
* Пингвин в клетке:
* closed:true, (есть/нету на уровне)
*
* Сколько линий должно добавиться выигрыша:
*
* win_lines:12 (число)
* */

var CONST_LEVELS =
[
	{//level 1
		start_area:{x:12, y:3},
		colors: ["type_1", "type_2", "type_3"],
		bonuses:false,
		show_help:["Tips_1_1", "Tips_1_2"],
		help_text:"tip1",
		closed:false,
		win_lines:12
	},
	{//level 2
		start_area:{x:12, y:3},
		colors: ["type_1", "type_2", "type_3"],
		bonuses:false,
		show_help:false,
		closed:false,
		win_lines:13
	},
	{//level 3
		start_area:{x:12, y:4},
		colors: ["type_1", "type_2", "type_3"],
		bonuses:["bomb"],
		show_help:["Tips_2_1", "Tips_2_2"],
		help_text:"tip2",
		closed:false,
		win_lines:14
	},
	{//level 4
		start_area:{x:12, y:4},
		colors: ["type_1", "type_2", "type_3"],
		bonuses:["bomb"],
		show_help:false,
		closed:false,
		win_lines:15
	},
	{//level 5
		start_area:{x:12, y:4},
		colors: ["type_1", "type_2", "type_3"],
		bonuses:["bomb", "vert_lightning"],
		show_help:["Tips_4_1", "Tips_4_2", "Tips_4_3", "Tips_4_4"],
		help_text:"tip3",
		closed:false,
		win_lines:16
	},
	{//level 6
		start_area:{x:12, y:5},
		colors: ["type_1", "type_2", "type_3"],
		bonuses:["bomb", "vert_lightning"],
		show_help:false,
		closed:false,
		win_lines:17
	},
	{//level 7
		start_area:{x:12, y:5},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning"],
		show_help:["Tips_8_1","Tips_8_2","Tips_8_3","Tips_8_4"],
		help_text:"tip4",
		closed:false,
		win_lines:18
	},
	{//level 8
		start_area:{x:12, y:5},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning"],
		show_help:false,
		closed:false,
		win_lines:20
	},
	{//level 9
		start_area:{x:12, y:5},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning","hor_lightning"],
		show_help:["Tips_3_1", "Tips_3_2"],
		help_text:"tip5",
		closed:false,
		win_lines:22
	},
	{//level 10
		start_area:{x:12, y:5},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning","hor_lightning"],
		show_help:["Tips_7_1", "Tips_7_2", "Tips_7_3", "Tips_7_4"],
		help_text:"tip6",
		closed:true,
		win_lines:23
	},
	{//level 11
		start_area:{x:12, y:6},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning","hor_lightning"],
		show_help:false,
		closed:true,
		win_lines:24
	},
	{//level 12
		start_area:{x:12, y:6},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning","hor_lightning"],
		show_help:false,
		closed:true,
		win_lines:25
	},
	{//level 13
		start_area:{x:12, y:6},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning","hor_lightning"],
		show_help:false,
		closed:true,
		win_lines:26
	},
	{//level 14
		start_area:{x:12, y:6},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning","hor_lightning", "diag_lightning"],
		show_help:["Tips_6_1", "Tips_6_2", "Tips_6_3", "Tips_6_4"],
		help_text:"tip7",
		closed:true,
		win_lines:27
	},
	{//level 15
		start_area:{x:12, y:7},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning","hor_lightning", "diag_lightning"],
		show_help:false,
		closed:true,
		win_lines:28
	},
	{//level 16
		start_area:{x:12, y:7},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning","hor_lightning", "diag_lightning", "hor_vert_lightning"],
		show_help:["Tips_5_1", "Tips_5_2", "Tips_5_3", "Tips_5_4"],
		help_text:"tip8",
		closed:true,
		win_lines:29
	},
	{//level 17
		start_area:{x:12, y:7},
		colors: ["type_1", "type_2", "type_3", "type_4"],
		bonuses:["bomb", "vert_lightning","hor_lightning", "diag_lightning", "hor_vert_lightning"],
		show_help:false,
		closed:true,
		win_lines:30
	},
	{//level 18
		start_area:{x:12, y:7},
		colors: ["type_1", "type_2", "type_3", "type_4", "type_5"],
		bonuses:["bomb", "vert_lightning","hor_lightning", "diag_lightning", "hor_vert_lightning"],
		show_help:["Tips_9_1", "Tips_9_2", "Tips_9_3"],
		help_text:"tip9",
		closed:true,
		win_lines:31
	},
	{//level 19
		start_area:{x:12, y:7},
		colors: ["type_1", "type_2", "type_3", "type_4", "type_5"],
		bonuses:["bomb", "vert_lightning","hor_lightning", "diag_lightning", "hor_vert_lightning"],
		show_help:false,
		closed:true,
		win_lines:32
	},
	{//level 20
		start_area:{x:12, y:7},
		colors: ["type_1", "type_2", "type_3", "type_4", "type_5"],
		bonuses:["bomb", "vert_lightning","hor_lightning", "diag_lightning", "hor_vert_lightning"],
		show_help:false,
		closed:true,
		win_lines:35
	}
];