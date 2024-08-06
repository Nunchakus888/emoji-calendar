const fs = require('fs-extra')
const xml = require('xml')

// import * as dfs from "date-fns";
// import * as locales from "date-fns/locale";
const dfs = require('date-fns')
const locales = require('date-fns/locale')


// https://www.sitemaps.org/protocol.html

class SitemapWriter {
	constructor() {
        this.langs = Object.keys(locales).map((k) => `${locales[k].code}`);
		this.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
		this.years = ['2021', '2022', '2023', '2024', '2025', '2026', '2027'];
        this.date = dfs.format(Date.now(), 'yyyy-MM-dd');

		const sitemapList = [
			{
				dir: 'lang',
				generator: this.generateLangUrls,
			},
			...this.years.map(y => ({
				dir: y,
				generator: this.generateYealyUrls,
			})),
		];

		for(const i of sitemapList) {
			this.writeSitemap(`public/${i.dir}-sitemap.xml`, i.generator({ ...this, year: i.dir }));
		}
	}

	generateYealyUrls({ year, langs, months }) {
		// months * lang * year
		return langs.map((lang) => {
			return months.map((month) => {
				return {
					url: [
						{ loc: `https://www.x-calendar.com/${lang}/${month}/${year}` },
						{ lastmod: this.date },
						{ changefreq: 'monthly' },
						{ priority: 1 },
					],
				}
			})
		}).flat();
	}

	generateLangUrls({ langs }) {
		return langs.map((_) => {
			return {
				// <url>
				url: [
					// <loc>http://www.example.com/</loc>
					{ loc: `https://www.x-calendar.com/${_}` },

					// <lastmod>2005-01-01</lastmod>
					{ lastmod: this.date },

					// <changefreq>monthly</changefreq>
					{ changefreq: 'monthly' },

					// <priority>0.8</priority>
					{ priority: 1 },
				],
			}
		});
	};

	async writeSitemap(outFile, urlset) {
		// Generate the XML markup
		const xmlString = xml(
			{ 
				urlset: [
					{
						_attr: {
							xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
						},
					},
					...urlset,
				]
			},
			true
		)

		// Write the file to disk
		await fs.writeFile(outFile, '<?xml version="1.0" encoding="UTF-8"?>' + xmlString)
	}
}

new SitemapWriter();