function videoHandler(videoBLock) {
	if(!videoBLock) return;
	let video = videoBLock.querySelector('.video__payer');
	let playBtn = videoBLock.querySelector('.video__play');
	let pauseBtn = videoBLock.querySelector('.video__pause');

	let playEventsCallback = [];
	let pauseEventsCallback = [];

	const togglePlayPause = (play) => {
		if(play) {
			video.play();
			playBtn.style.display = 'none';
			pauseBtn.style.display = 'block';

			if(playEventsCallback.length) {
				playEventsCallback.forEach(callback => {
					callback();
				})
			}
		} else {
			video.pause();
			playBtn.style.display = 'block';
			pauseBtn.style.display = 'none';

			if(pauseEventsCallback.length) {
				pauseEventsCallback.forEach(callback => {
					callback();
				})
			}
		}
	}

	playBtn.addEventListener('click', () => {
		togglePlayPause(true);
	})
	pauseBtn.addEventListener('click', () => {
		togglePlayPause(false);
	})

	return {
		play() {
			togglePlayPause(true);
		},
		pause() {
			togglePlayPause(false);
		},
		subscribe(string, callback) {
			if(string === 'play') {
				playEventsCallback.push(callback);
			} else if (string === 'pause') {
				pauseEventsCallback.push(callback);
			}
		}
	}

}