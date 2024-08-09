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
		this.url = 'https://www.x-calendar.com';

		const sitemapList = [
			{
				dir: 'lang',
				generator: this.generateLangUrls,
			},
			// ...this.years.map(y => ({
			// 	dir: y,
			// 	generator: this.generateYealyUrls,
			// })),
		];

		for(const i of sitemapList) {
			this.writeSitemap(`public/${i.dir}-sitemap-www.xml`, i.generator({ ...this, year: i.dir }));
			this.writeSitemap(`public/${i.dir}-sitemap.xml`, i.generator({ ...this, year: i.dir, url: 'https://x-calendar.com' }));
		}

		// alternates
		// this.writeSitemap(`public/alternates-sitemap.xml`, this.sitemapWithAlternates(this), !0);
	}

	generateYealyUrls({ year, langs, date, months, url }) {
		return langs.map((lang) => {
			return months.map((month) => {
				return {
					url: [
						{ loc: `${url}/${lang}/${month}/${year}` },
						{ lastmod: date },
						{ changefreq: 'monthly' },
						{ priority: 1 },
					],
				}
			})
		}).flat();
	}

	generateLangUrls({ langs, date, url = 'https://www.x-calendar.com' }) {
		return langs.map((_) => {
			return {
				// <url>
				url: [
					// <loc>http://www.example.com/</loc>
					{ loc: `${url}/${_}` },

					// <lastmod>2005-01-01</lastmod>
					{ lastmod: date },

					// <changefreq>monthly</changefreq>
					{ changefreq: 'monthly' },

					// <priority>0.8</priority>
					{ priority: 1 },
				],
			}
		});
	};

	getAlternates({ date, url }) {
		return this.langs.map(( lang) => ({
			'xhtml:link': [
				{
					_attr: {
						rel: 'alternate',
						hreflang: lang,
						href: `${url}/${lang}/${date}`,
					},
				}
			]
		}));
	}

	/**
	 *   <url>
	 *     <loc>https://www.example.com/english/page.html</loc>
	 *     <xhtml:link
	 *                rel="alternate"
	 *                hreflang="de"
	 *                href="https://www.example.de/deutsch/page.html"/>
	 *     <xhtml:link
	 *                rel="alternate"
	 *                hreflang="de-ch"
	 *                href="https://www.example.de/schweiz-deutsch/page.html"/>
	 *     <xhtml:link
	 *                rel="alternate"
	 *                hreflang="en"
	 *                href="https://www.example.com/english/page.html"/>
	 *   </url>
	 *   <url>
	 */

	sitemapWithAlternates({ months, years, url, date: now }) {
		return months.map((month) => years.map((year) => {
			const date = `${month}/${year}`;
			return {
				url: [
					{ loc: `${url}/${date}` },
					...this.getAlternates({ date, url }),
				]
			}
		})).flat();
	}

	async writeSitemap(outFile, urlset, alternates) {
		// Generate the XML markup
		const item = {
			_attr: {
				xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
			},
		};

		if(alternates) {
			item._attr['xmlns:xhtml'] = 'http://www.w3.org/1999/xhtml';
		}

		const xmlString = xml(
			{ 
				urlset: [
					item,
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