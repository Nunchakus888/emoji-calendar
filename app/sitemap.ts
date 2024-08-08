import {MetadataRoute} from 'next'

const url = 'https://www.x-calendar.com';
import {languages} from "@/utils";

const getAlternates = (date) => {
	return languages.reduce((acc, lang) => {
		acc[lang] = `${url}/${lang}/${date}`;
		return acc;
	}, {});
}

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const years = ['2023', '2024', '2025'];

export default function sitemap() {
	return months.map((month) => years.map((year) => {
		const date = `${month}/${year}`;
		return {
			url: `${url}/${date}`,
			lastModified: new Date(),
			priority: 1,
			changeFrequency: 'monthly',
			alternates: {
				languages: getAlternates(date),
			},
		};
	})).flat();
}


// this file is not work..