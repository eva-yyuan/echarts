
	var themeSelector = $('#theme-select');

	if(themeSelector) {
		themeSelector.html('<option selected="true" name="macarons">macarons</option>'
			+ '<option name="infographic">infographic</option>'
			+ '<option name="shine">shine</option>'
			+ '<option name="dark">dark</option>'
			+ '<option name="blue">blue</option>'
			+ '<option name="green">green</option>'
			+ '<option name="red">red</option>'
			+ '<option name="gray">gray</option>'
			+ '<option name="helianthus">helianthus</option>'
			+ '<option name="roma">roma</option>'
			+ '<option name="mint">mint</option>'
			+ '<option name="macarons2">macarons2</option>'
			+ '<option name="sakura">sakura</option>'
			+ '<option name="default">default</option>');
		
		$(themeSelector).on('change', function() {
			selectTheme($(this).val());
		});
	}


	function selectTheme(seletheme) {
		maincharts.showLoading();
		var theme;
		switch(seletheme) {
			case "shine":
				theme = themeShine();
				break;
			case "dark":
				theme = themeDark();
				break;
			case "blue":
				theme = themeBlue();
				break;
			case "green":
				theme = themeGreen();
				break;
			case "red":
				theme = themeRed();
				break;
			case "gray":
				theme = themeGray();
				break;
			case "helianthus":
				theme = themeHelianthus();
				break;
			case "roma":
				theme = themeRoma();
				break;
			case "mint":
				theme = themeMint();
				break;
			case "macarons2":
				theme = themeMacarons2();
				break;
			case "sakura":
				theme = themeSakura();
				break;
			default: 
				theme = seletheme;
				break;
		}
		setTimeout(function() {
			maincharts.hideLoading();
			maincharts.setTheme(theme);
		}, 500);
	}


	function refresh(isBtnRefresh) {
		if(isBtnRefresh) {
			selectTheme($(themeSelector).val())
		}
	}

