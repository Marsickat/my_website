// src/lib/i18n.js
// Локализация для портфолио (ru, en, de)

export const messages = {
	ru: {
		about:
			'Я программист-любитель, обучался всему по бесплатным источникам в интернете. Делаю мини-проекты для себя по рабочей надобности или если найду интересный материал в интернете и пытаюсь повторить его.',
		projects: 'Проекты',
		skill_level: 'Уровень владения',
		github_btn: 'Посмотреть мои проекты на GitHub',
		filter_reset: 'Сбросить фильтр',
		tech_stack: 'Технологии',
		about_me: 'Обо мне'
	},
	en: {
		about:
			"I'm a self-taught programmer. I learned everything from free resources on the internet. I create mini-projects for myself when needed at work or if I find something interesting online and try to recreate it.",
		projects: 'Projects',
		skill_level: 'Skill level',
		github_btn: 'View my projects on GitHub',
		filter_reset: 'Reset filter',
		tech_stack: 'Tech Stack',
		about_me: 'About Me'
	},
	de: {
		about:
			'Ich bin ein autodidaktischer Programmierer. Alles habe ich aus kostenlosen Quellen im Internet gelernt. Ich mache Mini-Projekte für mich selbst, wenn ich sie für die Arbeit brauche oder wenn ich etwas Interessantes im Internet finde und es nachbauen möchte.',
		projects: 'Projekte',
		skill_level: 'Fähigkeitsniveau',
		github_btn: 'Meine Projekte auf GitHub ansehen',
		filter_reset: 'Filter zurücksetzen',
		tech_stack: 'Technologien',
		about_me: 'Über mich'
	}
};

export const defaultLang = 'ru';

export function getLang() {
	if (typeof localStorage !== 'undefined') {
		return localStorage.getItem('lang') || defaultLang;
	}
	return defaultLang;
}

export function setLang(lang) {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('lang', lang);
	}
}
