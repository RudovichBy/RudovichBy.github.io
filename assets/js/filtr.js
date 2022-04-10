{
	//**************************фильтр**************************	
	const filter = () => {
		const menu = document.querySelector('.main__portfolio__selection'),
			items = menu.querySelectorAll('.selection__items'),
			btnAll = menu.querySelector('.all'),
			btnSuit = menu.querySelector('.suit'),
			btnCss = menu.querySelector('.css__practick'),
			btnJs = menu.querySelector('.js__practick'),
			btnModx = menu.querySelector('.cms'),
			wrapper = document.querySelector('.main__portfolio__wrapper'),
			markAll = wrapper.querySelectorAll('.all'),
			markJs = wrapper.querySelectorAll('.js__practick'),
			markModx = wrapper.querySelectorAll('.cms'),
			markSuit = wrapper.querySelectorAll('.suit'),
			markCss = wrapper.querySelectorAll('.css__practick');
		// no = document.querySelector('.portfolio-no');

		const typeFilter = (markType) => {
			markAll.forEach(mark => {
				mark.style.display = 'none';
				mark.classList.remove('animated', 'fadeIn');
			});

			// no.style.display = 'none';
			// no.classList.remove('animated', 'fadeIn');

			if (markType) {
				markType.forEach(mark => {
					mark.style.display = 'block';
					mark.classList.add('animated', 'fadeIn');
				});
			} else {
				no.style.display = 'block';
				no.classList.add('animated', 'fadeIn');
			}
		};

		btnAll.addEventListener('click', () => {
			typeFilter(markAll);
		});

		btnSuit.addEventListener('click', () => {
			typeFilter(markSuit);
		});

		btnCss.addEventListener('click', () => {
			typeFilter(markCss);
		});

		btnModx.addEventListener('click', () => {
			typeFilter(markModx);
		});

		btnJs.addEventListener('click', () => {
			typeFilter(markJs);
		});

		menu.addEventListener('click', (e) => {
			let target = e.target;

			if (target && target.tagName == 'DIV') {
				items.forEach(btn => btn.classList.remove('is-checked'));
				target.classList.add('is-checked');
			}
		});
	};

	filter();
}