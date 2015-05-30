do ( win = window, $ = jQuery ) ->

	defaults =
		className: ''
		delay: 0
		callBack: ( $item ) ->
			return

	$win = $ win
	appearedItemIndexes = []

	winHeight = $win.height()
	scrollTop = $win.scrollTop()

	chechOptionsType = ( options ) ->
		result =
			className: if typeof options.className is 'string' then options.className else defaults.className
			delay: if typeof options.delay * 1 is 'number' then options.delay else defaults.delay
			callBack: if typeof options.callBack is 'function' then options.callBack else defaults.callBack
		return result

	windowDidScroll = ( $this, opts ) ->
		scrollTop = $win.scrollTop()

		$this.each ( index ) ->
			if $.inArray( index, appearedItemIndexes ) >= 0
				return

			$self = $ this
			if scrollTop + winHeight > $self.offset().top
				setTimeout () ->
					$self.addClass opts.className
					return
				, opts.delay
				opts.callBack $self
				appearedItemIndexes[ appearedItemIndexes.length ] = index
			return

		return

	$.fn.addClassOnAppear = ( className, delay, callBack ) ->
		options =
			className: className
			delay: delay
			callBack: callBack
		opts = chechOptionsType( $.extend( defaults, options ) )
		$this = $ this

		windowDidScroll( $this, opts )

		$win.scroll ( e ) ->
			windowDidScroll( $this, opts )
			return

		$win.resize ( e ) ->
			winHeight = $win.height()
			return
			
		return

	return

